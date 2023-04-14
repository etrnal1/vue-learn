let string = "apple,banana,orange"
console.log('包含 :',string.includes("banana"))

console.log('开始以 :',string.startsWith("apple"));    // true
console.log('结束以 :',string.endsWith("apple"));      // false
string.startsWith("banana",6)
let moban_string =  `hello
world
你好
世界`
console.log(moban_string)
let info =`my Name is ${string}`
console.log('字符串中插入变量',info)

function f(){
    return '我是函数'
}

let string2=`${f()}`
console.log(string2)
