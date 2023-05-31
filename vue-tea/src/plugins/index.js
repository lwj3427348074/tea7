//封装vant的按需引入组件
import { Tabbar, TabbarItem, Icon, Tab, Tabs, Swipe, SwipeItem, NoticeBar } from 'vant';

let plugins = [Tabbar, TabbarItem, Icon, Tab, Tabs, Swipe, SwipeItem, NoticeBar]

export default function getVant(Vue) {
  plugins.forEach(item => Vue.use(item))
}