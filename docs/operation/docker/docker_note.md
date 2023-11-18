---
title: docker_note
date: 2023-11-17 21:57:25
permalink: /pages/d4269e/
categories:
  - operation
  - docker
tags:
  - null
author:
  name: YuGong
  link: https://github.com/yugongcoding
---
# Docker基础

## 拉取镜像

```shell
docker pull redis:latest
docker pull mysql:8.0.19
```

## 创建Mysql容器

```shell
# 基于拉取的镜像创建容器并且设置登录mysql的密码为yourpasswd
docker run -itd --name mysql-test -p 3306:3306 -e MYSQL_ROOT_PASSWORD='yourpasswd' mysql:8.0.19
```

## 创建Redis容器

```shell
# 基于拉取的镜像创建容器并且设置登录redis的密码为yourpasswd
docker run -itd --name myredis -p 6379:6379 redis:latest --requirepass "yourpasswd"
```

Mysql以及Redis容器创建成功如下图：
