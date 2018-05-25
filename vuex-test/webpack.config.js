const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

var obj ={
    /**
     * @desc 指定需要处理的js入口文件，为main.js
     */
    entry:{
        app:"./src/main.js"
    },
    /**
     * @desc 指定压缩后的文件的保存路径以及保存的js文件名
     */
    output:{
        path:path.join(__dirname,"./dist"),
        filename:"bundle.js"
    },
    /**
     * @desc module指定处理工具，对不同后缀的文件进行处理
     */
    module:{
        loaders:[
            /**
             * @desc js文件，用babel-loader进行处理
             */ 
            {
                test:/\.js$/,
                loader:"babel-loader",
                exclude:/node_modules/
            },
            /**
             * @desc vue文件，用vue-loader进行处理
             */
            {
                test:/\.vue$/,
                loader:"vue-loader"
            },
            /**
             * @desc css文件，用style-loader和css-loader进行处理
             */
            {
                test:/\.css$/,
                loader:"style-loader!css-loader"
            },
            /**
             * @desc less文件，用vue-style-loader、style-loader、css-loader、less-loader
             */
            {
                test:/\.less$/,
                loader:"vue-style-loader!style-loader!css-loader!less-loader"
            },
        ]
    },
    /**
     * @desc 使用插件，将需要插入script的html文件加入
     */
    plugins:[
        new htmlWebpackPlugin({
            template:"./src/index.html"
        })
    ]
}
module.exports = obj;