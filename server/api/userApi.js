//测试用api示例

var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');
const { request, response } = require('express');
 
// 连接数据库
var conn = mysql.createConnection(models.mysql);
 
conn.connect();
//将结果写入json数据并返回
var jsonWrite = function(res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};
 
// 增加用户接口
router.post('/addUser', (req, res) => {
    var sql = $sql.user.add;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.username, params.age], function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});

//用户查询数据的接口
router.get("/getInfo",(request,response)=>{
    var sql=$sql.user.getInfo
    conn.query(sql,function(err,result){
        if(err){
            console.log(err)
        }
        if(result){
            //jsonWrite函数为上面的自定义函数
            jsonWrite(response,result)
        }
    })
}) 

//登录账户密码检验
router.post('/loginCheck', (req, res) => {  

    var params = req.body;
    var sql = `select * from login where username='${params.username}' and password='${params.password}'`
    console.log(params);
    conn.query(sql,function(err, result) {
        if (err) {
            console.log(err);
            jsonWrite(res, err);
        }
        if (result) {
            //返回结果
            jsonWrite(res, result);
            console.log(result)
            //res.send(result)
        }
    })
});

//用户注册
router.post('/register',(req,res)=>{
    var params=req.body;
    var sql=`insert into login values(null,'${params.username}','${params.password}')`;
    conn.query(sql,function(error,result){
        if(error){
            console.log(error);
            jsonWrite(res, error);
        }
        if(result){
            //返回结果
            jsonWrite(res, result);
            console.log(result)
        }
    })

})

//获取登录用户信息
router.post('/administratorsInfo',(req,res)=>{
    var params=req.body;
    console.log(params)
    var sql=`select * from logininfo where manageId=${params.manageId}`;
    conn.query(sql,function(error,result){
        if(error){
            console.log(error);
            jsonWrite(res, error);
        }
        if(result){
            //返回结果
            jsonWrite(res, result);
            console.log(result)
        }
    })

})
//获取通知信息
router.get('/notice',(req,res)=>{
    var params=req.body;
    console.log(params)
    var sql=`select * from notice`;
    conn.query(sql,function(error,result){
        if(error){
            console.log(error);
            jsonWrite(res, error);
        }
        if(result){
            //返回结果
            jsonWrite(res, result);
            console.log(result)
        }
    })

})

//获取客户信息
router.get('/customerInfo',(req,res)=>{
    var params=req.body;
    console.log(params)
    var sql=`select * from customerinfo`;
    conn.query(sql,function(error,result){
        if(error){
            console.log(error);
            jsonWrite(res, error);
        }
        if(result){
            //返回结果
            jsonWrite(res, result);
            console.log(result)
        }
    })

})

//获取
module.exports = router;