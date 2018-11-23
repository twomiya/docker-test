
## docker下创建umi

* 先创建文件
    * mkdir 文件名
    * pwd 查看文件目录
* 把该文件放在docker下
    * `docker run -it --rm -v /Users/thrive/Desktop/demo/demo001:/app node:8-alpine sh`
    * `cd app`
* 在app下创建Umi
    * 先设置yarn的淘宝镜像源
    * `yarn config get registry`
    * `yarn config set registry https://registry.npm.taobao.org`
    * `exit` 退出
* 在文件目录下添加docker配置文件（`docker-compose.yml`和`Dockerfile`）
*  运行docker
    * `docker-compose run app yarn install`
    * `docker-compose up -d`
    * `docker-compose down`