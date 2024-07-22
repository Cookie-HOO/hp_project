# 胡沛的工作空间项目

## GUI的技术选型
该项目有一些数值模拟，但更重要的是前端交互，采用Tauri框架，后端Rust，前端React组合
- 整体框架：[Tauri](https://tauri.studio/)
- 后端：[Rust](https://www.rust-lang.org/)
- 前端：[React](https://reactjs.org/)
- 组件库：[ant-design](https://ant.design/index-cn)
- 图形库：[recharts](http://recharts.org/)

## 项目结构
data/
public/         静态资源文件
src/            前端代码
    assets/         会被打包工具处理的静态资源，所以放到src下
src-tauri/      后端代码

## 开发调试
### 1. 创建项目
~~~shell
pnpm create tauri-app  # 根据引导创建项目
pnpm install  # 安装依赖
~~~

### 2. 调试项目
~~~shell
pnpm tauri dev
~~~

### 3. 打包项目
~~~shell
pnpm tauri build
~~~

## 其他
~~~shell
# 换源
npm config set registry https://registry.npm.taobao.org/
npm config set registry https://registry.npmjs.org/
# cnpmjs镜像源：https://registry.cnpmjs.org/
# npmMirror镜像源：https://skimdb.npmjs.com/registry
# Yarn镜像源：https://registry.yarnpkg.com/
~~~

## 路径问题
### 前端路径
1. import中的路径
~~~js
import { DatePicker } from 'antd';  // 直接是名字，说明是安装的包
import Graph from "./Graph.tsx";    // 相对路径（自己写的文件，比较常用的方式）
import Graph from "@/Graph.tsx"     // 绝对路径，从src开始
~~~

2. 资源路径
~~~js
// public/下的资源，直接使用（因为public下的资源会直接放到打包的内容的根目录下，所以可以直接使用）
<img src="/vite.svg" className="logo vite" alt="Vite logo" />

// src/assets/下的资源，需要import（这部分内容会被打包工具进行压缩处理，所以只能用代码的方式import）
import reactLogo from "./assets/react.svg";
<img src={reactLogo} className="logo react" alt="React logo" />
~~~

3. 路径别名
> @就是一种路径别名，一般是指src，即 import "@/xx/xx" 从src开始找
- 需要在tsconfig.json中配置，此文件可以使得vs code等编辑器解析对应的别名
~~~json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
~~~

- vite.config.js中配置（vite可以去tsconfig.json找配置，所以可以只配tsconfig.json）
~~~js
export default {
  resolve: {
    alias: {
      '@': '/src'
    }
  }
}
~~~
4. logo路径
> src-tauri/icons 下，在 src-tauri/tauri.conf.json中配置
目前只有icon.ico 和 icon.png被替换，需要找到更小尺寸的icon
> [下载链接][https://icons8.com/icons/set/cat]