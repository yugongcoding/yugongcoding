---
title: nginx_basic
date: 2023-11-17 21:57:25
permalink: /pages/6d3b1e/
categories:
  - operation
  - nginx
tags:
  - null
author:
  name: YuGong
  link: https://github.com/yugongcoding
---
# Nginx基础

## nginx加密证书配置

```shell
server {
        listen 443 default_server ssl http2;
        #listen 443 ssl default_server;
        server_name _;
        ssl_certificate "/etc/pki/nginx/server.crt";
        ssl_certificate_key "/etc/pki/nginx/private/server.key";
        ssl_session_cache shared:SSL:1m;
        ssl_session_timeout  10m;
        ssl_ciphers HIGH:!aNULL:!MD5;
        ssl_prefer_server_ciphers on;
        return 403;
    }
```

## nginx生成本地临时证书

```shell
cd /etc/pki/
mkdir nginx
cd nginx/
mkdir private
openssl genrsa -des3 -out server.key 2048
mv server.key private/
cd private/
openssl rsa -in server.key -out server.key
cd ../
openssl req -new -key ./private/server.key -out server.csr
openssl req -new -x509 -key ./private/server.key -out ca.crt -days 3650
openssl x509 -req -days 3650 -in server.csr -CA ca.crt -CAkey ./private/server.key -CAcreateserial -out server.crt
```
