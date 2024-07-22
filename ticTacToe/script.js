let player = "P1";
let play = false;
var resultInput,startButton,gameStatus,P1,P2;
// var anshul = document.getElementById('result-input');
function collection(){
    resultInput = document.getElementById('result-input');
    startButton = document.getElementById('start-button');
    gameStatus = document.getElementById('game-status');
    P1 = document.getElementById('P1');
    P2 = document.getElementById('P2');
}

function start(){
    if(startButton.value == "START"){
        startButton.value = "End";
        resultInput.value = "game started";
        gameStatus.value = "game :- ON";
        if(player == "P1"){
            P2.style.border = 'none';
            P1.style.border = '5px double white';
        }
        else{
            P1.style.border = 'none';
            P2.style.border = '5px double white';
        }
        play = true
    }
    else{
        startButton.value = "START";
        gameStatus.value = "game :- OFF";

        play = false;
    }
}

function mark(box){
    if(box.innerHTML != "X" && box.innerHTML != "O" && play==true){
        if(player=="P1"){
            box.style.color='rgba(33, 123, 249,1)';
            box.innerHTML="X";
            resultInput.value = "player 2 turn";
            win();
            P2.style.border = '5px double white';
            P1.style.border = 'none';
            return player="P2";
        }
        else if(player == "P2"){
            box.style.color='rgba(192, 119, 255, 0.466)'
            box.innerHTML="O";
            resultInput.value = "player 1 turn";
            win();
            P1.style.border = '5px double white';
            P2.style.border = 'none';
            return player="P1";
        }
        else{
            alert("something wrong has happend please refresh the page")
        }
    }
    else{
        if(play==false){
            resultInput.value = "game is OFF turn it on bro"
        }
        else{
            alert("this box is already occupied try again")
        }
    }
}

// code for creating array by taking values of td
function listing(){
    let mylist = [];
    for (let i=1 ; i < 10 ; i++){
        mylist.push(document.getElementById("check"+i).innerHTML);
    }
    return mylist;
}

//code for checking if any combinatin matching or not
function win(){
    let currentGame = listing();
    let checkWin = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    let checkdraw = 0;
    for (let i = 0 ; i<8 ;i++){
        winningPoint = checkWin[i]
        let winningPointtwo = checkWin[i]
        //checking if the player winning or not 
        if(currentGame[winningPoint[0]] === "X" && currentGame[winningPoint[1]] === "X" && currentGame[winningPoint[2]] === "X" ){
            resultInput.value = "Player 1 won";
            resultInput.style.background = "red";
            document.getElementById('score-P1').value = (parseInt(document.getElementById('score-P1').value) + 1 ); 
            play = false;
            for(var j=0;j<3;j++){
                document.getElementById("check"+(winningPointtwo[j]+1)).style.background="red";
            }
        }
        else if(currentGame[winningPoint[0]] === "O" && currentGame[winningPoint[1]] === "O" && currentGame[winningPoint[2]] === "O" ){
            resultInput.value = "Player 2 won";
            resultInput.style.background = "red";
            play = false;
            for(var j=0;j<3;j++){
                document.getElementById("check"+(winningPointtwo[j]+1)).style.background="red";
            }
        }
    }
}

function restart(){
    for(let i=1 ; i<10 ; i++){
        document.getElementById('check'+i).innerHTML = '&nbsp;'
        document.getElementById('check'+i).style.background = 'transparent'
        resultInput.style.background = "transparent";
        play = true;
    }
}