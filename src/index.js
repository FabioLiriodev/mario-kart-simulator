const player1 = {
    Nome: "Mario",
    Velocidade: 4,
    Manobrabilidade: 3,
    Poder: 3,
    Pontos: 0,
};

const player2 = {
    Nome: "Peach",
    Velocidade: 3,
    Manobrabilidade: 4,
    Poder: 2,
    Pontos: 0,
};

const player3 = {
    Nome: "Yoshi",
    Velocidade: 2,
    Manobrabilidade: 4,
    Poder: 3,
    Pontos: 0,
};

const player4 = {
    Nome: "Bowser",
    Velocidade: 5,
    Manobrabilidade: 2,
    Poder: 5,
    Pontos: 0,
};

const player5 = {
    Nome: "Luigi",
    Velocidade: 3,
    Manobrabilidade: 4,
    Poder: 4,
    Pontos: 0,
};

const player6 = {
    Nome: "Donkey Kong",
    Velocidade: 2,
    Manobrabilidade: 5,
    Poder: 5,
    Pontos: 0
};

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

async function playerRaceEngine(character1, character2) {
    
}

(async function main() {
   console.log(`🚨: Corrida entre ${player3.Nome} e ${player2.Nome} começando...\n
    `);
    
    await playerRaceEngine(player1, player2);
})()
