function getApiData() {
    // Promise异步编程的一种解决方案
    // 第一个参数是 Promise 执行成功时的回调，第二个参数是 Promise 执行失败时的回调
    return new Promise((resolve, reject) => {
        // 模拟延迟(获取服务的数据) 
       setTimeout(() => {
            // 执行成功
            resolve({name: 'kandy', age: 99})
        }, 3000)
    })
}

let user = {}

async function getUser() {
    // 执行 
   await getApiData().then(res => {
        user = res
    })
    // await后的该代码块在此会阻塞,直到 getApiData 执行后 then 完成工作后才能继续往下执行    
    console.log('获取数据完成: ', user)
}

getUser()  // 异步执行的方法
console.log('开始获取数据:')  // 此处无阻塞(同步代码)