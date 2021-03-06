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

//管理员登录账户密码检验
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

//管理员用户注册
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

//获取管理员登录用户信息
router.post('/administratorsInfo',(req,res)=>{
    var params=req.body;
    //console.log(params)
    var sql=`select * from logininfo where manageId=${params.manageId}`;
    conn.query(sql,function(error,result){
        if(error){
            //console.log(error);
            jsonWrite(res, error);
        }
        if(result){
            //返回结果
            jsonWrite(res, result);
            //console.log(result)
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
            //console.log(result)
        }
    })

})

//普通登录账户密码检验
router.post('/userLoginCheck', (req, res) => {  

    var params = req.body;
    var sql = `select * from user_login where username='${params.username}' and password='${params.password}'`
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

//获取普通登录用户信息
router.post('/userInfo',(req,res)=>{
    var params=req.body;
    console.log(params)
    var sql=`select * from user_login_info where userInfoId=${params.userInfoId}`;
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
//获取普通登录通知信息
router.post('/userNotice',(req,res)=>{
    var params=req.body;
    console.log(params)
    var sql=`select content,createTime from user_notice where userInfoId=${params.userInfoId}`;
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
//普通用户提交信息
router.post('/userSubmit',(req,res)=>{
    var params=req.body;
    console.log(params)
    var sql=`INSERT INTO user_submit(userInfoId,carId,bookingTime,phone,NAME,sex,bookingType) 
    VALUE(${params.userInfoId},${params.carType},'${params.bookingTime}',${params.phone},'${params.name}','${params.sex}','${params.bookingType}');`;
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

    // var sql2=`select * from notice;`
    // conn.query(sql2,function(error,result){
    //     if(error){
    //         console.log(error);
    //         jsonWrite(res, error);
    //     }
    //     if(result){
    //         //返回结果
    //         jsonWrite(res, result);
    //         console.log(result)
            
    //     }
    // })
})

//后台所有获取已注册用户信息
router.get('/getAllUserInfo',(req,res)=>{
    var sql=`select * from user_login_info`;
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

//后台获取所有用户预约信息
router.get('/getAllUserBookingInfo',(req,res)=>{
    var sql=`select * from user_submit`;
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

//后台获取所有销售信息
router.get('/getAllSellInfo',(req,res)=>{
    var sql=`select * from select_order`;
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

//保存客户信息
router.post('/saveCustomerInfo',(req,res)=>{
    var params=req.body;
    console.log(params)
    var sql=`UPDATE customerinfo SET name='${params.name}',sex='${params.sex}',phone=${params.phone},address='${params.address}',birthday='${params.birthday}' 
    WHERE customerId=${params.customerId}`;
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

//删除客户信息
router.post('/deleteCustomerInfo',(req,res)=>{
    var params=req.body;
    console.log(params)
    var sql=`DELETE FROM customerinfo WHERE customerId=${params.customerId};`;
    var sql2=`ALTER TABLE customerinfo AUTO_INCREMENT=1;`
    conn.query(sql,function(error,result){
        if(error){
            console.log(error);
            jsonWrite(res, error);
        }
        if(result){
            //返回结果
            jsonWrite(res, result);
            console.log(result,"addad")
            console.log("删除成功")
        }
    })
    conn.query(sql2)
});

//添加客户信息
router.post('/addCustomerInfo',(req,res)=>{
    var params=req.body;
    console.log(params)
    var sql=`INSERT INTO customerinfo(NAME,sex,phone,address,birthday) 
    VALUE('${params.name}','${params.sex}',${params.phone},'${params.address}','${params.birthday}');`;
   
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
    //conn.end()
});

//保存销售信息
router.post('/saveSellInfo',(req,res)=>{
    var params=req.body;
    console.log(params)
   
    var sql1=`update customerinfo set name='${params.name}',address='${params.address}',phone=${params.phone} where customerId=${params.customerId};
    update order_form set money=${params.money},carID=${params.carId} where orderID=${params.orderId}`
    //var sql2=`update order_form set money=${params.money},carID=${params.carId} where orderID=${params.orderId}`
    
    conn.query(sql1,function(error,result){
        if(error){
            console.log("错误",error);
            jsonWrite(res, error);
        }
        if(result){
            //返回结果
            jsonWrite(res, result);
            console.log("正确",result)
            
        }
    })
 
});

//删除一条销售记录
router.post('/deleteSellInfo',(req,res)=>{
    var params=req.body;
    console.log(params)
    var sql=`DELETE FROM order_form WHERE orderID=${params.orderId};`;
    var sql2=`ALTER TABLE order_form AUTO_INCREMENT=1;`
    conn.query(sql,function(error,result){
        if(error){
            console.log(error);
            jsonWrite(res, error);
        }
        if(result){
            //返回结果
            jsonWrite(res, result);
            console.log(result,"addad")
            console.log("删除成功")
        }
    })
    conn.query(sql2)
});

//添加一条销售记录
router.post('/addSellInfo',(req,res)=>{
    var params=req.body;
    console.log(params)
    var sql=`insert into  order_form(customerID,carID,money) value(${params.customerId},${params.carId},${params.money});`;

    conn.query(sql,function(error,result){
        if(error){
            console.log(error);
            jsonWrite(res, error);
        }
        if(result){
            //返回结果
            jsonWrite(res, result);
            console.log(result,"addad")
            console.log("删除成功")
        }
    })
   
});


//更改一条已注册用户信息
router.post('/updateRegisterUserInfo',(req,res)=>{
    var params=req.body;
    console.log(params)
    var sql=`update user_login_info set name='${params.name}',
    sex='${params.sex}',birthday='${params.birthday}',phone=${params.phone} where userInfoId=${params.userInfoId};`;

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
   
});

//删除一条用户记录
router.post('/deleteUserInfo',(req,res)=>{
    var params=req.body;
    console.log(params)
    var sql=`DELETE FROM user_login_info WHERE userInfoId=${params.userInfoId};`;
    var sql2=`ALTER TABLE user_login_info AUTO_INCREMENT=1;`
    conn.query(sql,function(error,result){
        if(error){
            console.log(error);
            jsonWrite(res, error);
        }
        if(result){
            //返回结果
            jsonWrite(res, result);
            console.log(result,"addad")
            console.log("删除成功")
        }
    })
    conn.query(sql2)
});


//添加一条注册用户信息记录
router.post('/addUserInfo',(req,res)=>{
    var params=req.body;
    console.log(params)
    var sql=`insert into user_login_info(name,sex,birthday,phone) value('${params.name}','${params.sex}','${params.birthday}','${params.phone}');`;

    conn.query(sql,function(error,result){
        if(error){
            console.log(error);
            jsonWrite(res, error);
        }
        if(result){
            //返回结果
            jsonWrite(res, result);
            console.log(result)
            console.log("删除成功")
        }
    })
   
});

//通过一条用户预约记录
router.post('/pastUserSubmit',(req,res)=>{
    var params=req.body;
    console.log(params)
    var sql=`update user_submit set status='通过' where id=${params.id};
    update user_notice set content='预约成功！' where userSubmitId=${params.id}`

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
   
});

//拒绝通过一条用户预约记录
router.post('/noPastUserSubmit',(req,res)=>{
    var params=req.body;
    console.log(params)
    var sql=`update user_submit set status='不通过' where id=${params.id};
    update user_notice set content='${params.content}' where userSubmitId=${params.id}`

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
   
});

//删除一条用户预约记录
router.post('/deleteUserSubmit',(req,res)=>{
    var params=req.body;
    console.log(params)
    var sql=`delete from  user_submit where id=${params.id}`
    var sql2=`ALTER TABLE user_submit AUTO_INCREMENT=1;`
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
   conn.query(sql2)
});

//修改当前管理员信息
router.post('/updateAdministratorInfo',(req,res)=>{
    var params=req.body;
    //console.log(params)
    var sql=`update logininfo  set nickname='${params.nickname}',age=${params.age},sex='${params.sex}',
    birthday='${params.birthday}',avatarBase='${params.avatarBase}' where manageId=${params.manageId};`
   
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
   
});

//普通用户注册
router.post('/userRegister',(req,res)=>{
    var params=req.body;
    var sql=`insert into user_login values('${params.username}','${params.password}',null);
    insert into user_login_info values(null,'${params.name}',null,'${params.sex}','${params.birthday}',${params.phone})`;
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
});


module.exports = router;