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



### 计算属性

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

*对于任何复杂的逻辑*



