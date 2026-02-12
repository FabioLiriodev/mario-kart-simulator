class Player {
    name;
    speed;
    handling;
    power;
    points;

    constructor(name, speed, handling, power, points) {
        this.name = name;
        this.speed = speed;
        this.handling = handling;
        this.power = power;
        this.points = points;
    }

}

const mario = new Player("Mario", 4, 3, 3, 0);
const peach = new Player("Peach", 3, 4, 2, 0);
const yoshi = new Player("Yoshi", 2, 4, 3, 0);
const bowser = new Player("Bowser", 5, 2, 5, 0);
const luigi = new Player("Luigi", 3, 4, 3, 0);
const donkeyKong = new Player("Donkey Kong", 2, 5, 5, 0);
const toad = new Player("Toad", 3, 4, 3, 0);
const koopaTropa = new Player("Koopa Tropa", 3, 5, 2, 0);
const wario = new Player("Wario", 4, 3, 3, 0);

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
    let random = Math.random()
    let finalBlock;

    switch (true) {
        case random < 0.33:
            finalBlock = "reta";
            break;
        case random < 0.66:
            finalBlock = "curva";
            break
        default:
            finalBlock = "confronto";
    }

    return finalBlock;

}

async function getRandomPlayer() {
    let players = [mario, peach, yoshi, bowser, luigi, donkeyKong, toad, koopaTropa, wario];
    let randomNumber = Math.floor(Math.random() * players.length);

    return players[randomNumber];

}

async function getRandomItem() {
    let number = Math.random();
    let result;

    switch (true) {
        case number < 0.2:
            result = "bomba";
            break;
        case number < 0.4:
            result = "casca de banana";
            break;
        case number < 0.6:
            result = "casco verde";
            break;
        case number < 0.8:
            result = "estrela";
            break;
        default:
            result = "cogumelo";
            break;
    }

    return result;

}

