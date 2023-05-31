import service from "..";

//ces
// export function getHome() {
//   return service({
//     method: 'GET',
//     url: '/home'
//   })
// }

//获取首页Tab列表数据
export function getTabs() {
  return service({
    method: 'GET',
    url: '/tab'
  })
}

export function getFavoriteLists() {
  return service({
    method: 'GET',
    url: '/tab'
  })
}

export function getTeaLists() {
  return service({
    method: 'GET',
    url: '/index_list/0/data/1'
  })
}

export function getTabLists(index) {
  return service({
    method: 'GET',
    url: '/index_list/' + index + '/data/1'
  })
}
