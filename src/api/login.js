import request from "@/utils/request";

export function login(data) {
  return request({
    url: "/api/v1/login",
    method: "post",
    data,
  });
}

//获取用户（管理）
export function getUser(data) {
  return request({
    url: "/api/v1//getUser",
    method: "post",
    data,
  });
}

//禁用用户
export function banUser(data) {
  return request({
    url: "/api/v1//banUser",
    method: "post",
    data,
  });
}

//系统信息
export function sysInfo(data) {
  return request({
    url: "/api/v1/sysInfo",
    method: "post",
    data,
  });
}
