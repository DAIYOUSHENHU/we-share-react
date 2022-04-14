export function getToken() {
  return localStorage.getItem("token");
}

export function setToken(token) {
  localStorage.setItem("token", token);
}

export function getRole() {
  return localStorage.getItem("role");
}

export function setRole(Role) {
  localStorage.setItem("role", Role);
}
// 退出登陆
export function clearToken() {
  localStorage.removeItem("token");
}

export function isLogined() {
  if (localStorage.getItem("token")) {
      return true;
  }
  return false;
}