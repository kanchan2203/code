// let h2= document.querySelector('h2')
// for(let i of h2){
//     i.style.color='red'
// h2.style.color='red'
// console.log(h2);

// let h2= document.querySelector('h2')
// h2.innertext='hello'
// console.log(h2.innertext);


// let div= document.querySelector('div')

// let h2=  document.createElement('h2')

// h2.innertext='hello'

// div.appendChild(h2)
// console.log(div,"kuchh bhi...");/

// let a= document.querySelector('a')
// console.log( a.getAttribute('href'));
// a.setAttribute('href','http://flipkart.com')

// const arr = [
//     'https://thumbs.dreamstime.com/b/lonely-railway-station-unsplash-generative-ai-289040966.jpg',
//     'https://images.unsplash.com/photo-1483985988355-763728e1935b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D',
//     'https://plus.unsplash.com/premium_photo-1676389758809-98d4fc39e744?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzaGlvbiUyMHZpZGVvfGVufDB8fDB8fHww',
//      'https://plus.unsplash.com/premium_photo-1681494700976-861938fe0513?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3RyZWV0JTIwZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D',
//     ]

//     const imageEl = document.querySelector('img');

//     let num = 0;

//     setInterval(function ( ){
//         imageEl.setAttribute('src', arr[num]);
//         num = (num + 1) % arr.length;

//     }, 2000);


// function fun1(){
//     console.log('hdgsdfgh');
// }

let btn= document.querySelector('button')

//  btn.onclick=function(){
//     console.log('hello');
//  }

btn.addEventListener('click',function(){
    console.log('hello');
})