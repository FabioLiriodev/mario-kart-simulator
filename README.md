<h1 align="center"> 🏁 Simulador de Mario Kart - JavaScript / NodeJS 🏁 </h1>

<div align="center">

![Mario Kart Simulator](<./docs/mario.gif>)

</div>

<h2> 📖 Índice 📖 </h2>

- Descrição do Projeto  
- Objetivo do Projeto  
- Tecnologias Utilizadas  
- Status do Projeto  
- Funcionalidades  
- Regra de Negócio da Simulação  
- Como Executar a Aplicação  
- Conceitos Aplicados  
- Desafios Encontrados  
- Desenvolvedor  

---

<h2> 🖋️ Descrição do Projeto 🖋️ </h2>

> O **Simulador de Mario Kart** é uma aplicação desenvolvida em **JavaScript**, executada via **NodeJS**, que simula corridas entre dois pilotos aleatórios do universo Mario Kart diretamente no terminal.

A aplicação reproduz uma corrida com múltiplas rodadas, utilizando regras de lógica baseadas nos atributos de cada personagem e em eventos aleatórios de pista.

Toda a interação ocorre no terminal, com foco em lógica de programação e estruturação de regras de negócio.

---

<h2> 🎯 Objetivo do Projeto 🎯 </h2>

O projeto teve como principal finalidade consolidar conhecimentos fundamentais de desenvolvimento com JavaScript, incluindo:

1. Classes e objetos em JavaScript  
2. Manipulação de arrays de objetos  
3. Loops de repetição  
4. Estruturas condicionais  
5. Atribuição e controle de variáveis  
6. Compreensão e implementação de regras de negócio  
7. Funções síncronas e assíncronas  
8. Uso do terminal com NodeJS e NPM  

---

<h2> 🚀 Tecnologias Utilizadas 🚀</h2>

<div>

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white">
<img src="https://img.shields.io/badge/NPM-red?style=for-the-badge&logo=npm&logoColor=white">

</div>

---

<h2> 🚧 Status do Projeto 🚧 </h2>

<div>

![Badge Finalizado](http://img.shields.io/static/v1?label=STATUS&message=FINALIZADO&color=GREEN&style=for-the-badge)

</div>

---

<h2> ✨ Funcionalidades ✨ </h2>

:heavy_check_mark: Seleção automática de dois personagens aleatórios para a corrida  

:heavy_check_mark: Simulação de pista com 10 rodadas dinâmicas  

:heavy_check_mark: Eventos aleatórios de corrida (reta, curva ou confronto)  

:heavy_check_mark: Sistema de pontuação baseado nos atributos dos personagens  

:heavy_check_mark: Execução completa via terminal com NodeJS  

:heavy_check_mark: Exibição detalhada do progresso da corrida a cada rodada  

---

<h2> 🧠 Regra de Negócio da Simulação 🧠 </h2>

### 🏎️ Jogadores 🏎️ 
O computador seleciona **dois personagens aleatórios** do universo Mario Kart, armazenando cada um como um objeto com seus atributos.

A lista contém 9 personagens clássicos do Mario Kart (Mario, Peach, Luigi, Bowser, Yoshi, Toad, Donkey Kong, Koopa Tropa e Wario)

---

### 🛣️ Pista 🛣️
A corrida acontece em uma pista com **10 rodadas**.

A cada rodada é sorteado um tipo de bloco:

- **RETA**
- **CURVA**
- **CONFRONTO**

---

### 🎲 Mecânica das Rodadas 🎲

✔️ **Reta** e **Curva**
- Implementação de dinâmica de itens que podem aumentar ou dimunuir a pontuação parcial em cada rodada de reta ou curva.

✔️ **Reta**
- Cada jogador lança um dado de 6 lados  
- Soma-se o valor obtido ao atributo **SPEED**
- Mecânica de item implementada para modificar o valor obtido no somatório anterior.  
- Quem tiver maior resultado ganha **+1 ponto**

✔️ **Curva**
- Cada jogador lança um dado de 6 lados  
- Soma-se o valor ao atributo **HANDLING**
- Mecânica de item implementada para modificar o valor obtido no somatório anterior.  
- Quem tiver maior resultado ganha **+1 ponto**

✔️ **Confronto**
- Cada jogador lança um dado de 6 lados  
- Soma-se ao atributo **POWER**  
- Quem perder **perde 1 ponto**
- A pontuação restante do jogador perdedor aparece na tela.

⚠️ Nenhum jogador pode ter pontuação negativa.

---

### 🏆 Condição de Vitória 🏆

Ao final das 10 rodadas:

> Vence o personagem que acumulou **mais pontos**.

---

<h2> 💨 Como Executar a Aplicação 💨 </h2>

1️⃣ Clone o repositório:

```bash
git clone <https://github.com/FabioLiriodev/mario-kart-simulator>

```

2️⃣ Acesse a pasta do projeto:

```bash

cd mario-kart-simulator

```

3️⃣ Instale as dependências (se for necessário):

```bash

npm install

```

4️⃣ Execute a simulação:

```bash

node index.js

```

5️⃣ Acompanhe o resultado da corrida diretamente no terminal 🎮


<h2> 📚 Conceitos Aplicados 📚 </h2>

Este projeto reforça fundamentos essenciais de programação:

:white_check_mark: Programação orientada a objetos

:white_check_mark: Estruturação de regras de negócio

:white_check_mark: Manipulação de coleções de dados

:white_check_mark: Controle de fluxo com condicionais

:white_check_mark: Iteração com loops

:white_check_mark: Organização modular de código

:white_check_mark: Execução de aplicações NodeJS via terminal

<h2> 🧗‍♂️ Desafios Encontrados 🧗‍♂️ </h2>

:bulb: Durante o desenvolvimento, alguns desafios importantes foram:

:bulb: Modelar corretamente os personagens como objetos reutilizáveis

:bulb: Garantir que a lógica da corrida permanecesse justa e previsível mesmo com eventos aleatórios

:bulb: Controlar o fluxo das rodadas sem gerar inconsistências na pontuação

:bulb: Implementar a regra de não permitir pontuação negativa

:bulb: Estruturar a regra de negócio de forma clara e escalável

:bulb: Adaptar o raciocínio de uma aplicação visual para uma aplicação totalmente orientada ao terminal

Esses desafios contribuíram significativamente para o fortalecimento da lógica de programação.

<h2> 💻 Desenvolvedor 💻</h2>

<img src="https://avatars.githubusercontent.com/u/140852220?v=4" width=100><br><sub>Fábio Lirio</sub>
