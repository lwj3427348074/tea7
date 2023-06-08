<template>
  <div class="addressList">
    <Header>
      <span v-if="addressStatus">添加地址</span>
      <span v-else>编辑地址</span>
    </Header>
    <section>
      <van-address-edit v-if="addressStatus" areaCode :area-list="areaList" show-set-default @save="onAdd" />
      <van-address-edit v-else :area-list="areaList" :address-info="addressInfo" show-delete show-set-default @save="onUpdate" @delete="onDelete" />
    </section>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import { Toast } from 'vant'
import http from '@/request/api/request'
import { areaList } from '@vant/area-data'
import Header from '@/views/address/Header.vue'
import Tabbar from '@/components/common/Tabbar.vue'

export default {
  components: { Header, Tabbar },
  name: 'AddressList',
  data() {
    return {
      addressStatus: false,
      areaList,
      addressInfo: {},
      searchResult: [],
    }
  },
  created() {
    let key = JSON.parse(this.$route.params.key)
    if (key == 'add') {
      //是通过添加进来的
      this.addressStatus = true
    } else {
      //通过编辑进来的
      this.addressInfo = key
      this.addressInfo.isDefault =
        this.addressInfo.isDefault == 1 ? true : false
    }
  },
  methods: {
    //点击保存触发 ==>增加
    onAdd(content) {
      console.log(content)
      content.isDefault = content.isDefault == true ? 1 : 0
      http
        .$axios({
          url: 'api/addAddress',
          method: 'POST',
          headers: {
            //要知道是哪一个用户
            token: true,
          },
          data: { ...content },
        })
        .then((res) => {
          if (res.success) {
            Toast.success(res.msg)
            this.$router.back()
          }
        })
    },
    //点击保存触发修改
    onUpdate(content) {
      content.isDefault = content.isDefault == true ? 1 : 0
      http
        .$axios({
          url: 'api/updateAddress',
          method: 'POST',
          headers: {
            //要知道是哪一个用户
            token: true,
          },
          data: { ...content },
        })
        .then((res) => {
          if (res.success) {
            Toast.success(res.msg)
            this.$router.back()
          }
        })
    },
    //删除
    onDelete(content) {
      http
        .$axios({
          url: 'api/deleteAddress',
          method: 'POST',
          headers: {
            //要知道是哪一个用户
            token: true,
          },
          data: { id: content.id },
        })
        .then((res) => {
          console.log(res)
          if (res.success) {
            Toast.success(res.msg)
            this.$router.back()
          }
        })
    },
  },
}
</script>

<style lang="less" scoped>
section {
  height: 100vh;
  background-color: #f7f7f7;
  .van-address-edit {
    padding: 0;
    /deep/ .van-address-edit__buttons {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
    }
    /deep/ .van-button--danger {
      width: 18.75rem;
      height: 2.5rem;
      background-color: #b0352f;
    }
    /deep/ .van-button--default {
      width: 18.75rem;
      height: 2.5rem;
    }
  }
}
</style>