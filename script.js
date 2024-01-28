const dice1 = "https://i.pinimg.com/originals/f4/50/21/f450216324990b23295ee972465f1cfc.png";
const dice2 = "https://www.clipartbest.com/cliparts/Kij/pa5/Kijpa5xXT.png";
const dice3 = "https://clipground.com/images/3-dice-clipart-1.png";
const dice4 = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Dice-4-b.svg/1024px-Dice-4-b.svg.png";
const dice5 = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Dice-5-b.svg/1024px-Dice-5-b.svg.png";
const dice6 = "https://www.tynker.com/projects/images/5a6397185ae02937258b47ac/dice-6---dice-6.png";
const diceRollSound = document.querySelector("#diceRollSound");
const congratulationsSound = document.querySelector("#congratulationsSound");
const failedSound = document.querySelector("#failedSound");

let savePoint = 1;
let currentPosition = -210;
let chances = 3;
let winnerModal = new bootstrap.Modal(document.getElementById('winnerModal'));

document.querySelector("#rollBtn").addEventListener("click", function () {
    diceRollSound.play();
    // Dice roll
    const dices = [dice1, dice2, dice3, dice4, dice5, dice6];
    const dice = dices[Math.floor(Math.random() *6)];
    document.querySelector("#dice").src = dice;

    savePoints(dice); // Character movement

    chances--;

    if (chances == 3){
        document.querySelector("#chances").innerHTML = "3";
    } else if (chances == 2){
        document.querySelector("#chances").innerHTML = "2";
    } else if (chances == 1){
        document.querySelector("#chances").innerHTML = "1";
    }
    
    checkWinner();
});

document.querySelector("#resetBtn").addEventListener("click", () => {
    resetAll();
});

document.querySelector("#closeModal").addEventListener("click", () => {
    resetAll();
});

