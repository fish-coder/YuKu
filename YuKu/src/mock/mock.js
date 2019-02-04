import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import {
  Users
} from './data/test'
let _Users = Users

export default {
  bootstrap () {
    let mock = new MockAdapter(axios)

    mock.onGet('/baseService/user/getUserList').reply(config => {
      let {
        name
      } = config.params
      let mockUsers = _Users.filter(user => {
        if (name && user.name.indexOf(name) === -1) {
          return false
        }
        return true
      })
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            users: mockUsers
          }])
        }, 1000)
      })
    })

    mock.onGet('/baseService/user/getUserListPage').reply(config => {
      let {
        page,
        name
      } = config.params
      let mockUsers = _Users.filter(user => {
        if (name && user.name.indexOf(name) === -1) {
          return false
        }
        return true
      })
      let total = mockUsers.length
      mockUsers = mockUsers.filter((user, index) => {
        return index < 20 * page && index >= 20 * (page - 1)
      })
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            total: total,
            users: mockUsers
          }])
        }, 1000)
      })
    })

    mock.onGet('/baseService/user/removeUser').reply(config => {
      let {
        id
      } = config.params
      _Users = _Users.filter(user => user.id !== id)
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '删除成功'
          }])
        }, 500)
      })
    })

    mock.onGet('/baseService/user/batchRemoveUser').reply(config => {
      let {
        ids
      } = config.params
      ids = ids.split(',')
      _Users = _Users.filter(user => !ids.includes(user.id + ''))
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '删除成功'
          }])
        }, 500)
      })
    })

    mock.onGet('/baseService/user/editUserPermission').reply(config => {
      let {
        id,
        identity
      } = config.params
      _Users.some((user) => {
        if (user.id === id) {
          user.identity = identity
          return true
        }
      })
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '编辑成功'
          }])
        }, 500)
      })
    })

    mock.onGet('/baseService/user/editUserBase').reply(config => {
      let {
        id,
        name,
        regDate
      } = config.params
      _Users.some((user) => {
        if (user.id === id) {
          user.name = name
          user.regDate = regDate
          return true
        }
      })
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '编辑成功'
          }])
        }, 500)
      })
    })

    mock.onGet('/baseService/user/addUser').reply(config => {
      let {
        id,
        name,
        identity,
        regDate
      } = config.params
      _Users.push({
        id,
        name,
        identity,
        regDate
      })
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '新增成功'
          }])
        }, 500)
      })
    })
  }
}
