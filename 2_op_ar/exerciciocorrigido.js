var r = require ("readline-sync");

var produtos = [
    {nome: 'alface', preco:1.99},
    {nome:'cenoura', pereco:2.99},
];

var posicao = parseInt(r.question('Escolha um produto entre o e 2:'));
var porcetagem = parseInt(r.question('digite uma porcetagem'));

var produtoSelecionado = produtos [posicao];

var desconto = produtoSelecionado.preco * (porcetagem /100);

console.log('Produto' + produtoSelecionado.nome + 'com desconto é de R$' + desconto.toFixed(2));