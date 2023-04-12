# vue.js
v- 前缀作为一种视觉提示，用来识别模板中 Vue 特定的 attribute。当你在使用 Vue.js 为现有标签添加动态行为 (dynamic behavior) 时，v- 前缀很有帮助，然而，对于一些频繁用到的指令来说，就会感到使用繁琐。同时，在构建由 Vue 管理所有模板的单页面应用程序 (SPA - single page application) 时，v- 前缀也变得没那么重要了。因此，Vue 为 v-bind 和 v-on 这两个最常用的指令，提供了特定简写：

## v-bind [绑定元素属性 href]

```js
<!-- 完整语法 -->
<a v-bind:href="url">...</a>

<!-- 缩写 -->
<a :href="url">...</a>

<!-- 动态参数的缩写 (2.6.0+) -->
<a :[key]="url"> ... </a>
```



## V-on [绑定元素事件]

```js
<!-- 完整语法 -->
<a v-on:click="doSomething">...</a>

<!-- 缩写 -->
<a @click="doSomething">...</a>

<!-- 动态参数的缩写 (2.6.0+) -->
<a @[event]="doSomething"> ... </a>
```





## 模版的表达式要简洁

### 声明式逻辑

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>v-bind 练习  </title>
    <script src="vue.js"></script>
</head>
<body>
    <div id="app">
        <input type="text" name="" id="" v-model="message" placeholder="input 输入框熟悉的绑定使用"><br>

        插值表达式的使用: {{message }} <br>
        <a :href="url">bind 属性的运用 :href [绑定标签的属性]</a><br>
       
        {{url}} [插值表达式的使用]
    </div>
  
</body>
<script>
    new Vue({
    el:'#app',
    data:{
     message:'hello vue',
     url:'http://www.baidu.com'
     },
    methods :{
    test:function(){
    return 'hello'
    }
    }
    })
</script>
</html>
```



#### 计算属性

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>v-bind 练习  </title>
    <script src="vue.js"></script>
</head>
<body>
    <div id="app">
      

        显示变量的反转字符串: {{ message.split('').reverse().join('') }} <br>
       
       
     
    </div>
  
</body>
<script>
    new Vue({
    el:'#app',
    data:{
     message:'hello vue',
     url:'http://www.baidu.com'
     },
    methods :{
    test:function(){
    return 'hello'
    }
    }
    })
</script>
</html>

```

#### 基础例子 【无需在模版进行修改，在vue里面的computed完成】

*对于任何复杂的逻辑都需要使用computed完成 *

​    只在相关响应式依赖发生改变时它们才会重新求值。这就意味着只要 `message` 还没有发生改变，多次访问 `reversedMessage` 计算属性会立即返回之前的计算结果，而不必再次执行函数



需要遍历一个巨大的数组并做大量的计算。然后我们可能有其他的计算属性依赖于 **A**。如果没有缓存，我们将不可避免的多次执行 **A** 的 getter！如果你不希望有缓存，请用方法来替代。

#### 侦听属性 

Vue 提供了一种更通用的方式来观察和响应 Vue 实例上的数据变动：**侦听属性**。当你有一些数据需要随着其它数据变动而变动时，你很容易滥用 `watch`

