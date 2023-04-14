let target ={
    name:'tom',
    age:24
}
//Proxy 与 Reflect 是 ES6 为了操作对象引入的 API 。
// Proxy 可以对目标对象的读取、函数调用等操作进行拦截，然后进行操作处理。它不直接操作对象，而是像代理模式，通过对象的代理对象进行操作，在进行这些操作时，可以添加一些需要的额外操作。
// Reflect 可以用于获取目标对象的行为，它与 Object 类似，但是更易读，为操作对象提供了一种更优雅的方式。它的方法与 Proxy 是对应的

let handler ={
    get :function(target,key){
        console.log('getting '+key);
        return target[key]; // 不是target.key
    },
    set :function(target,key,value){
        console.log('setting '+key);
        target[key] = value;        
    }
}

let proxy = new Proxy(target,handler);
console.log('我是代理的名字',proxy.name)
handler.get 
proxy.age = 25
console.log('我是代理的年龄',proxy.age)