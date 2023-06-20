

const form = document.getElementById("form")



form.addEventListener('click',
function () {
    
    const parola = document.getElementById("parola").value;
    console.log("questa è la mail inserita", parola);

     const parolaDivisa = parola.split(``);

    console.log(parolaDivisa);


     const parolaInvertitaDivisa = parolaDivisa.reverse();
     console.log(parolaInvertitaDivisa);

     const parolaInvertita = parolaInvertitaDivisa.join("")


     if (parola == parolaInvertita){

         document.getElementById("result").innerHTML = "LA PAROLA è PALINDROMA"
     }
     else{

     document.getElementById("result").innerHTML = "LA PAROLA NON è PALINDROMA"
 }
}
)