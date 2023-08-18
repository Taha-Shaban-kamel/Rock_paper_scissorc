let score= JSON.parse(localStorage.getItem('score')) || {
  wins:0,
  losses:0,
  ties:0
  } ;
    updateScore();
  function pickComputerMove(){
    const rendomNumber=Math.random();
    let computerMove='';
    if(rendomNumber>=0 && rendomNumber< 1/3){
      computerMove='rock';
    }else if(rendomNumber>=1/3 && rendomNumber<2/3){
      computerMove='paper';
    }else if(rendomNumber >=2/3 && rendomNumber<1){
      computerMove='scissors';
    }
    return computerMove;
  }

  function playGame(playerMove){
    let computerMove = pickComputerMove();
    let result ='';

  if(playerMove=='scissors'){
    if(computerMove === 'rock'){
      result='You lose.'
    }else if(computerMove==='paper'){
      result ='You win.';
    }else if(computerMove === 'scissors'){
      result ='Tie.';
    }

  }else if(playerMove==='rock'){
        if(computerMove === 'rock'){
      result='Tie.'
      }else if(computerMove==='paper'){
        result='You lose.';
      }else if(computerMove === 'scissors'){
        result ='You win.';
      }
       
  }else if(playerMove==='paper'){
      if(computerMove === 'rock'){
        result='You win.'
      }else if(computerMove==='paper'){
        result='Tie.';
      }else if(computerMove === 'scissors'){
        result ='You lose.';
      }
    }
    if(result==='You win.')
    {
      score.wins+=1;
    }else if(result === 'You lose.')
    {
      score.losses+=1;
    }else if(result==='Tie.'){
      score.ties+=1;
    }
    localStorage.setItem('score',JSON.stringify(score));
    updateScore();
    // alert(`You picked ${playerMove} computer picked ${computerMove} . ${result}`);
    const resul=document.querySelector('.js-moves').innerHTML=`You
  <img src="img/${playerMove}-emoji.png"alt="" class="move-icon">
  <img src="img/${computerMove}-emoji.png" alt="" class="move-icon">
  Computer`;
    const move =document.querySelector('.js-result').innerHTML=result;
    
  }
  function updateScore(){
    document.querySelector('.js-score')
    .innerHTML=`Wins ${score.wins} , Losses ${score.losses} ,Ties ${score.ties}`;
  }
  
