// permettere di inserire una mail tramite prompt o input
let mail = prompt("Inserire la propria mail")
// creare un array contenente un tot di mail
const list_mail = ["luca@mail.com", "giorgio@mail.com", "davide@mail.com", "michele@mail.com","marco@mail.com"]
console.log(list_mail)
// creare una variabile flag con valore falso
let mail_trovata = false;

// scrivere un ciclo per verificare che la mail inserita sia presente nell'array
for(let i = 0; i<list_mail.length; i++){

    // se presente, la variabile flag diventa vera
    if(mail == list_mail[i]){

        mail_trovata = true
    }

}
// fuori dal ciclo far apparire un messaggio
// se la variabile flag è diventata vera appare "Entra"
if (mail_trovata == true){
    console.log("Entra")

}
// altrimenti appare "stai fuori"
else{
    console.log("Stai fuori")
}