const pessoa = {
    nome: 'Ana',
    sobrenome: 'Lopes',
    idade: '33',
    profissao: 'front-end'

};

console.log(pessoa);

//let nome = pessoa.nome;
//let sobrenome = pessoa.sobrenome;
//let idade = pessoa.idade;
//let profissao = pessoa.profissao;


let { nome, endereco, idade, profissao } = pessoa;

console.log(nome, endereco, idade, profissao);



