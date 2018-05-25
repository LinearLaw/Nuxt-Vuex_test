# vuex_test
    vuex的测试demo
# 安装
    npm install
## 全局安装webpack
    npm i -g webpack
## 全局安装webpack-dev-server
    npm i -g webpack-dev-server
# 开启服务
    webpack-dev-server
    默认地址为localhost:8080
# Main plugin
    vue@^2.3.2
    vuex@2.3.1
    vue-router@2.5.3

    主要用于测试vuex。
    vuex有四大部分，state，mutations，actions，getters。

    数据流
        同步下：state ——> view(html) ——> (event触发)commit ——> mutations 
                                                            ——> state

        异步下：state ——> view(html) ——> (event触发)dispatch ——> actions 
                                    ——> commit ——> mutations ——> state


