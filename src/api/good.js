import request from '@/utils/request'

export function addGood(data) {
  return request({
    url: '/good/addGood',
    method: 'post',
    data
  })
}

export function getGoodApproveing(data) {
  return request({
    url: '/good/getGoodApproveing',
    method: 'post',
    data
  })
}

export function getGoodApproved(data) {
  return request({
    url: '/good/getGoodApproved',
    method: 'post',
    data
  })
}

export function acceptGood(data) {
  return request({
    url: '/good/acceptGood',
    method: 'post',
    data
  })
}

export function refuseGood(data) {
  return request({
    url: '/good/refuseGood',
    method: 'post',
    data
  })
}

//申请物资（共享）
export function addShareGood(data) {
  return request({
    url: '/good/addShareGood',
    method: 'post',
    data
  })
}
//获取物资（共享）
export function getShareGood(data) {
  return request({
    url: '/good/getShareGood',
    method: 'post',
    data
  })
}

//获取共享物资（审核）
export function getShareApproveing(data) {
  return request({
    url: '/good/getShareApproveing',
    method: 'post',
    data
  })
}

export function acceptShare(data) {
  return request({
    url: '/good/acceptShare',
    method: 'post',
    data
  })
}

export function refuseShare(data) {
  return request({
    url: '/good/refuseShare',
    method: 'post',
    data
  })
}

export function getLend(data) {
  return request({
    url: '/api/v1/getLend',
    method: 'post',
    data
  })
}

export function getBorrow(data) {
  return request({
    url: '/api/v1/getBorrow',
    method: 'post',
    data
  })
}
	//获取组织物资（管理）
export function getGood(data) {
  return request({
    url: '/good/getGood',
    method: 'post',
    data
  })
}

	//禁用物资
  export function banGood(data) {
    return request({
      url: '/good/banGood',
      method: 'post',
      data
    })
  }
