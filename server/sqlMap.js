//SQL语句映射文件，以供api逻辑调用
// sql语句
var sqlMap = {
    // 用户
    user: {
        add: 'insert into user(id, name, age) values (0, ?, ?)',
        getInfo:"select * from login",
        
    }
}
 
module.exports = sqlMap;