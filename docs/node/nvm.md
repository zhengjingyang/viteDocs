# NNM

### 切换镜像源
在nvm安装路径下 找到setting.txt文件

```bash
nvm npm_mirror https://npmmirror.com/mirrors/npm/

nvm node_mirror https://npmmirror.com/mirrors/node/
```



### 查看可在线安装的NodeJS版本

```bash
nvm list available
```



### 安装指定版本的 Node.js。

```bash
nvm install <version>
```



### 切换到指定版本的 Node.js。

```bash
nvm use <version>
```



### 列出已安装的所有 Node.js 版本。

```bash
nvm ls 
# 或 
nvm list
```



### 显示当前正在使用的 Node.js 版本。

```bash
nvm current
```



### 为指定的版本创建别名。

```bash
nvm alias <name> <version>
```



### 删除指定版本的别名。

```bash
nvm unalias <name>
```



### 卸载指定的 Node.js 版本。

```bash
nvm uninstall <version>
```



### 重新安装指定版本的 Node.js，并将全局包重新安装到新版本中。

```bash
nvm reinstall-packages <version>
```



### 在指定版本的 Node.js 环境下执行特定命令。

```bash
nvm exec <version> <command>
```



### 显示 NVM 的版本信息。

```bash
nvm --version
```

