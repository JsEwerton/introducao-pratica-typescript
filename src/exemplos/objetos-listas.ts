const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'desenvolvedora'
}

pessoa.idade = 25;

const andre: {nome: string, idade: number, profissao: string} = {
    nome : 'Andre',
    idade : 15,
    profissao : 'Desenvolvedor'
}


const paula: {nome: string, idade: number, profissao: string} = {
    nome : 'Paula',
    idade : 15,
    profissao : 'Desenvolvedora'
}


enum profissao {
    Professora,
    Atriz, 
    Desenvolvedora, 
    JogadorDeFutebol
}

interface Pessoa{
    nome: string,
    idade: number,
    profissao?: profissao
}


interface Estudante extends Pessoa{
    materias : string[] 

}
const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: profissao.Desenvolvedora
}

const maria: Pessoa = {
    nome: 'Maria',
    idade: 23,
    profissao: profissao.Desenvolvedora
}


const jessica: Estudante = {
    nome:'Jessica',
    idade: 28,
    profissao: profissao.Desenvolvedora,
    materias: ['Matemática discreta', 'programação']
}

const monica: Estudante = {
    nome:'Jessica',
    idade: 28,
    profissao: profissao.Desenvolvedora,
    materias: ['Matemática discreta', 'programação']
}


function listar(lista: string[]){
    for (const item of lista){
        console.log('- ', item);
    }
}

listar(monica.materias);