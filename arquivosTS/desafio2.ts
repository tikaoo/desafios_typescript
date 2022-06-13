enum work {
    Desenvolvedor,
    Analista,
}

type Familia = {
    nome: string,
    idade: number,
    profissao: work
}

let eu: Familia = {
    nome: 'Patrick',
    idade: 38,
    profissao: work.Desenvolvedor
};

let irmao: Familia = {
    nome: 'José Ricardo',
    idade: 40,
    profissao: work.Analista
};

