import { INIT_DATA } from './mutation-types'
import { Dialog } from 'vant';
export default {
  state: {
    list: []
  },

  mutations: {
    [INIT_DATA](state, arrAddress) {
      state.list = arrAddress
      console.log(state.list);
    }

  },
  actions: {},
}