async function logRollResult(characterName, block, diceResult, attribute, item) {

    console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`)
    console.log(`${characterName} 🎲 tirou o item ${item} no sorteio!\n`)
}



async function playerRaceEngine(character1, character2) {
    for (let round = 1; round <= 10; round++) {
        console.log("_______________________________________________________________")
        console.log(`🏁 Rodada ${round} 🏁\n`)


        //sortear rodada

        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`)

        //sortear item

        let itemPlayer1 = await getRandomItem();
        let itemPlayer2 = await getRandomItem();

        //rolar dados

        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        //teste de habilidade

        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;


        if (block === "reta") {
            totalTestSkill1 = diceResult1 + character1.speed
            totalTestSkill2 = diceResult2 + character2.speed

            await logRollResult(
                character1.name,
                "speed",
                diceResult1,
                character1.speed,
                itemPlayer1
            );
            await logRollResult(
                character2.name,
                "speed",
                diceResult2,
                character2.speed,
                itemPlayer2
            );
        }

        if (block === "curva") {
            totalTestSkill1 = diceResult1 + character1.handling
            totalTestSkill2 = diceResult2 + character2.handling

            await logRollResult(
                character1.name,
                "handling",
                diceResult1,
                character1.handling,
                itemPlayer1
            );
            await logRollResult(
                character2.name,
                "handling",
                diceResult2,
                character2.handling,
                itemPlayer2
            );
        }

        if (block === "reta" || block === "curva") {

            let mensagemItem = "";
            mensagemItem = mensagemItem.concat("Efeitos dos itens:")

            console.log(mensagemItem);


            let mensagemEfeitoItem = "";

            if (itemPlayer1 === "bomba" && itemPlayer2 === "bomba") {
                totalTestSkill2 = (totalTestSkill2 - 2);
                totalTestSkill1 = (totalTestSkill1 - 2);
                mensagemEfeitoItem = mensagemEfeitoItem.concat(`💣 = -2 pontos.\nPontuação de ${character1.name}: ${totalTestSkill1} ponto(s)!\nPontuação de ${character2.name}: ${totalTestSkill2} ponto(s)!`)
            } else if (itemPlayer2 === "bomba") {
                totalTestSkill2 = (totalTestSkill2 - 2);
                mensagemEfeitoItem = mensagemEfeitoItem.concat(`💣 = -2 pontos. Pontuação de ${character2.name}: ${totalTestSkill2} ponto(s)!\n`)
            } else if (itemPlayer1 === "bomba") {
                totalTestSkill1 = (totalTestSkill1 - 2);
                mensagemEfeitoItem = mensagemEfeitoItem.concat(`💣 = -2 pontos. Pontuação de ${character1.name}: ${totalTestSkill1} ponto(s)!\n`)
            }

            if (itemPlayer1 === "casca de banana" && itemPlayer2 === "casca de banana") {
                totalTestSkill2 = (totalTestSkill2 - 1);
                totalTestSkill1 = (totalTestSkill1 - 1);
                mensagemEfeitoItem = mensagemEfeitoItem.concat(`🍌 = -1 ponto.\nPontuação de ${character1.name}: ${totalTestSkill1} ponto(s)!\nPontuação de ${character2.name}: ${totalTestSkill2} ponto(s)!`)
            } else if (itemPlayer2 === "casca de banana") {
                totalTestSkill2 = totalTestSkill2 - 1;
                mensagemEfeitoItem = mensagemEfeitoItem.concat(`🍌 = -1 ponto. Pontuação de ${character2.name}: ${totalTestSkill2} ponto(s)!\n`)
            } else if (itemPlayer1 === "casca de banana") {
                totalTestSkill1 = totalTestSkill1 - 1;
                mensagemEfeitoItem = mensagemEfeitoItem.concat(`🍌 = -1 ponto. Pontuação de ${character1.name}: ${totalTestSkill1} ponto(s)!\n`)
            }

            if (itemPlayer1 === "casco verde" && itemPlayer2 === "casco verde") {
                totalTestSkill2 = (totalTestSkill2 - 1);
                totalTestSkill1 = (totalTestSkill1 - 1);
                mensagemEfeitoItem = mensagemEfeitoItem.concat(`🐢 = -1 ponto.\nPontuação de ${character1.name}: ${totalTestSkill1} ponto(s)!\nPontuação de ${character2.name}: ${totalTestSkill2} ponto(s)!`)
            } else if (itemPlayer2 === "casco verde") {
                totalTestSkill2 = totalTestSkill2 - 1;
                mensagemEfeitoItem = mensagemEfeitoItem.concat(`🐢 = -1 ponto. Pontuação de ${character2.name}: ${totalTestSkill2} ponto(s)!\n`)
            } else if (itemPlayer1 === "casco verde") {
                totalTestSkill1 = totalTestSkill1 - 1;
                mensagemEfeitoItem = mensagemEfeitoItem.concat(`🐢 = -1 ponto. Pontuação de ${character1.name}: ${totalTestSkill1} ponto(s)!\n`)
            }

            if (itemPlayer1 === "estrela" && itemPlayer2 === "estrela") {
                totalTestSkill2 = (totalTestSkill2 + 3);
                totalTestSkill1 = (totalTestSkill1 + 3);
                mensagemEfeitoItem = mensagemEfeitoItem.concat(`⭐ = +3 pontos.\nPontuação de ${character1.name}: ${totalTestSkill1} ponto(s)!\nPontuação de ${character2.name}: ${totalTestSkill2} ponto(s)!`)
            } else if (itemPlayer2 === "estrela") {
                totalTestSkill2 = totalTestSkill2 + 3;
                mensagemEfeitoItem = mensagemEfeitoItem.concat(`⭐ = +3 pontos. Pontuação de ${character2.name}: ${totalTestSkill2} ponto(s)!\n`)
            } else if (itemPlayer1 === "estrela") {
                totalTestSkill1 = totalTestSkill1 + 3;
                mensagemEfeitoItem = mensagemEfeitoItem.concat(`⭐ = +3 pontos. Pontuação de ${character1.name}: ${totalTestSkill1} ponto(s)!\n`)
            }

            if (itemPlayer1 === "cogumelo" && itemPlayer2 === "cogumelo") {
                totalTestSkill2 = (totalTestSkill2 + 1);
                totalTestSkill1 = (totalTestSkill1 + 1);
                mensagemEfeitoItem = mensagemEfeitoItem.concat(`🍄 = +1 ponto.\nPontuação de ${character1.name}: ${totalTestSkill1} ponto(s)!\nPontuação de ${character2.name}: ${totalTestSkill2} ponto(s)!`)
            } else if (itemPlayer2 === "cogumelo") {
                totalTestSkill2 = totalTestSkill2 + 1;
                mensagemEfeitoItem = mensagemEfeitoItem.concat(`🍄 = +1 ponto. Pontuação de ${character2.name}: ${totalTestSkill2} ponto(s)!\n`)
            } else if (itemPlayer1 === "cogumelo") {
                totalTestSkill1 = totalTestSkill1 + 1;
                mensagemEfeitoItem = mensagemEfeitoItem.concat(`🍄 = +1 ponto. Pontuação de ${character1.name}: ${totalTestSkill1} ponto(s)!\n`)
            }

            console.log(mensagemEfeitoItem);

        }

        if (block === "confronto") {
            let powerResult1 = diceResult1 + character1.power;
            let powerResult2 = diceResult2 + character2.power;

            let mensagemDeInicio = "";
            mensagemDeInicio = mensagemDeInicio.concat("🛑 Atenção: Itens desabilitados no modo confronto! 🛑\n")

            console.log(mensagemDeInicio);

            await logRollResult(
                character1.name,
                "power",
                diceResult1,
                character1.power,
                itemPlayer1
            );
            await logRollResult(
                character2.name,
                "power",
                diceResult2,
                character2.power,
                itemPlayer2
            );

            let mensagemDoConfronto = "";

            if (powerResult1 === powerResult2) {
                mensagemDoConfronto = mensagemDoConfronto.concat("Confronto empatado!Nenhum ponto foi perdido!");
            } else if (powerResult1 > powerResult2) {
                character2.points = Math.max(0, --character2.points);
                mensagemDoConfronto = mensagemDoConfronto.concat(` ${character1.name} venceu o confronto! ${character2.name} ficou com ${character2.points} ponto(s)! 🐢`)

            } else if (powerResult2 > powerResult1) {
                character1.points = Math.max(0, --character1.points);
                mensagemDoConfronto = mensagemDoConfronto.concat(` ${character2.name} venceu o confronto! ${character1.name} ficou com ${character1.points} ponto(s)! 🐢`);
            }

            console.log(mensagemDoConfronto);

        }



        //verificando o vencedor

        if (block !== "confronto" && totalTestSkill1 === totalTestSkill2) {
            console.log(`\n🏁 Resultado da rodada ${round}! 🏁`)
            console.log(`Pontuação final de: ${character1.name}: ${totalTestSkill1}`)
            console.log(`Pontuação final de: ${character2.name}: ${totalTestSkill2}\n`)
            console.log(`A rodada terminou empatada!`);
        } else if (block !== "confronto" && totalTestSkill1 > totalTestSkill2) {
            console.log(`\n🏁 Resultado da rodada ${round}! 🏁`)
            console.log(`Pontuação final de: ${character1.name}: ${totalTestSkill1}`)
            console.log(`Pontuação final de: ${character2.name}: ${totalTestSkill2}\n`)
            console.log(`${character1.name} marcou 1 ponto!`);
            character1.points++;
        } else if (block !== "confronto" && totalTestSkill2 > totalTestSkill1) {
            console.log(`\n🏁 Resultado da rodada ${round}! 🏁`)
            console.log(`Pontuação final de: ${character1.name}: ${totalTestSkill1}`)
            console.log(`Pontuação final de: ${character2.name}: ${totalTestSkill2}\n`)
            console.log(`${character2.name} marcou 1 ponto!`);
            character2.points++;
        }

    }
}


async function declareWinner(character1, character2) {
    console.log("__________________________________________________")
    console.log("🏁 Resultado Final! 🏁");
    console.log(`${character1.name} : ${character1.points} ponto(s)`);
    console.log(`${character2.name} : ${character2.points} ponto(s)`);

    if (character1.points > character2.points)
        console.log(`\n${character1.name} venceu a corrida! Parabéns! 🏆\n`);
    else if (character2.points > character1.points)
        console.log(`\n${character2.name} venceu a corrida! Parabéns! 🏆\n`);
    else console.log(`\nA corrida terminou em empate!\n`)

}

let mensagemDeAbertura = "";

(async function main() {
    let player1 = await getRandomPlayer();
    let player2 = null;
    while (player2 === null || player2 === player1) {
        player2 = await getRandomPlayer();
    }

    mensagemDeAbertura = mensagemDeAbertura.concat(`🚨: Corrida entre ${player1.name} e ${player2.name} começando...`)

    console.log(mensagemDeAbertura);

    await playerRaceEngine(player1, player2);
    await declareWinner(player1, player2);
})()
