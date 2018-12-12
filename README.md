# vue-demo

> A Vue.js project

## Build Setup

``` bash
#设置淘宝镜像
npm install -g cnpm --registry=https://registry.npm.taobao.org
#安装vuecli
cnpm i -g vue-cli
#
cnpm i -g vue-init

#安装webpack
cnpm i -g webpack

#安装Webpackcli
cnpm i -g webpack-cli

#初始化webpack模板的vue脚手架工程
#不要选择自动执行npm install 避免网络原因，无法成功完成操作
#不要选择Eslintjs 代码严格校验，缩进多了都会导致编译不通过
vue init webpack [pgoject name]

#通过cnpm 安装依赖
cnpm install

#运行Web服务 
npm start

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
