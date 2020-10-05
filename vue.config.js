module.exports={
    //配置环境变量 可以在dist打开index.html静态文件
    publicPath:process.env.NODE_ENV ==="production" ? "./":"/",

    configureWebpack:{
        performance:{
            maxAssetSize:30000000
        }
    }
    
}