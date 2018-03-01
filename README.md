# docker-koa2-demo
docker-koa2-demo

### 项目使用
- 安装 `docker`  
  从官网下载后安装，对于 `windows`，如果安装不成功可以尝试 `DockerToolBox`，具体内容请自行 `Google` 或百度
- 下载/拷贝项目  
  `git clone git@github.com:leopen-hu/docker-koa2-demo.git`
- 构建镜像  
  - 启动 `docker` 控制台
  - 进入项目根目录，运行构建命令 `docker build -t your-app-name .` （第一次构建会先下载基础镜像，可能会消耗一点时间。当出现 `successfully built fgt56t4545(imageID)` 时表明构建成功，可以通过 `docker images` 命令查看）
- 启动容器  
  - 第一次启动（会生成一个新容器）：`docker run -d -p 8877:8877 fgt56t4545(imageID)`
  - 后续启动（启动已经生成的容器）:
    - 查看运行中的容器：`docker ps`
    - 查看所有容器：`docker ps -a`
    - 启动已经存在的容器：`docker start sdf56456(containerId)`
- 访问应用  
  通过浏览器打开 `http://127.0.0.1:8877` 即可
- 停止容器  
  `docker stop sdf56456(containerId)`

### `Dockerfile` 解释
```
# 基础镜像，应用就是在这个镜像的基础上去构建的
FROM node:9.6.1-alpine
# 为镜像添加元数据，这里添加了版本号
LABEL version="0.1.0"

# RUN 执行其后的命令，创建一个文件夹用来存放 app 文件
RUN mkdir -p /home/nodeApp
# 指定工作目录
WORKDIR /home/nodeApp
# 拷贝文件到 nodeApp 文件目录
COPY . /home/nodeApp
# 执行 npm install，安装 app 依赖包
RUN npm install
# 暴露端口8877，这个端口正是app启动时占用的端口
EXPOSE 8877
# 默认命令，启动容器时自动运行 npm start 命令
CMD [ "npm", "start" ]
```