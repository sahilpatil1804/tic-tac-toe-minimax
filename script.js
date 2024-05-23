let music = new Audio("assets/music.mp3")
let turn = new Audio("assets/ting.mp3")
let gameover = new Audio("assets/gameover.mp3")
let player = 'X'
const changePlayer = () =>{
    return player === 'X' ? 'O' : 'X'
}
let boxes = document.getElementsByClassName('boxes')
let info = document.getElementById('information')
const checkWin = () =>{
    if(boxes[0].innerText === boxes[1].innerText && boxes[1].innerText === boxes[2].innerText && boxes[0].innerText !== ''){
        info.innerText = boxes[0].innerText + " Won!"
        return 1
    }
    if(boxes[3].innerText === boxes[4].innerText && boxes[4].innerText === boxes[5].innerText && boxes[3].innerText !== ''){
        info.innerText = boxes[3].innerText + " Won!"
        return 1
    }  
    if(boxes[6].innerText === boxes[7].innerText && boxes[7].innerText === boxes[8].innerText && boxes[6].innerText !== ''){
        info.innerText = boxes[6].innerText + " Won!"
        return 1
    }
    if(boxes[0].innerText === boxes[3].innerText && boxes[3].innerText === boxes[6].innerText && boxes[0].innerText !== ''){
        info.innerText = boxes[0].innerText + " Won!"
        return 1
    } 
    if(boxes[1].innerText === boxes[4].innerText && boxes[4].innerText === boxes[7].innerText && boxes[1].innerText !== ''){
        info.innerText = boxes[1].innerText + " Won!"
        return 1
    }
    if(boxes[2].innerText === boxes[5].innerText && boxes[5].innerText === boxes[8].innerText && boxes[2].innerText !== ''){
        info.innerText = boxes[2].innerText + " Won!"
        return 1
    }
    if(boxes[0].innerText === boxes[4].innerText && boxes[4].innerText === boxes[8].innerText && boxes[0].innerText !== ''){
        info.innerText = boxes[0].innerText + " Won!"
        return 1
    } 
    if(boxes[2].innerText === boxes[4].innerText && boxes[4].innerText === boxes[6].innerText && boxes[2].innerText !== ''){
        info.innerText = boxes[2].innerText + " Won!"
        return 1
    }
    let draw = true
    for(let i=0; i<=8; i++){
        if(boxes[i].innerText === ''){
            draw = false
        }
    }
    if(draw){
        return -1
    }
    else{
        return 0;
    }  
}
document.getElementsByClassName('button-89')[0].addEventListener('click', ()=>{ location.reload()})
let gameEnded = false
Array.from(boxes).forEach(ele =>{
    ele.addEventListener('click', ()=>{
        if(!gameEnded && ele.innerText === ''){
            ele.innerText = player;
            player = changePlayer()
            turn.currentTime = 0.25
            turn.play()
            info.innerText = "Turn for "+player+" "
            let v = checkWin()
            if(v){
                document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width = "100px"
                gameEnded =true
            }
            if(v === -1){
                info.innerText = "Tie!"
            }
        }
    })
})