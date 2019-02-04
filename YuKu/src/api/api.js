import axios from 'axios'

// const requestLogin = params => {
//   return axios.post(`/login`, params).then(res => res.data)
// }

export const getUserList = params => {
  return axios.get(`/baseService/user/getUserList`, {
    params: params
  })
}

export const getUserListPage = params => {
  return axios.get(`/baseService/user/getUserListPage`, {
    params: params
  })
}

export const removeUser = params => {
  return axios.get(`/baseService/user/removeUser`, {
    params: params
  })
}

export const batchRemoveUser = params => {
  return axios.get(`/baseService/user/batchRemoveUser`, {
    params: params
  })
}

export const editUserPermission = params => {
  return axios.get(`/baseService/user/editUserPermission`, {
    params: params
  })
}

export const editUserBase = params => {
  return axios.get(`/baseService/user/editUserBase`, {
    params: params
  })
}

export const addUser = params => {
  return axios.get(`/baseService/user/addUser`, {
    params: params
  })
}
