const {
  getTodosLivros,
  getLivroId,
  insereLivro,
  modificaLivro,
  deletarLivroPorId,
} = require("../service/livro");

//pega todos livros
function getLivros(req, res) {
  try {
    const livros = getTodosLivros();
    res.send(livros);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

//pega unico livro
function getLivro(req, res) {
  try {
    const id = req.params.id;

    if (id && Number(id)) {
      const livro = getLivroId(id);
      res.send(livro);
    } else {
      res.status(422);
      res.send("id inválido");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

//criar novo livro
function postLivro(req, res) {
  const livroNovo = req.body;
  if(req.body.nome){
    insereLivro(livroNovo);
  res.status(201);
  res.send("livro inserido com sucesso");
  } else {
    res.status(422)
    res.send('O campo nome é obrigatório!')
  }
  
  try {
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

//editar um livro
function patchLivro(req, res) {
  try {
    const id = req.params.id;
    if (id && Number(id)) {
      const body = req.body;

      modificaLivro(body, id);

      res.send("item modificado com sucesso!!");
    } else {
      res.status(422);
      res.send("id inválido");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

//deletar um livro
function deleteLivro(req, res) {
  try {
    const id = req.params.id;
    if (id && Number(id)) {
      deletarLivroPorId(id);
      res.send("livro deletado com sucesso");
    } else {
      res.status(422);
      res.send("id inválido");
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

module.exports = {
  getLivros,
  getLivro,
  postLivro,
  patchLivro,
  deleteLivro,
};
