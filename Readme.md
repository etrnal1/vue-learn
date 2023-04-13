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



### 绑定样式

V-bind:style     【绑定样式styleObj	】

```html
 <div id="app" v-bind:style="styleObj">
        {{message}}
    </div>
```

vue.js      [增加对象]

```js
<script>
new Vue({
el:'#app',
data:{
 message:'hello vue',
 styleObj:{
    color: 'red',
    fontSize: '34px',
 }

 },
methods :{
test:function(){
return 'hello'
}
}
})
</script>
```

### v-if

`v-if` 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回 truthy 值的时候被渲染。

```
<h1 v-if="awesome">Vue is awesome!</h1>
```





### [用 `key` 管理可复用的元素](chrome-extension://nlankbinblmooenojofcplbmnndhmilj/popup.html#用-key-管理可复用的元素)

Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。这么做除了使 Vue 变得非常快之外，还有其它一些好处。例如，如果你允许用户在不同的登录方式之间切换：



### v-for 

我们可以用 `v-for` 指令基于一个数组来渲染一个列表。`v-for` 指令需要使用 `item in items` 形式的特殊语法，其中 `items` 是源数据数组，而 `item` 则是被迭代的数组元素的**别名**。



你也可以用 `v-for` 来遍历一个对象的 property。



### [变更方法](chrome-extension://nlankbinblmooenojofcplbmnndhmilj/popup.html#变更方法)

Vue 将被侦听的数组的变更方法进行了包裹，所以它们也将会触发视图更新。这些被包裹过的方法包括：

- `push()`
- `pop()`
- `shift()`
- `unshift()`
- `splice()`
- `sort()`
- `reverse()`

你可以打开控制台，然后对前面例子的 `items` 数组尝试调用变更方法。比如 `example1.items.push({ message: 'Baz' })`。



### [替换数组](chrome-extension://nlankbinblmooenojofcplbmnndhmilj/popup.html#替换数组)

变更方法，顾名思义，会变更调用了这些方法的原始数组。相比之下，也有非变更方法，例如 `filter()`、`concat()` 和 `slice()`。它们不会变更原始数组，而**总是返回一个新数组**。当使用非变更方法时，可以用新数组替换旧数组：

```
example1.items = example1.items.filter(function (item) {
  return item.message.match(/Foo/)
})
```

你可能认为这将导致 Vue 丢弃现有 DOM 并重新渲染整个列表。幸运的是，事实并非如此。Vue 为了使得 DOM 元素得到最大范围的重用而实现了一些智能的启发式方法，所以用一个含有相同元素的数组去替换原来的数组是非常高效的操作。

### 点击事件

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>点击事件绑定查看event</title>
    <script src="vue.js"></script>
</head>
<body>
        <div id="app" >
            <button @click="double">点击测试</button>
             </div>
</body>
<script>
    new Vue({
    el:'#app',
    data:{
     message:'hello vue'
     },
    methods :{
    test:function(){
    return 'hello'
    },
    double:function(event){
        alert('你点击了我一下') 
        alert(event)
        alert(event.target.tagName)

    }
    }
    })
</script>
</html>
```



在事件处理程序中调用 `event.preventDefault()` 或 `event.stopPropagation()` 是非常常见的需求。尽管我们可以在方法中轻松实现这点，但更好的方式是：方法只有纯粹的数据逻辑，而不是去处理 DOM 事件细节。

为了解决这个问题，Vue.js 为 `v-on` 提供了**事件修饰符**。之前提过，修饰符是由点开头的指令后缀来表示的。

- `.stop`
- `.prevent`
- `.capture`
- `.self`
- `.once`
- `.passive`

```html
<!-- 阻止单击事件继续传播 -->
<a v-on:click.stop="doThis"></a>

<!-- 提交事件不再重载页面 -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- 修饰符可以串联 -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- 只有修饰符 -->
<form v-on:submit.prevent></form>

<!-- 添加事件监听器时使用事件捕获模式 -->
<!-- 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 -->
<div v-on:click.capture="doThis">...</div>

<!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
<!-- 即事件不是从内部元素触发的 -->
<div v-on:click.self="doThat">...</div>
```

使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，用 `v-on:click.prevent.self` 会阻止**所有的点击**，而 `v-on:click.self.prevent` 只会阻止对元素自身的点击。

###   按键修饰符

