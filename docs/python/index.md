# Python

## Python安装教程 参考
[Python安装教程](https://blog.csdn.net/qq_53280175/article/details/121107748)

## pip 使用国内镜像源
默认情况下 pip 使用的是国外的镜像，在下载的时候速度非常慢，本文我们介绍使用国内清华大学的源，地址为：

```bash
https://pypi.tuna.tsinghua.edu.cn/simple
```
我们可以直接在 pip 命令中使用 `-i` 参数来指定镜像地址，例如：

```bash
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple 包名
```

### 设为默认
升级 pip 到最新的版本后进行配置：

```bash
python -m pip install --upgrade pip
pip config set global.index-url https://mirrors.tuna.tsinghua.edu.cn/pypi/web/simple
```


### 其他国内镜像源
- 清华大学TUNA镜像源： https://pypi.tuna.tsinghua.edu.cn/simple
- 阿里云镜像源： http://mirrors.aliyun.com/pypi/simple/
- 中国科学技术大学镜像源： https://mirrors.ustc.edu.cn/pypi/simple/
- 华为云镜像源： https://repo.huaweicloud.com/repository/pypi/simple/
- 腾讯云镜像源：https://mirrors.cloud.tencent.com/pypi/simple/







