# 安装 labelme

## 1. 安装python3.8.20

```bash
conda create -n py38 python=3.8.20
conda activate py38
```

## ​2. 安装 labelme 的依赖库
labelme 依赖 PyQt5 和 pillow，建议先安装这些库以避免版本冲突：

```bash
conda install -c conda-forge pyqt=5.15.9 pillow=10.3.0
```
（选择 conda-forge 源更稳定）

## 3. 安装 labelme

```bash
pip install labelme==5.4.1  # 2024年最新稳定版
```

## 4. 验证安装

```bash
labelme --version  # 应输出版本号，如 5.4.1
labelme  # 启动图形界面
```

​如果安装缓慢或失败：

- 更换国内 PyPI 镜像源：

```bash
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
# 或者
pip install labelme -i https://pypi.tuna.tsinghua.edu.cn/simple
```



