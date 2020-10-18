//caching the dom
let userScore = 0
let computerScore = 0
let userScore_span = document.getElementById('user-score')
let computerScore_span = document.getElementById('computer-score')
const scoreBoard_div = document.querySelector('.score-board')
const result_p = document.querySelector('.result > p')
const rock_div = document.getElementById('r')
const paper_div = document.getElementById('p')
const scissors_div = document.getElementById('s')


const getCompChoice =()=>{
  const choices = ['r', 'p', 's']
  return choices[Math.floor(Math.random() * 3)]
}

const convert = (letter) =>{
  return letter === 'p' ? 'Paper' :
  letter === 'r' ? 'Rock' :
  'Scissors'
}

const win = (userChoice, compChoice)=>{
  let userChoice_div = document.getElementById(userChoice)
  userScore++
  userScore_span.innerHTML = userScore
  computerScore_span.innerHTML = computerScore
  result_p.innerHTML = `${convert(userChoice)} beats ${convert(compChoice)}. You win!`
  userChoice_div.classList.add('green-glow')
  setTimeout(()=>userChoice_div.classList.remove('green-glow'), 500)
} 
const lose = (userChoice, compChoice) =>{
  let userChoice_div = document.getElementById(userChoice)
  computerScore++
  computerScore_span.innerHTML = computerScore
  userScore_span.innerHtml = userScore
  result_p.innerHTML = `${convert(compChoice)} beats ${convert(userChoice)}. You lose.`
  userChoice_div.classList.add('red-glow')
  setTimeout(()=>userChoice_div.classList.remove('red-glow'), 500)

} 

const draw = (userChoice, compChoice) =>{
  let userChoice_div = document.getElementById(userChoice)
  result_p.innerHTML = `${convert(compChoice)} equals ${convert(userChoice)}. It's a Tie!`
  userChoice_div.classList.add('gray-glow')
  setTimeout(()=>userChoice_div.classList.remove('gray-glow'), 500)
}

const game = (userChoice) => {
  const computerChoice = getCompChoice()
  switch(userChoice + computerChoice){
    case 'rs':
    case 'pr':
    case 'sp':
      win(userChoice, computerChoice)
      break;
    case 'rp':
    case 'ps':
    case 'sr':
      lose(userChoice, computerChoice)
      break;
    case 'rr':
    case 'pp':
    case 'ss':
      draw(userChoice, computerChoice)
      break;
  }
}

const main = () => {
rock_div.addEventListener('click', ()=>game('r'))

paper_div.addEventListener('click', ()=>game('p'))

scissors_div.addEventListener('click', ()=>game('s'))
}

main()