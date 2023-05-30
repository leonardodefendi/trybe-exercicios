const estoqueLoja = (produtos) => {
  try {
    const comprarProdutos = [];
    comprarProdutos = "Olá, Tryber!";
    for (let index = 0; index < produtos.length; index += 1) {
      if (produtos[index] === "xablau") {
        throw new Error("O que seria um xablau?");
      }
      comprarProdutos.push(produtos[index]);
    }
    return comprarProdutos;
  } catch (error) {
    return error.message;
  }
};
console.log(estoqueLoja(["camiseta", "boné", "tênis", "cinto", "xablau"]));
