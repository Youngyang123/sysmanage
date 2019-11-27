import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/sys/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/sys/info/' + token,
    method: 'get',
  })
}

export function logout(token) {
  return request({
    url: `/sys/logout/${token}`,
    method: 'post',
  })
}
