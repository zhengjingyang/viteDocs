# Conda安装使用 （以 Windows 为例）​

## ​1. 下载安装包
Miniconda（轻量版推荐）​：
Miniconda 官网 下载 Python 3.x 的 Windows 64-bit 安装包。地址：https://www.anaconda.com/docs/getting-started/anaconda/install#windows-installation
（若用于机器学习，可选完整版 Anaconda）
```bash
curl https://repo.anaconda.com/archive/Anaconda3-2024.10-1-Windows-x86_64.exe --output .\Downloads\Anaconda3-2024.10-1-Windows-x86_64.exe
```

## 2. 安装步骤
运行安装程序，点击 Next。

选择安装路径（建议纯英文路径，如 C:\Miniconda3）。

​关键选项：

✅ ​Install for: Just Me

✅ ​Add Anaconda to my PATH environment variable → ​取消勾选​（避免与其他 Python 冲突）

✅ ​Register Anaconda3 as my default Python 3.x → ​勾选

完成安装后，打开 ​开始菜单 → Anaconda Prompt 使用 Conda。

## 3. 验证安装

```bash
# 打开 Anaconda Prompt 输入以下命令
conda --version
# 输出示例：conda 24.1.2
```


## ​4. Conda 基本使用

| 功能 | 命令 |
| --- | --- |
| 创建环境 | conda create -n myenv python=3.9 |
| 激活环境 | conda activate myenv |
| 退出环境 | conda deactivate |
| 安装包 | conda install numpy |
| 列出所有环境 | conda env list |
| 删除环境 | conda env remove -n myenv |

## 5. 多版本 Python 管理
通过环境隔离：无需卸载旧版 Python，用 Conda 创建独立环境即可
```bash
# 创建 Python 3.8 环境
conda create -n py38 python=3.8
conda activate py38

# 创建 Python 3.11 环境
conda create -n py311 python=3.11
conda activate py311
```
## 6. 注意事项

1. 路径冲突：若安装时误勾选 Add to PATH，可能导致系统优先使用 Conda 的 Python。
   
   解决方法：编辑环境变量，将原有 Python 路径调整到 Conda 之前。

2. 完全卸载 Conda：
   - 卸载程序 → 删除安装目录（如 C:\Miniconda3）
   - 删除用户目录下的 .conda 和 .condarc 文件。


