'use strict'
//function for generating random enemy weapon
function randomEnemyWeaponGenerator() {
    var enemyWeaponArray = ['rock', 'paper', 'scissors'];
    var randomEnemyWeapon = enemyWeaponArray[Math.floor(Math.random() * 3)];
    return randomEnemyWeapon;    
};
// "turning ON" enemy weapon image
function turnOnEnemyWeaponImg(enemyChoise) {
    if (enemyChoise === 'rock') {
        document.getElementById('enemy_rock').src='./img/enemy_rock_on.png';
    }
    else if (enemyChoise === 'paper') {
        document.getElementById('enemy_paper').src='./img/enemy_paper_on.png';
    }
    else if (enemyChoise === 'scissors') {
        document.getElementById('enemy_scissors').src='./img/enemy_scissors_on.png';
    }
};
// "turning OFF" enemy weapon image
function turnOffEnemyWeaponImg(enemyChoise) {    
        document.getElementById('enemy_rock').src='./img/enemy_rock_off.png';   
        document.getElementById('enemy_paper').src='./img/enemy_paper_off.png';    
        document.getElementById('enemy_scissors').src='./img/enemy_scissors_off.png';
        document.getElementById('who_wins_img').src="./img/fight.jpg"
        document.getElementById('player_score_box').style.backgroundColor="firebrick";
        document.getElementById('enemy_score_box').style.backgroundColor="royalblue";
        document.getElementById('draw_score_box').style.backgroundColor="grey";
};
//  automatic choice for player rock ON
function randomPlayerRockOn() {
    document.getElementById('player_rock').style.borderStyle="groove";
    document.getElementById('player_rock').style.borderColor="green";
    document.getElementById('player_rock').style.borderWidth="8px";
    document.getElementById('player_rock').style.width="164px";
    document.getElementById('player_rock').style.height="164px";
};
//  automatic choice for player paper ON
function randomPlayerPaperOn() {
    document.getElementById('player_paper').style.borderStyle="groove";
    document.getElementById('player_paper').style.borderColor="green";
    document.getElementById('player_paper').style.borderWidth="8px";
    document.getElementById('player_paper').style.width="164px";
    document.getElementById('player_paper').style.height="164px";
};
//  automatic choice for player scissors ON
function randomPlayerScissorsOn() {
    document.getElementById('player_scissors').style.borderStyle="groove";
    document.getElementById('player_scissors').style.borderColor="green";
    document.getElementById('player_scissors').style.borderWidth="8px";
    document.getElementById('player_scissors').style.width="164px";
    document.getElementById('player_scissors').style.height="164px";
};
//  automatic choice for player rock,paper,scissors" OFF
function uncheckPlayerWeapon() {
    document.getElementById('player_rock').style.borderStyle="none";
    document.getElementById('player_rock').style.borderColor="none";
    document.getElementById('player_rock').style.borderWidth="none";
    document.getElementById('player_rock').style.width="180px";
    document.getElementById('player_rock').style.height="180px";

    document.getElementById('player_paper').style.borderStyle="none";
    document.getElementById('player_paper').style.borderColor="none";
    document.getElementById('player_paper').style.borderWidth="none";
    document.getElementById('player_paper').style.width="180px";
    document.getElementById('player_paper').style.height="180px";

    document.getElementById('player_scissors').style.borderStyle="none";
    document.getElementById('player_scissors').style.borderColor="none";
    document.getElementById('player_scissors').style.borderWidth="none";
    document.getElementById('player_scissors').style.width="180px";
    document.getElementById('player_scissors').style.height="180px";
};
// array for choosing weapon for player
var luckyArray = [randomPlayerRockOn, randomPlayerPaperOn, randomPlayerScissorsOn,
                randomPlayerRockOn, randomPlayerPaperOn, randomPlayerScissorsOn,
                randomPlayerRockOn, randomPlayerPaperOn, randomPlayerScissorsOn,
                randomPlayerRockOn, randomPlayerPaperOn, randomPlayerScissorsOn, 
                randomPlayerRockOn, randomPlayerPaperOn, randomPlayerScissorsOn,
                randomPlayerRockOn, randomPlayerPaperOn, randomPlayerScissorsOn,
                randomPlayerRockOn, randomPlayerPaperOn, randomPlayerScissorsOn,
                randomPlayerRockOn, randomPlayerPaperOn, randomPlayerScissorsOn,
                ];
