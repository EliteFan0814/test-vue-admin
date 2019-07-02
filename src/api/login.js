import Mock from 'mockjs'
import _ from 'lodash'
import usersData from '@/mock/users.js'

// usersData 为一个数组，第一个为 admin 第二个为 normal
// option.body 的内容如下：
// {
//    account: aaa@bbb.ccc,
//    password: xxxxxx
//  }
Mock.mock('/login', 'post', function (options) {
    // 获取 用户输入的 账户信息
    let _obj = JSON.parse(options.body)
    // 从 mock 数据中对比用户输入的 然后过滤出同时存在的 account 是一个数组
    let _userData = _.filter(usersData, {
        account: _obj.account
    });
    // 如果存在 _userData 说明输入正确，则设置登录为 true
    if (_userData && _userData.length > 0) {
        _userData[0]['isLogin'] = true
    } else {
        // 否则设置 _userData 为：
        _userData = [{ isLogin: false }]
    }
    return _userData[0]
})

Mock.mock('/logout', 'get', function () {
    return {
        isLogin: false
    }
})