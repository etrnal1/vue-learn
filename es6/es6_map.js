//Map 对象保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。#
var myMap = new Map()
console.log(myMap)
var keyString = "a string"

myMap.set(keyString,'我是键')
console.log(myMap.get(keyString))
//key是对象


//key 是函数
var myMap  = new Map()
var keyFunc =function(){
    console.log('我是函数')
}
myMap.set(keyFunc,'和的关键字')
console.log(myMap.get(keyFunc))
//key 是nan

for( key of myMap){
    console.log(key)
}
for( var value of myMap.values()){
    console.log('map的值是:',value)
}

// map 与array 转换
var kvArray = [['k1','k2']]


var myMap = new Map(kvArray)

//将map 对象转换为数组

var outArray = Array.from(myMap)

console.log("对象转换的数组为: ",outArray)

// map 的克隆

var myMap1 = new Map([["key1", "value1"], ["key2", "value2"]]);
var myMap2 = new Map(myMap1);
 
//console.log(original === clone); 

//map的合并

var first = new Map([[1, 'one'], [2, 'two'], [3, 'three'],]);
var second = new Map([[1, 'uno'], [2, 'dos']])
var merged = new Map([...first, ...second]);

console.log('合并后的数据',merged);

