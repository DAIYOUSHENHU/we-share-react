import request from '@/utils/request'

export function toOrgan(data) {
  return request({
    url: '/organ/addOrgan',
    method: 'post',
    data
  })
}

export function getOrganApproveing(data) {
  return request({
    url: '/organ/getOrganApproveing',
    method: 'post',
    data
  })
}

export function getOrganApproved(data) {
  return request({
    url: '/organ/getOrganApproved',
    method: 'post',
    data
  })
}

export function acceptOrgan(data) {
  return request({
    url: '/organ/acceptOrgan',
    method: 'post',
    data
  })
}

export function refuseOrgan(data) {
  return request({
    url: '/organ/refuseOrgan',
    method: 'post',
    data
  })
}