const clickButton  = document.getElementById("start-button");

const pari = document.getElementById("pari").value;

const dispari = document.getElementById("dispari").value;

clickButton.addEventListener("click", 
    function() {
    
    const playerNumber = document.getElementById("player-number").value;

    const computerNumber = Math.random() * (5) + 1  ;

    document.getElementById("computer-number").innerHTML =  parseInt(computerNumber);

    const totale =  parseInt(playerNumber) + parseInt(computerNumber);

    if(document.getElementById('pari').checked){
        if (playerNumber > 5 || playerNumber < 1){
            result = "valore inserito non valido";}
        else if (totale % 2 == 0){
            result = "hai vinto";}
        else 
            result = "hai perso";
        }

    if(document.getElementById('dispari').checked){
        if (playerNumber > 5 || playerNumber < 1){
            result = "valore inserito non valido";}
        else if (totale % 2 != 0){
            result = "hai vinto";}
        else 
            result = "hai perso";
        }
    
        document.getElementById("result").innerHTML =  result 
        document.getElementById("somma").innerHTML =  totale 
    },
    )