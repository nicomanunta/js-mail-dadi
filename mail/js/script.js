let mail = prompt("Inserire la propria mail")

const list_mail = ["luca@mail.com", "giorgio@mail.com", "davide@mail.com", "michele@mail.com","marco@mail.com"]
console.log(list_mail)


let trovata_mail = true

for(let i = 0; i<list_mail.length; i++){
    

    if(mail == list_mail[i]){
        let message = "Mail accettata"
        console.log(message)
    }
    else{
        let message = "Mail rifiutata"
        console.log(message)
    }

}
