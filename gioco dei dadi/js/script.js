// creare due dadi che generino numeri interi da 1 a 6
let dado_mio = Math.round(Math.random() * 7) 
let dado_pc = Math.round(Math.random() * 7) 
// visualizzarli in console
console.log("Il tuo numero è: " + dado_mio)
console.log("Il numero del computer è: " + dado_pc)
// verificare il vincitore
if (dado_mio > dado_pc){
    // se maggiore vinco
    let messaggio = "Hai Vinto"
    console.log(messaggio)
}
else if (dado_mio < dado_pc){
    // se minore perdo
    let messaggio = "Hai Perso"
    console.log(messaggio)

} 
else {
    // altrimenti pareggio
    let messaggio = "Pareggio"
    console.log(messaggio)
}