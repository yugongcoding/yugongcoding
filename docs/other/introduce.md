---
title: 快速了解
date: 2023-11-18 11:41:08
permalink: /pages/7c62eb/
categories:
  - other
tags:
  -
author:
  name: YuGong
  link: https://github.com/yugongcoding
---
## 知其然

学习一个知识，首先我们要知道这个东西是什么，怎么去做，能实现什么，相较于编程语言来说，就是首先我们跟着教程去学习每一个知识点的用法，知道这个函数或者表达式能实现什么，也即首先对知识点需要做一个了解。

举个例子来说，如下是一个Python的闭包，python的闭包指的是，在一个函数内定义了一个函数，而内层函数引用了外层函数的变量，如下warpper函数属于内层函数，其引用了cost函数的局部变量func,这里func也是一个函数或者说是可调用对象。

```python
import time
def cost(func):
    def warpper():
        t1 = time.time()
        res = func()
        t2 = time.time()
        print(func.__name__ + "用时：" +  str(t2-t1))
        return res
    return warpper
```

## 知其所以然

当我们对一个知识点非常熟悉的时候，应该主动思考它为什么这么做，学会追踪溯源，了解其背后的原理，而不单单只是会用。

如上，我们知道了什么是闭包，那应该思考，为什么python里面要有闭包，它用在哪里，什么时候会用到它。

往下看，比如现在我定义了这样一个函数：

```python
def add():
    for i in range(10000):
        print(i)
```

现在假如我想知道这个函数运行完所消耗的时间，那我可以修改一下这个函数，可以这样写

```python
import time
def add():
    start_time = time.time()
    for i in rang(10000):
        print(i)
    end_time = time.time()
    print("总用时：" + str(end_time - start_time))
```

这样写，当然能实现，但是我们更改了这个函数，如果我还要在函数运行前打印一行日志，是不是又变成这样

```python
import time
from loguru import logger  # loguru这个包只支持python3的版本
def add():
    logger.info("函数开始运行")
    start_time = time.time()
    for i in range(10000):
        print(i)
    end_time = time.time()
    logger.info("函数结束运行")
    print("总用时：" + str(end_time - start_time))
```

可以看出来，每增加一个功能，就要修改一次函数，函数变得越来越臃肿且修改方式不优雅，并且如果其它函数也要统计运行时间，又要修改其它函数代码，那有没有简洁且高效又优雅的写法呢，当然有，那就是闭包，python中把闭包当作装饰器来使用，扩展了函数的功能，且做到了代码复用的效果，如下：

```python
import time
def cost(func):
    def warpper():
        t1 = time.time()
        res = func()
        t2 = time.time()
        print(func.__name__ + "用时：" +  str(t2-t1))
        return res
    return warpper

@cost
def add():
    for i in range(10000):
        print(i)
add()

```

如上，cost函数是我们一开始介绍的闭包，在其前面添加@符号以后，用来装饰add函数，当调用add函数的时候，便实现了统计add函数耗时的问题，将@cost这个装饰器用到其它任何函数上都可以统计其耗时时间，是不是很优雅简洁，并且做到了代码复用，除此之外，我们还可以为一个函数添加多个装饰器，实现更多的函数功能，至于装饰器的逻辑以及深入教学，请移步我们的python高级特性教学，此处不再做过多的延申。

## 知其所以必然

有了知其然，知其所以然以后，当我们写代码的时候，或者写配置文件，运维部署等工作时，基于我们之前的知识沉淀，操作起来自然会游刃有余，甚至不用做调试我们就知道结果会是什么,比如上面我们已经清楚知道了闭包和装饰器的作用，以及为什么要这么做，那当我们遇到同样的问题，就知道如何去做，脑海中已经知道了这样做的结果是什么，当看框架代码的时候，也能大概知道它想做什么，比如说flask框架的路由设置，如

```python
from flask import Flask

app = Flask(__name__)


@app.route('/hello')
def hello():
    return "hello world"


if __name__ == '__main__':
    app.run()
```

那这里的@app.run其实就是一个装饰器，它可以装饰在任何函数上，我们只需要写函数，@app.run装饰器会包装我们的函数，比如添加响应头，设置http状态码等，最终将返回值返回给客户端，而这一切都不需要我们自己实现，所以装饰器的好处非常明显，能够替我们节省很多重复的操作，真正做到了代码复用，开发者只需关注数据模型层的实现即可。

## 最后

希望大家学习的时候带着问题去学，而不是盲目的为了学习而学习，那么祝大家学习愉快！
