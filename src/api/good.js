import request from '@/utils/request'

export function addShareGood(data) {
  return request({
    url: '/good/addShareGood',
    method: 'post',
    data
  })
}