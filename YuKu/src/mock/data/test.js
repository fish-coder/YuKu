import Mock from 'mockjs'

const Users = []

for (let i = 0; i < 100; i++) {
  Users.push(Mock.mock({
    'id|111111111-200000000': 1,
    name: Mock.Random.cname(),
    'identity|1': ['客服人员', '管理者', '数据购买方', '数据提供方', '游客', '其他人员'],
    regDate: Mock.Random.date()
  }))
}

export { Users }
