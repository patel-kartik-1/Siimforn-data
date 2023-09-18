// function a(b,callback){
//     let script=document.createElement("script");
//     script.src=b;
//     script.onload=function(){
//         console.log('load');
//         callback(b);
//     }
//     script.onerror=function(){
        
//         callback(c);
//         console.log('Error');
//     }
//     document.body.append(script);
// }

// function b(a){
//     console.log("call b");
// }
// function d(a){
//     console.log("call b");
// }
// function c(a){
//     console.log("call c");
// }

let p= new Promise((resolve,reject)=>{
    console.log("left");
    setTimeout(()=>{
        
        console.log("inside");
        reject(new Error("vfhvf"));
    },1000);
})

p.then((valoe)=>{
  console.log(p);
    console.log("done");
},(error)=>{
    console.log(error);

})