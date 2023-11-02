// inserindo variável tipo string que armazena o nome do herói
let nome = "Pepino gatinho gerreiro"

// inserindo variável tipo number que armazena a quantidade de experiência do herói
let xp = 5500

// inserindo variável tipo string vazia que armazenará o nível do herói
let nivel = ""

// utilizando switch case para definir o nível do herói com base a sua experiência
// OBSERVAÇÃO : como o desafio não definiu o nível do herói quando a experiência está entre 5001 e 6000, inventou-se outro nível 
switch(xp) {
    case (xp <= 100) :
        nivel = "Ferro";
        break;
    case (xp > 1001 && xp <= 2000) :
        nivel = "Bronze";
        break;
    case (xp > 2001 && xp <= 5000) :
        nivel = "Prata";
        break;
    case (xp > 5001 && xp <= 6000) :
        nivel = "Dourado";
        break;
    case (xp > 6001 && xp <= 7000) :
        nivel = "Ouro";
        break;
    case (xp > 7001 && xp <= 8000) :
        nivel = "Platina";
        break;
    case (xp > 8001 && xp <= 9000) :
        nivel = "Ascendente";
        break;
    case (xp > 9001 && xp <= 10000) :
        nivel = "Imortal";
        break;
    case (xp >= 10001) :
        nivel = "Radiante";
        break;
    default:
        console.log("")
}

console.log("O herói de nome" + nome + "está no nível" + nivel)