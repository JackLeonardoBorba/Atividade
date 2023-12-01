// Definindo a lista de produtos com códigos e preços
const produtos = [
    { codigo: 1, nome: 'Produto A', preco: 10.0 },
    { codigo: 2, nome: 'Produto B', preco: 20.0 },
    { codigo: 3, nome: 'Produto C', preco: 15.0 },
  ];
  
  // Função para calcular o valor total com base no código do produto e quantidade
  function calcularValorTotal(codigoProduto, quantidade) {
    // Buscar o produto pelo código
    const produtoSelecionado = produtos.find(produto => produto.codigo === codigoProduto);
  
    if (!produtoSelecionado) {
      return 'Código de produto inválido.';
    }
  
    // Calcular o valor total
    const valorTotal = produtoSelecionado.preco * quantidade;
  
    return `O valor total para ${quantidade} unidades do ${produtoSelecionado.nome} é R$${valorTotal.toFixed(2)}.`;
  }
  
  // Exemplo de uso
  const codigoProdutoUsuario = 2; // Altere este valor conforme necessário
  const quantidadeUsuario = 3; // Altere este valor conforme necessário
  
  const resultado = calcularValorTotal(codigoProdutoUsuario, quantidadeUsuario);
  console.log(resultado);
  