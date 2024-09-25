let canvas= document.querySelector('canvas')
let pen= canvas.getContext('2d')
 pen.fillStyle='red'
let cell = 50
let snakeC=[[0,0]]
let direction ='right'
setInterval(() => {
    draw()
    update()


},200);
// pen.fillRect(0,0,50,50)

document.addEventListener('keydown',(e)=>{
    if(e.key==='ArrowLeft'){
        direction='left'
    }
    else if(e.key==='ArrowDown'){
        direction='Down'
    }
    else if(e.key==='Arrowup'){
        direction='up'
    }
    else{
        direction='right'
    }
})

function draw(){
    pen.clearRect(0,0,1200,600)
    for(let i of snakeC){
        // pen.fillStyle='red'
        pen.fillRect(i[0],i[1],cell,cell)
    }

}
function update(){
    let headX= snakeC[snakeC.length-1][0]
    let headY= snakeC[snakeC.length-1][1]
    // let newX= headX+cell
    // let newY= headY
let newX
let newY

if(direction==='up'){
    newX=headX
    newY=headY-cell
}
else  if(direction==='Down'){
    newX=headX
    newY=headY+cell
}
else if(direction==='left'){
    newX=headX-cell
    newY=headY
}
else{
    newX=headX+cell
    newY=headY
}

    

    snakeC.push([newX,newY])
    snakeC.shift()
}
