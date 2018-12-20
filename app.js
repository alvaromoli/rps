const   userScore = 0,
        computerScore = 0,
        userScore_span = document.getElementById("user-score"),
        computerScore_span = document.getElementById("computer-score"),
        scoreBoard_div = document.querySelector(".score-board"),
        result_div = document.querySelector(".result"),
        r_div = document.getElementById("r"),
        p_div = document.getElementById("p"),
        s_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function game(userChoice){
    const computerChoice = getComputerChoice();
}


function main(){
    r_div.addEventListener('click', function(){
    
    });
    
    p_div.addEventListener('click', function(){
       
    });
    
    s_div.addEventListener('click', function(){
       
    });
}


