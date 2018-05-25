# Nuxt 

    nuxt是针对vue的node服务器渲染（SSR）框架。

##  Nuxt项目初始化

    nuxt-test使用了nuxt官方提供的start-template进行搭建项目

    首先，全局安装vue-cli
        npm i vue-cli -g

    接着，下载nuxt-template项目目录模板
        vue init nuxt-community/starter-template my-project  
        tips:my-project是自定义的项目目录

    进入这个自定义目录
        cd my-project

    安装依赖
        npm i 

##  Nuxt项目运行
    
    开发环境
        npm run dev

    编译
        npm run build

    生产环境部署
        npm start

##  Nuxt中Router的变更

    可以说，前端渲染单页面组件，
    移植到后端，体现在其路由方式的变化，即router-link有所变化。

    项目目录
        pages/
        --| users/
        -----| one.vue
        -----| _id.vue
        -----| index.vue
        --| users.vue
    
    对应的router配置如下

        router: {
            routes: [
                {
                    path: '/users',
                    component: 'pages/users.vue',
                    children: [
                        {
                            path: '',
                            component: 'pages/users/index.vue',
                            name: 'users'
                        },
                        {
                            path: ':id',
                            component: 'pages/users/_id.vue',
                            name: 'users-id'
                        },
                        {
                            path: 'one',
                            component: 'pages/users/one.vue',
                            name: 'users-one'
                        }
                    ]
                }
            ]
        }

    Tips：需要注意的是，目录名和文件名，
        单词间尽量不试用"-"和"_"进行连接，在识别name时容易出错。
        router不需要特别配置，只需要设置好文件目录即可。

    Tips：以往router-view的地方，用<nuxt-child/>进行代替；
        router-link的渲染不受影响，只是router的name不再是自定义的了。

    Tips：当需要动态路由时，其参数名表现在文件名中。
        例如需要的路由路径为：/path/:id
        则文件路径设置为：/path/_id.vue

#   Vuex test

    用于测试vuex

## 安装依赖

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

