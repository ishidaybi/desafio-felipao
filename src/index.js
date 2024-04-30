let heroiNome = "Kurama";
let heroiXp = 100;


if (heroiXp <= 1000) {
    message = "Ferro"
} else if (heroiXp <=2000){
    message = "Bronze"
} else if (heroiXp <=5000){
    message = "Prata"
} else if (heroiXp <=7000){
    message = "Ouro"
} else if (heroiXp <=8000){
    message = "Platina"
} else if (heroiXp <=9000){
    message = "Ascendente"
} else if (heroiXp <=10000){
    message = "Imortal"
} else if (heroiXp > 10000){
    message = "Radiante"
} 

console.log("O Herói " + heroiNome + " está no nível " + message)
