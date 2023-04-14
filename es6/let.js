// var t= {
//     let a=0
//     a 
// }
// let 与var 的区别
let t= 123
console.log(t)
{
    let a=0;
    var b =1;
}
// console.log('局部变了',a)
console.log('全局有效',b)
// let 只能声明一次，第二次声明会边错
// let a=2
// let a=3 (会报错)

var c= 2

var c=3 
//代码块  先声明在使用,否则会报错
{
//正常代码
 let a =1
 console.log(a)

 // 会报错代码


 }
 //const 声明常量

const ds= 1
console.log('我是常量 ',ds)

for(let i=0;i<10;i++){
    console.log("打印循环计数",i)
}