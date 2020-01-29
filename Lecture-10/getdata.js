//Que Give the output of following code ??
function getData(num) {
    return new Promise(function(resolve,reject){
        setTimeout(function() {
          resolve(num);
          }, 1000);
    })
  }
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

  let x;
  let y;
  const promise=getData(10)
                       .then(function(num1){
                        x = 1 + num1;
                        console.log(x);
                        return getData(30);
                       })
                       .then(function(num2){
                         y = 1 + num2;
                        console.log(y);
                       return getData(x + y);
                    }).then(function(num3){
                        console.log(num3);
                    });
  



//   function getData(num, cb) {
//         setTimeout(function() {
//             cb(num);
//           }, 1000);
//   }
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
//     console.log(answer);
//   }
//   getData(10, getX);
  