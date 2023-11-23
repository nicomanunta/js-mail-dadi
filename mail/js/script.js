let mail = prompt("Inserire la propria mail")

let list_mail = ["luca@mail.com", "giorgio@mail.com", "davide@mail.com", "michele@mail.com","marco@mail.com"]
console.log(list_mail)

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