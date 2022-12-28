'use strict';

let secret_number = Math.ceil(Math.random()*20)
console.log(secret_number)
// operate DOM to change HTML elements.
document.querySelector('.check').addEventListener('click', function(){
   const guess_number =  Number(document.querySelector('.guess').value)
//    console.log(guess_number)
//    console.log(secret_number)
//    console.log(typeof(guess_number))
   let score = Number(document.querySelector('.score').textContent)
   let high_score = Number(document.querySelector('.highscore').textContent)
   if(score > 0){
   if (!guess_number){
    document.querySelector('.message').textContent = 'No numbers!'
   }else if (guess_number > secret_number){
    if (score == 1){
        score--
        document.querySelector('.score').textContent = score.toString()
        document.querySelector('.message').textContent = 'Game Over!'
    }else{
    document.querySelector('.message').textContent = 'Too high!'
    score--
    document.querySelector('.score').textContent = score.toString()
}
   }else if (guess_number < secret_number){
    if (score == 1){
        score--
        document.querySelector('.score').textContent = score.toString()
        document.querySelector('.message').textContent = 'Game Over!'
    }else{
    document.querySelector('.message').textContent = 'Too low!'
    score--
    document.querySelector('.score').textContent = score.toString()
}
   }else{
    document.querySelector('.message').textContent = 'Correct Answer!'
    document.querySelector('.number').textContent = guess_number.toString()
    document.querySelector('body').style.backgroundColor = '#01fb00'
    document.querySelector('.number').style.width = '20rem'
    if (score > high_score){
        high_score = score
        document.querySelector('.highscore').textContent = high_score.toString()
    }
   }
}
})

document.querySelector('.again').addEventListener('click', function(){
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = null
    document.querySelector('.score').textContent = '20'
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
    secret_number = Math.ceil(Math.random()*20)
    console.log('new game secret number:'+secret_number)
})