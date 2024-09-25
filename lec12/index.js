// let arr=[12,3,34,5,6,7,87,899]

// let sum= arr.reduce((a,b,c,r)=>{
//     return a+b
// })
// console.log(sum);


let arr=[11,44,34,7,9,13,4,5,11]

  let d=  arr.filter((a)=>{
    return a>2
             
         
   })

 let newA=   d.filter((k)=>{
     return  k%2==1

   })

    let sum= newA.reduce((sum,b)=>{
    return   sum+b
   })

   console.log(sum,"ee");
   


// console.log(a,"anything");


// let arr=[
//     {
//         id:1,
//         name: "hello"
//     },
//     {
//         id:2,
//         name: "heyy"
//     },
// ]
// arr.map((a)=>{
// console.log(a.id);
// })