function savePoints(diceResult){
    if (savePoint == 1) {
        document.querySelector("#point1").classList.toggle("blinking");
        if (diceResult == dice1) {
            savePoint = 2;
            moveImage(42);
            return;
        } else if (diceResult == dice2) {
            savePoint = 3;
            moveImage(84);
            return;
        } else if (diceResult == dice3) {
            savePoint = 4;
            moveImage(126);
            return;
        } else if (diceResult == dice4) {
            savePoint = 5;
            moveImage(168);
            return;
        } else if (diceResult == dice5) {
            savePoint = 6;
            moveImage(210);
            return;
        } else if (diceResult == dice6) {
            savePoint = 7;
            moveImage(252);
            return;
        }
    } else if (savePoint == 2) {
        document.querySelector("#point2").classList.toggle("blinking");
        if (diceResult == dice1) {
            savePoint = 3;
            moveImage(42);
            return;
        } else if (diceResult == dice2) {
            savePoint = 4;
            moveImage(84);
            return;
        } else if (diceResult == dice3) {
            savePoint = 5;
            moveImage(126);
            return;
        } else if (diceResult == dice4) {
            savePoint = 6;
            moveImage(168);
            return;
        } else if (diceResult == dice5) {
            savePoint = 7;
            moveImage(210);
            return;
        } else if (diceResult == dice6) {
            savePoint = 8;
            moveImage(252);
            return;
        }
    } else if (savePoint == 3) {
        document.querySelector("#point3").classList.toggle("blinking");
        if (diceResult == dice1) {
            savePoint = 4;
            moveImage(42);
            return;
        } else if (diceResult == dice2) {
            savePoint = 5;
            moveImage(84);
            return;
        } else if (diceResult == dice3) {
            savePoint = 6;
            moveImage(126);
            return;
        } else if (diceResult == dice4) {
            savePoint = 7;
            moveImage(168);
            return;
        } else if (diceResult == dice5) {
            savePoint = 8;
            moveImage(210);
            return;
        } else if (diceResult == dice6) {
            savePoint = 9;
            moveImage(252);
            return;
        }
    } else if (savePoint == 4) {
        document.querySelector("#point4").classList.toggle("blinking");
        if (diceResult == dice1) {
            savePoint = 5;
            moveImage(42);
            return;
        } else if (diceResult == dice2) {
            savePoint = 6;
            moveImage(84);
            return;
        } else if (diceResult == dice3) {
            savePoint = 7;
            moveImage(126);
            return;
        } else if (diceResult == dice4) {
            savePoint = 8;
            moveImage(168);
            return;
        } else if (diceResult == dice5) {
            savePoint = 9;
            moveImage(210);
            return;
        } else if (diceResult == dice6) {
            savePoint = 10;
            moveImage(252);
            return;
        }
    } else if (savePoint == 5) {
        document.querySelector("#point5").classList.toggle("blinking");
        if (diceResult == dice1) {
            savePoint = 6;
            moveImage(42);
            return;
        } else if (diceResult == dice2) {
            savePoint = 7;
            moveImage(84);
            return;
        } else if (diceResult == dice3) {
            savePoint = 8;
            moveImage(126);
            return;
        } else if (diceResult == dice4) {
            savePoint = 9;
            moveImage(168);
            return;
        } else if (diceResult == dice5) {
            savePoint = 10;
            moveImage(210);
            return;
        } else if (diceResult == dice6) {
            savePoint = 11;
            moveImage(252);
            return;
        }
    } else if (savePoint == 6) {
        document.querySelector("#point6").classList.toggle("blinking");
        if (diceResult == dice1) {
            savePoint = 7;
            moveImage(42);
            return;
        } else if (diceResult == dice2) {
            savePoint = 8;
            moveImage(84);
            return;
        } else if (diceResult == dice3) {
            savePoint = 9;
            moveImage(126);
            return;
        } else if (diceResult == dice4) {
            savePoint = 10;
            moveImage(168);
            return;
        } else if (diceResult == dice5) {
            savePoint = 11;
            moveImage(210);
            return;
        } else if (diceResult == dice6) {
            savePoint = 1;
            resetCharacterPosition();
            return;
        }
    } else if (savePoint == 7) {
        document.querySelector("#point7").classList.toggle("blinking");
        if (diceResult == dice1) {
            savePoint = 8;
            moveImage(42);
            return;
        } else if (diceResult == dice2) {
            savePoint = 9;
            moveImage(84);
            return;
        } else if (diceResult == dice3) {
            savePoint = 10;
            moveImage(126);
            return;
        } else if (diceResult == dice4) {
            savePoint = 11;
            moveImage(168);
            return;
        } else if (diceResult == dice5) {
            savePoint = 1;
            resetCharacterPosition();
            return;
        } else if (diceResult == dice6) {
            savePoint = 1;
            resetCharacterPosition();
            return;
        }
    } else if (savePoint == 8) {
        document.querySelector("#point8").classList.toggle("blinking");
        if (diceResult == dice1) {
            savePoint = 9;
            moveImage(42);
            return;
        } else if (diceResult == dice2) {
            savePoint = 10;
            moveImage(84);
            return;
        } else if (diceResult == dice3) {
            savePoint = 11;
            moveImage(126);
            return;
        } else if (diceResult == dice4) {
            savePoint = 1;
            resetCharacterPosition();
            return;
        } else if (diceResult == dice5) {
            savePoint = 1;
            resetCharacterPosition();
            return;
        } else if (diceResult == dice6) {
            savePoint = 1;
            resetCharacterPosition();
            return;
        }
    } else if (savePoint == 9) {
        document.querySelector("#point9").classList.toggle("blinking");
        if (diceResult == dice1) {
            savePoint = 10;
            moveImage(42);
            return;
        } else if (diceResult == dice2) {
            savePoint = 11;
            moveImage(84);
            return;
        } else if (diceResult == dice3) {
            savePoint = 1;
            resetCharacterPosition();
            return;
        } else if (diceResult == dice4) {
            savePoint = 1;
            resetCharacterPosition();
            return;
        } else if (diceResult == dice5) {
            savePoint = 1;
            resetCharacterPosition();
            return;
        } else if (diceResult == dice6) {
            savePoint = 1;
            resetCharacterPosition();
            return;
        }
    } else if (savePoint == 10) {
        document.querySelector("#point10").classList.toggle("blinking");
        if (diceResult == dice1) {
            savePoint = 11;
            moveImage(42);
            return;
        } else if (diceResult == dice2) {
            savePoint = 1;
            resetCharacterPosition();
            return;
        } else if (diceResult == dice3) {
            savePoint = 1;
            resetCharacterPosition();
            return;
        } else if (diceResult == dice4) {
            savePoint = 1;
            resetCharacterPosition();
            return;
        } else if (diceResult == dice5) {
            savePoint = 1;
            resetCharacterPosition();
            return;
        } else if (diceResult == dice6) {
            savePoint = 1;
            resetCharacterPosition();
            return;
        }
    }
}

