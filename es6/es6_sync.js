// async function name([param[, param[, ... param]]]) { statements }
// name: 函数名称。
// param: 要传递给函数的参数的名称。
// statements: 函数体语句。
async function helloAsync(){
    return "helloAsync";
  }
  
console.log(helloAsync())  // Promise {<resolved>: "helloAsync"}
// console.log(typeof(helloAsync()))
// async 函数返回一个 Promise 对象，可以使用 then 方法添加回调函数。
helloAsync().then(v=>{
   console.log(v);         // helloAsync
})
