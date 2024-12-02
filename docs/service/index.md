## 基础配置

### 修改服务器时间

CST 中央时区

```bash
timedatectl set-timezone Asia/Shanghai
```



### 修改容器时间

CST 中央时区

```bash
# step1. 进入容器中 创建文件夹
# 注意：只有运行时候 docker run -dit 的容器才可以进入容器的shell操作
docker exec -it test /bin/bash
 
mkdir -p /usr/share/zoneinfo/Asia
 
# step2. 宿主机中拷贝时区文件到容器中
docker cp /etc/localtime 容器ID:/etc/localtime
docker cp /usr/share/zoneinfo/Asia/Shanghai test:/usr/share/zoneinfo/Asia/Shanghai
 
# step3. 再次进入容器 执行软链接创建
docker exec -it test /bin/bash
ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
```

