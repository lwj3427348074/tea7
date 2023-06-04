//封装vant的按需引入组件
import { Tabbar, TabbarItem, Icon, Tab, Tabs, Swipe, SwipeItem, NoticeBar, Lazyload } from 'vant';


let plugins = [Tabbar, TabbarItem, Icon, Tab, Tabs, Swipe, SwipeItem, NoticeBar, Lazyload]


export default function getVant(Vue) {
  plugins.forEach(item => Vue.use(item))
}