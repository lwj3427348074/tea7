import { INIT_DATA } from './mutation-types'
import { Dialog } from 'vant';
export default {
  state: {
    list: []
  },
  getters: {
    defaultAddress(state) {
      return state.list.filter(item => {
        return item.isDefault == 1
      })
    }
  },
  mutations: {
    [INIT_DATA](state, arrAddress) {
      state.list = arrAddress
    }

  },
  actions: {},
}