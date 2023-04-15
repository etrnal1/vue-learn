function testAwait(){
    console.log("testAwait");
 }
 async function helloAsync(){
    await testAwait();
    console.log("helloAsync");
 }
 helloAsync();

 async function a(){  
    console.log("1")  
     console.log("2")
  }
  a()
  console.log("3")