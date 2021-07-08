//array produtos
let produtos = [
    {nome: 'celular', valor: 2000, qualidade: 5, status: true},
    {nome: 'notebook', valor: 4000, qualidade: 7, status: false},
    {nome: 'monitor', valor: 6000, qualidade: 10, status: true},
]

//filtragem de produtos
const carrinho = produtos.filter((produto)=> {
    const valor = produto.valor
    const qualidade = produto.qualidade
    const status = produto.status
    const selected = (valor >= 482 && valor <= 1600) && (qualidade >= 60) && (status == true)
    return selected
})

//exibir itens do carrinho
carrinho.forEach((produto)=> {
    console.log('Nome: ', produto.nome)
    console.log('Valor: ', produto.valor)
})

const total = carrinho.reduce((acumulador, produto) => {
    return acumulador.valor + produto.valor
})

console.log('Total: ', total)