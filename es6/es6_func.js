function fn(name,age=17){
    console.log(name+","+age)
}
fn("amy")


console.log("箭头函数")
// 参数 =>函数体

var f = v=>v

var f = function(a){
    return  a; 
}

console.log("箭头函数",f(1));
// 当箭头函数没有参数或者有多个参数，要用 () 括起来。
var f= (a,b)=>a+b

console.log(f(6,2))
//箭头函数有多行语句,用{}包裹起来,  
var fs=(a,b)=>{
    let result =a+b;
    return result
}
console.log(fs(10,12))
//当箭头函数要返回对象的时候,为了区别代码块，要用()将对象包裹起来
var f =(id,name)=>({id:id,name:name})
console.log(f('name','etrnal'))
// 箭头函数体中的 this 对象，是定义函数时的对象，而不是使用函数时的对象。

function fn(){
    setTimeout(()=>{
      // 定义时，this 绑定的是 fn 中的 this 对象
      console.log(this.a);
    },0)
  }
  var a = 20;
  // fn 的 this 对象为 {a: 18}
  fn.call({a: 18});  // 18