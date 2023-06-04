const fs = require("fs");

//todos os livros
function getTodosLivros() {
  return JSON.parse(fs.readFileSync("livros.json"));
}

//unico livro
function getLivroId(id) {
  const livros = JSON.parse(fs.readFileSync("livros.json"));
  const livroFiltrado = livros.filter((livro) => livro.id === id)[0];
  return livroFiltrado;
}
//adicionar unico livro
function insereLivro(livroNovo) {
  const livros = JSON.parse(fs.readFileSync("livros.json"));
  const novaListadeLivros = [...livros, livroNovo];
  fs.writeFileSync("livros.json", JSON.stringify(novaListadeLivros));
}

//editar unico livro
function modificaLivro(modificacoes, id) {
  let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"));
  const indiceModificado = livrosAtuais.findIndex((livro) => livro.id === id);
  const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes };

  livrosAtuais[indiceModificado] = conteudoMudado;

  fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais));
}

//deletar livro por id
function deletarLivroPorId(id) {
  const livros = JSON.parse(fs.readFileSync("livros.json"));

  const livrosFiltrados = livros.filter((livro) => livro.id !== id);

  fs.writeFileSync("livros.json", JSON.stringfy(livrosFiltrados));
}
module.exports = {
  getTodosLivros,
  getLivroId,
  insereLivro,
  modificaLivro,
  deletarLivroPorId
};
