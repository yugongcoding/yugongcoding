---
title: python_advanced
date: 2023-11-17 21:57:25
permalink: /pages/d4198e/
categories:
  - computer
  - coding
  - python
  - design_mode
tags:
  - null
author:
  name: YuGong
  link: https://github.com/yugongcoding
---
# python装饰器

装饰器(Decorator)是Python的一个重要部分，python中的装饰器可以扩展其它函数的功能，提高代码的复用能力，有助于让我们的代码更简短，也更Pythonic（即更加符合python简单、友好等特性）。本文从初学者的角度出发，一步步带领大家了解装饰器的功能以及其高级用法。

## 面向对象

在python中，一切皆对象，当我们创建一个函数，我们可以给函数传参，比如传一个数字、列表、字符串等等，如：

```python
def func(a: str, b: str) -> str:
    return a + b
```

这里的参数a、b都是对象，可以作为函数的参数传递，那么可以想到的是参数也可以是一个函数，因为我们提到过，在python中一切皆对象，如下示例，我们把函数welcome当作参数，传递给函数hello，执行结果如下：

```python
def hello(func):
    print('hello')
    func()


def welcome():
    print('welcome')


if __name__ == '__main__':
    hello(welcome)

#outputs：
#hello
#welcome
```

可以看到，函数hello扩展了welcome函数的功能，这里装饰器的作用就凸显出来了，在不改变原有函数的情况下，扩展了原有函数的功能，装饰器实际上是一个可调用对象，以上示例的函数hello就可以当作装饰器使用，但是以上写法不够优雅，我们可以写成以下形式：

```python
def hello(func):
    def wrap():
        print('hello')
        func()
    return wrap


@hello
def welcome():
    print('welcome')


if __name__ == '__main__':
    welcome()


#outputs：
#hello
#welcome

```

以上写法使用@符号+函数名的方式，即@hello对函数welcome进行装饰，这种写法也叫做装饰器，扩展了welcome的功能，使得我们同样调用welcome函数，但是它的功能却得到了扩展，以上执行了welcome()等价于hello(welcome)()。

以上写法有点问题

## 函数作为装饰器

```python


```

## 类作为装饰器

```python



```
