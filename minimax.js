let dp = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
function winner(arr){
    let win = null
    let isTie = true
    dp.forEach(ele =>{
        if(arr[ele[0]] === arr[ele[1]] && arr[ele[1]] === arr[ele[2]] && arr[ele[0]] !== ''){
            if(arr[ele[0]] === 'X') win = 1
            else win = -1
        }
        if(arr[ele[0]] === '' || arr[ele[1]] === '' || arr[ele[2]] === ''){
            isTie = false
        }
    })
    if(isTie && win === null) win = 0
    return win
}
function minimax(arr, depth, isMax){
    let res = winner(arr)
    if(res !== null){
        return res
    }
    if(isMax){
        let bestScore = -Infinity
        for(let i=0; i<9; i++){
            if(arr[i] === ''){
                arr[i] = 'X'
                bestScore = Math.max(bestScore, minimax(arr, depth+1, false))
                arr[i] = ''
            }
        }
        return bestScore
    }else{
        let bestScore = Infinity
        for(let i=0; i<9; i++){
            if(arr[i] === ''){
                arr[i] = 'O'
                bestScore = Math.min(bestScore, minimax(arr, depth+1, true))
                arr[i] = ''
            }
        }
        return bestScore
    }
}
document.getElementById('hint').addEventListener('click', () =>{
    let arr = Array.from(document.getElementsByClassName('boxes')).map(ele => ele.innerText)
    let curplayer = document.getElementById('information').textContent.split(' ')[2]
    let move = 0
    if(curplayer == 'X'){
        let best = -Infinity
        for(let i=0; i<9; i++){
            if(arr[i] === ''){
                arr[i] = curplayer
                let score = minimax(arr, 0, false)
                arr[i] = ''
                if(score>best){
                    best = score
                    move = i
                }
            }
        }
    }else{
        let best = Infinity
        for(let i=0; i<9; i++){
            if(arr[i] === ''){
                arr[i] = curplayer
                let score = minimax(arr, 0, true)
                arr[i] = ''
                if(score < best){
                    best = score
                    move = i
                }
            }
        }
    }
    console.log("the move: "+ move)
    window.alert("Best move for "+ curplayer+ " is: " + move)
})