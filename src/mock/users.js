import Mock from 'mockjs'
let Random = Mock.Random

export default Mock.mock([{
    name: '@cname()',
    account: Random.email(),
    roles: ['admin']
}, {
    name: '@cname()',
    account: Random.email(), 
    roles: ['normal']
}]);