import request from "@/utils/request";

export function toOrgan(data) {
  return request({
    url: "/organ/addOrgan",
    method: "post",
    data,
  });
}

export function getOrganApproveing(data) {
  return request({
    url: "/organ/getOrganApproveing",
    method: "post",
    data,
  });
}

export function getOrganApproved(data) {
  return request({
    url: "/organ/getOrganApproved",
    method: "post",
    data,
  });
}

export function acceptOrgan(data) {
  return request({
    url: "/organ/acceptOrgan",
    method: "post",
    data,
  });
}

export function refuseOrgan(data) {
  return request({
    url: "/organ/refuseOrgan",
    method: "post",
    data,
  });
}

//获取组织（管理）
export function getOrgan(data) {
  return request({
    url: "/organ/getOrgan",
    method: "post",
    data,
  });
}

//禁用组织
export function banOrgan(data) {
  return request({
    url: "/organ/banOrgan",
    method: "post",
    data,
  });
}