// 'clicking' a weapon instead of player
function randomPlayerRock() {
    playerWeaponFromClick('rock');
    setTimeout(uncheckPlayerWeapon, 1150);
}
function randomPlayerPaper() {
    playerWeaponFromClick('paper');
    setTimeout(uncheckPlayerWeapon, 1200);
}
function randomPlayerScissors() {
    playerWeaponFromClick('scissors');
    setTimeout(uncheckPlayerWeapon, 1250);
}
// choosing weapon instead of the player, from array, with random number 9,10,11
function chooseWeaponInsteadOfPlayer(array) {
    var randomPlayerWeapon = (9 + (Math.floor(Math.random() * 3)))
    var arrayFunction;
    var uncheckTimer = 300;
    var checkTimer = 0;
    for (var i = 0; i <= randomPlayerWeapon; i++) {        
        arrayFunction = array[i];  
        if (i < randomPlayerWeapon) {               
            setTimeout(arrayFunction, checkTimer);
            setTimeout(uncheckPlayerWeapon, uncheckTimer);
            checkTimer += 300;
            uncheckTimer += 300;            
        }
        else if (i === randomPlayerWeapon) {
            setTimeout(arrayFunction, checkTimer);
            checkTimer += 300;
            if (i === 9) {
                setTimeout(randomPlayerRock, 3300);                
            }
            else if (i === 10) {
                setTimeout(randomPlayerPaper, 3600);
            }
            else if (i === 11) {
                setTimeout(randomPlayerScissors, 3900);
            }
        }
    }
};
var randomPlayerWeapon = (9 + (Math.floor(Math.random() * 3))) 
// on click button "Choose for me"
function clickChooseInsteadOfPlayer() {
    chooseWeaponInsteadOfPlayer(luckyArray);
};
//function for comparing player and enemy weapon and returning who won
function rockPaperscissors(playerWeapon, enemyWeapon) {
    var weaponScore;    
    if (playerWeapon === enemyWeapon) {
        return weaponScore = 'draw';
    }
    else if (playerWeapon === 'rock') {
        if (enemyWeapon === 'paper') {
            return weaponScore = 'enemyWin';
        }
        else {
            return weaponScore = 'playerWin';
        }
    }
    else if (playerWeapon === 'paper') {
        if (enemyWeapon === 'scissors') {
            return weaponScore = 'enemyWin';
        }
        else {
            return weaponScore = 'playerWin';
        }
    }
    else if (playerWeapon === 'scissors') {
        if (enemyWeapon === 'rock') {
            return weaponScore = 'enemyWin'
        }
        else {
            return weaponScore = 'playerWin'
        }
    }
};
// game choosing from radio button
function typeOfGame () {     
    if (document.getElementById('of1').checked) {
        return 1;
    }
    else if (document.getElementById('of3').checked) {
        return 3;
    }
    else if (document.getElementById('of5').checked) {
        return 5;
    }
    else if (document.getElementById('of7').checked) {
        return 7;
    }
    else if (document.getElementById('of9').checked) {
        return 9;
    }
    else if (document.getElementById('of10').checked) {
        return 10;
    }
};
// displaying final image, who won the game
function finalScoreImage (pScore, eScore) {
    if (pScore === eScore) {
        document.getElementById('who_wins_img').src="./img/nobody_won.png"
    }
    else if (pScore > eScore) {
        document.getElementById('who_wins_img').src="./img/player_won.png"
    }
    else if (pScore < eScore) {
        document.getElementById('who_wins_img').src="./img/player_lost.png"
    }
    }
// score variables
var playerScore = 0;
var enemyScore = 0;
var drawScore = 0;
var sumOfScores = 0;
// MAIN FUNCTION on click - players choise
function playerWeaponFromClick (weaponClick) {    
    if (sumOfScores < typeOfGame()) {
        var chossenEnemyWeapon = randomEnemyWeaponGenerator();
        turnOnEnemyWeaponImg(chossenEnemyWeapon);
        var score = rockPaperscissors(weaponClick, chossenEnemyWeapon);
        if (score === 'playerWin') {
            document.getElementById('who_wins_img').src="./img/you_win.jpg";
            document.getElementById('player_score_box').style.backgroundColor="red"       
            playerScore++;
            sumOfScores++;
            document.getElementById('playerScore').value = playerScore;
        }
        else if (score === 'enemyWin') {
            document.getElementById('who_wins_img').src="./img/you_lose.jpg"
            document.getElementById('enemy_score_box').style.backgroundColor="red";
            enemyScore++;
            sumOfScores++;
            document.getElementById('enemyScore').value = enemyScore;
        }
        else if (score === 'draw') {
            document.getElementById('who_wins_img').src="./img/draw.png"
            document.getElementById('draw_score_box').style.backgroundColor="red";
            drawScore++;
            sumOfScores++;
            document.getElementById('drawScore').value = drawScore;
        }
        setTimeout(turnOffEnemyWeaponImg, 1200);
    }
    else if (sumOfScores = typeOfGame()) {
        setTimeout(finalScoreImage(playerScore,enemyScore), 1000);
    }
};
// on click button for reseting scores for new game
function reset() {
    playerScore = 0;
    enemyScore = 0;
    drawScore = 0;
    sumOfScores = 0;
    document.getElementById("playerScore").value = "";
    document.getElementById("enemyScore").value = "";
    document.getElementById("drawScore").value = "";
    document.getElementById('who_wins_img').src="./img/fight.jpg"
};


