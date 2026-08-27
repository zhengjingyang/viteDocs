---
title: ossutil
order: 1
---
## 删除文件

### 预览要删除的文件

```bash
ossutil.exe rm oss://dji-buck/wayline/ -r --min-age 7d --exclude "guideflight*/**" --exclude "waylinefile/**" --exclude "geo*/**"  --exclude "cheng*/**" --dry-run
```

### 删除

```bash
ossutil.exe rm oss://dji-buck/wayline/ -r --min-age 7d --exclude "guideflight*/**" --exclude "waylinefile/**" --exclude "geo*/**"  --exclude "cheng*/**"
```



## 下载文件

### 目录文件下载
```bash
ossutil.exe cp -r oss://dji-buck/wayline/6432fb89-90bd-4ff7-8529-ffba12a457cb/  C:\OSS\6432fb89-90bd-4ff7-8529-ffba12a457cb/
```

### 下载单个文件

```bash
ossutil.exe cp -r oss://dji-buck/wayline/5b332287-9b39-4074-99ee-bcaaac63f432.tar  C:\OSS\wayline\5b332287-9b39-4074-99ee-bcaaac63f432.tar
```

