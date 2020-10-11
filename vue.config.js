module.exports={
    //配置环境变量 可以在dist打开index.html静态文件
    publicPath:process.env.NODE_ENV ==="production" ? "./":"/",

    configureWebpack:{
        performance:{
            maxAssetSize:30000000
        }
    },

      //node服务器配置 设置代理 
     devServer:{
            proxy:{
                '/api': {
                    target: `http://127.0.0.1:3000/api/`,
                    changeOrigin: true,
                    pathRewrite: {
                        '^/api': ''
                    }
                }
            },
            // headers: {
            //     'Access-Control-Allow-Origin': '*',
            // } 
    },
    
}