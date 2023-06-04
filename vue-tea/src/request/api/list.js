import service from "..";


export function getLists() {
  return service({
    method: 'GET',
    url: '/goods/list'
  })
}