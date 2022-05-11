import request from '@/utils/request'

export function addAskhelp(data) {
  return request({
    url: '/api/v1/addAskhelp',
    method: 'post',
    data
  })
}

export function getAskhelp(data) {
  return request({
    url: '/api/v1/getAskhelp',
    method: 'post',
    data
  })
}