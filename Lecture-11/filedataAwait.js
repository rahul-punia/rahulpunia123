function getData(num) {
    return new Promise(function(resolve,reject){
        setTimeout(function() {
          resolve(num);
          }, 1000);
    })
  }
  let x;
  let y;
  async function helper(){
    const num1=await getData(10);
    x = 1 + num1;
    console.log(x);
    const num2=await getData(30);
    y = 1 + num2;
       console.log(y);
    const num3=await getData(x + y);
    console.log(num3);             
}
helper();

//   var x;
//   function getX(num1) {
//     x = 1 + num1;
//     console.log(x);
//     getData(30, getY);
//   }
//   function getY(num2) {
//     var y = 1 + num2;
//     console.log(y);
//     getData(x + y, getXY);
//   }
//   function getXY(num3) {
//     console.log(num3);
//   }


//   const promise=getData(10)
//                        .then(function(num1){
//                         x = 1 + num1;
//                         console.log(x);
//                         return getData(30);
//                        })
//                        .then(function(num2){
//                          y = 1 + num2;
//                         console.log(y);
//                        return getData(x + y);
//                     }).then(function(num3){
//                         console.log(num3);
//                     });
  
