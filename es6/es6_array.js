//数组创建【将元素创建为数组】
console.log(Array.of(1,2,3,4,5,6))
// 不同类型
console.log(Array.of(1,true,'3',4))
//将类数组对象或可迭代对象转换为数组
console.log(Array.from([1, 2]));
//可对数组中的每一个元素进行处理
console.log(Array.from([1, 2, 3], (n) => n * 2));

let map = {
    do: function(n) {
        return n * 2;
    }
}
let arrayLike = [1, 2, 3];
console.log(Array.from(arrayLike, function (n){
    return this.do(n);
}, map)); 
let arr = Array.from({
    0: '1',
    1: '2',
    2: 3,
    length: 3
  });
  console.log(arr); // ['1', '2', 3]
   
  // 没有 length 属性,则返回空数组
  let array = Array.from({
    0: '1',
    1: '2',
    2: 3,
  });
  console.log(array); // []