function moveImage(steps){
    currentPosition += steps;
    document.querySelector(".characterInitialPosition").style.left = currentPosition + "px";
    
    // Save point indicator
    if (currentPosition == -168){
        document.querySelector("#point2").classList.toggle("blinking");
    } else if (currentPosition == -126){
        document.querySelector("#point3").classList.toggle("blinking");
    } else if (currentPosition == -84){
        document.querySelector("#point4").classList.toggle("blinking");
    } else if (currentPosition == -42){
        document.querySelector("#point5").classList.toggle("blinking");
    } else if (currentPosition == 0){
        document.querySelector("#point6").classList.toggle("blinking");
    } else if (currentPosition == 42){
        document.querySelector("#point7").classList.toggle("blinking");
    } else if (currentPosition == 84){
        document.querySelector("#point8").classList.toggle("blinking");
    } else if (currentPosition == 126){
        document.querySelector("#point9").classList.toggle("blinking");
    } else if (currentPosition == 168){
        document.querySelector("#point10").classList.toggle("blinking");
    } else if (currentPosition == 210){
        document.querySelector("#point11").classList.toggle("blinking");
    }
}

function checkWinner(){
    if (chances == 0){
        if (savePoint == 11){
            congratulationsSound.play();
            document.querySelector("#chances").innerHTML = "0";
            document.querySelector("#winnerMessage").innerHTML = "Congratulations! You won!";
            document.querySelector("#winnerMessageEmoji").innerHTML = "🍾";
            winnerModal.show();
        } else {
            failedSound.play();
            document.querySelector("#chances").innerHTML = "0";
            document.querySelector("#winnerMessage").innerHTML = "Sorry! You lost.";
            document.querySelector("#winnerMessageEmoji").innerHTML = "👹";
            winnerModal.show();
        }
    } else if (chances > 0){
        if (savePoint == 11){
            congratulationsSound.play();
            document.querySelector("#winnerMessage").innerHTML = "Congratulations! You won!";
            document.querySelector("#winnerMessageEmoji").innerHTML = "🍾";
            winnerModal.show(); 
        }
    }
}

function resetAll(){
    document.querySelector("#allInitialPosition").innerHTML = `<div class="row justify-content-center mt-4 mb-3" id="characterPosition">
    <img src="https://cdni.iconscout.com/illustration/premium/thumb/young-man-walking-9756575-8006209.png?f=webp" class="characterInitialPosition">
    </div>

    <div class="row gridDot justify-content-center mt-3 mb-3">
        <span class="line mb-5 blinking" id="point1"></span>
        <span class="line mb-5" id="point2"></span>
        <span class="line mb-5" id="point3"></span>
        <span class="line mb-5" id="point4"></span>
        <span class="line mb-5" id="point5"></span>
        <span class="line mb-5" id="point6"></span>
        <span class="line mb-5" id="point7"></span>
        <span class="line mb-5" id="point8"></span>
        <span class="line mb-5" id="point9"></span>
        <span class="line mb-5" id="point10"></span>
        <span class="line mb-5" id="point11"></span>
    </div>`;
    document.querySelector("#chances").innerHTML = "3";
    currentPosition = -210;
    savePoint = 1;
    chances = 3;
}

function resetCharacterPosition(){
    currentPosition = -210;
    savePoint = 1;
    document.querySelector(".characterInitialPosition").style.left = currentPosition + "px";
    document.querySelector("#point1").classList.toggle("blinking");
}