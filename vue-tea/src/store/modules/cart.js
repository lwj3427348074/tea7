import { CART_LIST, CHECK_ALL, UN_CHECK_ALL, CHECK_ITEM } from './mutation-types'
import { Toast, Dialog } from 'vant';
import http from '@/request/api/request'

export default {
  state: {
    list: [],//购物车数据
    selectList: [],//选中的数据

  },
  getters: {
    isCheckedAll(state) {
      return state.list.length == state.selectList.length
    },
    total(state) {
      return state.list.reduce((sum, item) => {
        if (item.checked) {
          return sum + Number(item.goods_price)
        } else {
          return sum
        }
      }, 0).toFixed(2)
    },
    num(state) {
      return state.list.reduce((sum, item) => {
        if (item.checked) {
          return sum + Number(item.goods_num)
        } else {
          return sum
        }
      }, 0)
    }
  },
  mutations: {
    [CART_LIST](state, cartArr) {
      state.list = cartArr
      state.selectList = []
      cartArr.forEach(v => {
        state.selectList.push(v.id)
      })
      console.log(state.list);
      console.log(state.selectList);
    },
    //全选
    [CHECK_ALL](state) {
      state.selectList = state.list.map(v => {
        v['checked'] = true
        return v.id
      })
    },
    //全不选
    [UN_CHECK_ALL](state) {
      state.list.forEach(v => {
        v['checked'] = false
      })
      state.selectList = []
    },
    //单选
    [CHECK_ITEM](state, index) {
      let id = state.list[index].id
      let i = state.selectList.indexOf(id)
      //能在selectList找到list中对应的id，能找到就删除
      if (i > -1) {
        return state.selectList.splice(i, 1)
      } else {
        //如果没有选中，就给selecList添加一个id进去
        state.selectList.push(id)
      }
    },
    //删除
    delGoods(state) {
      state.list = state.list.filter(v => {
        return state.selectList.indexOf(v.id) == -1
      })
    }
  },
  actions: {
    checkAllFn({ commit, getters }) {
      getters.isCheckedAll ? commit('unCheckAll') : commit('checkAll');
    },
    delGoodsFn({ commit, state, }, id) {
      //删除购物车商品
      if (state.selectList.length == 0) {
        //如果没有选中，则提示信息
        Toast.fail('请选择商品');
      }
      let arrCart = []
      Dialog.confirm({
        message: '确定要删除这些商品吗',
      })
        .then(() => {
          if (typeof id == 'number') {
            //单个删除
            arrCart = [id]
            let index = state.list.findIndex(v => {
              return v.id == id
            })
            state.list.splice(index, 1)
          } else {
            //多选删除
            arrCart = state.selectList
            commit('delGoods')
            //全不选
            // commit('unCheckAll')
          }
          //确定
          http.$axios({
            url: '/api/deleteCart',
            method: 'POST',
            data: {
              arrId: arrCart
            }
          }).then(res => {
            if (res.success) {
              Toast.success(res.msg);
            }
          })
        })
    }
  },
}