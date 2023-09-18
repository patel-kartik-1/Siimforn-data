// // console.log("dd");

// // // if()

// let  x= new Promise( function(m,v) { 
//   const url ="ttps://skit.fontawesome.com/af6e700de7.js";
//   sc=document.createElement('script');
//   s=document.createElement('div');
//   sc.setAttribute('src',url);
//   document.body.append(sc);
//   // document.body.append(url);
//   console.log("dd");
//   m(true);
//   v("Error")


//         // m('5');
   

// });


// x.then(
// function(value){console.log(value);}
// );
// // console.log( x);


// // let myPromise = new Promise(function(myResolve, myReject) {
// //     let x = 1;
  
// //   // The producing code (this may take some time)
  
// //     // if (x == 0) {
// //     //   myResolve("OK");
// //     // } else {
// //     //   myReject("Error");
// //     // }
// //   });
  
// //   myPromise.then(
// //     function(value) {console.log(value);},
// //     function(error) {console.log(error);}
// //   );

// console.log(n);
function a(){
  var n='na';
  function b(){
    console.log("hb");
    console.log(n);
  }
  return b;
  n="aa"
}

let c=a();
c();