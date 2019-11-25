import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/auth/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/auth/user/info/' + token,
    method: 'get',
  })
}

export function logout(data) {
  return request({
    url: '/auth/user/logout',
    method: 'post',
    data
  })
}
