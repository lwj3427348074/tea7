import { INIT_ORDER } from './mutation-types'
import { Dialog } from 'vant';

export default {
  state: {
    list: [],
    order_id: localStorage.getItem('tea_orderId') || ''
  },
  mutations: {
    [INIT_ORDER](state, id) {
      state.list = id
      //存储订单号
      console.log(id);
      state.order_id = id[0].order_id
      localStorage.setItem('tea_orderId', id[0].order_id)
    }
  }
}