"use strict";
//Desafio 1 - Descrição
// Como podemos rodar isso em um arquivo .ts sem causar erros? 
// let employee = {};
// employee.code = 10;
// employee.name = "John";
let employee = {
    code: 10,
    name: 'John'
};
let employee2 = {
    code: 10,
    name: "John"
};
let funcionario3 = {
    code: 200,
    nome: 'Jhon'
};
// Desafio 2 - Descrição 
// Como podemos melhorar o esse código usando TS? 
// let pessoa1 = {};
// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"
// let pessoa2 = {}
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";
// let pessoa3 = {
//     nome: "laura",
//     idade: "32",
//     profissao: "Atriz"
// };
// let pessoa4 = {
//     nome = "carlos",
//     idade = 19,
//     profissao = "padeiro"
// }
var cargo;
(function (cargo) {
    cargo[cargo["Atriz"] = 0] = "Atriz";
    cargo[cargo["Padeiro"] = 1] = "Padeiro";
    cargo[cargo["Modelo"] = 2] = "Modelo";
    cargo[cargo["Motorista"] = 3] = "Motorista";
})(cargo || (cargo = {}));
let pessoa1 = {
    nome: "Maria",
    idade: 29,
    profissao: cargo.Atriz
};
let pessoa2 = {
    nome: "Roberto",
    idade: 19,
    profissao: cargo.Padeiro
};
let pessoa3 = {
    nome: "Laura",
    idade: 32,
    profissao: cargo.Modelo
};
let pessoa4 = {
    nome: "Carlos",
    idade: 19,
    profissao: cargo.Motorista
};
//Desafio 3 - Descrição 
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
// let botaoAtualizar = document.getElementById('atualizar-saldo');
// let botaoLimpar = document.getElementById('limpar-saldo');
// let soma = document.getElementById('soma');
// let campoSaldo = document.getElementById('campo-saldo');
// campoSaldo.innerHTML = 0
// function somarAoSaldo(soma) {
//     campoSaldo.innerHTML += soma;
// }
// function limparSaldo() {
//     campoSaldo.innerHTML = '';
// }
// botaoAtualizar.addEventListener('click', function () {
//     somarAoSaldo(soma.value);
// });
// botaoLimpar.addEventListener('click', function () {
//     limparSaldo();
// });
/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */
//export {} // Para não reclamar de variáveis duplicadas (Não se fez necessario nesse caso)
/**
    Em todos os casos abaixo de uso do getElementById(), o elemento é potencialmente nulo e ifs são necessários para garantir que o código vai funcionar da melhor forma.
    No entanto, vão existir situações em que o desenvolvedor vai ter certeza de que o campo está lá e ele pode escrever o código da seguinte maneira:
        document.getElementById('limpar-saldo')!;
    A exclamação no fim é um sinal de que aquele campo não é nulo e que essa função realmente vai trazer algo. Assim, os ifs não são necessários.
    Como exemplo, vou seguir essa metodologia no campo 'botaoLimpar'.
*/
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
let saldoTotal = 0;
limparSaldo();
function somarAoSaldo(soma) {
    if (campoSaldo) {
        saldoTotal += soma;
        campoSaldo.innerHTML = saldoTotal.toString();
        limparCampoSoma();
    }
}
function limparCampoSoma() {
    soma.value = "";
}
function limparSaldo() {
    if (campoSaldo) {
        saldoTotal = 0;
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}
if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', () => {
        console.log(soma.value);
        somarAoSaldo(Number(soma.value));
    });
}
botaoLimpar.addEventListener('click', () => {
    limparSaldo();
});
