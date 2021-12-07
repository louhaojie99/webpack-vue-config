## WebPack自定义构建Vue项目从0到1





#### 初始化依赖包管理器

- ```bash
  npm init -y
  ```

- | 依赖名称                                   | 依赖介绍                      |
  | ------------------------------------------ | ----------------------------- |
  | npm install webpack webpack-cli --save-dev | 安装webpack脚手架             |
  | npm install webpack-dev-server --save-dev  | webpack开发服务器, 热更新配置 |

- 创建项目目录

  ```
  public 
  	index.html   // 模板文件
  src
  	api
  	assets
  	components
  	utils
  	views
  	main.js		 // 入口文件
  ```

- 配置package.json文件

  ```
  "dev":  "webpack serve"    // webpack热更新
  "build": "webpack"         // webpack构建打包
  
  "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "dev":  "webpack serve"
      "build": "webpack"
  },
  ```

#### 常用的plugin

| 依赖名称                                                     | 依赖介绍                                 |
| ------------------------------------------------------------ | ---------------------------------------- |
| npm install html-webpack-plugin --save-dev                   | 自动生成html文件                         |
| npm install --save-dev clean-webpack-plugin                  | 每次打包构清楚dist目录, 保证打包代码最新 |
| npm install --save-dev @babel/preset-env babel-loader core-js | 构建项目，兼容低版本浏览器               |
| npm install --save-dev postcss-loader postcss-preset-env     | 样式兼容低版本浏览器                     |
| npm install --save-dev less less-loader css-loader style-loader | 配置less                                 |
| npm install vue-loader vue-template-compiler --save-dev      | 处理 .vue 文件                           |
| yarn add vue --save                                          | 安装vue项目主依赖                        |





// 升级依赖 npm install -D babel-loader @babel/core @babel/preset-env webpack