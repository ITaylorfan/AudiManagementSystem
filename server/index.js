// node 后端服务器
//这是express服务器入口文件
const userApi = require('./api/userApi');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
 
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));

//设置上传文件限制
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
 
// 后端api路由
app.use('/api/user', userApi);
 
// 监听端口
app.listen(3000);



console.log('success listen at port:3000......');