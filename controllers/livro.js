const { getTodosLivros, getLivroId, insereLivro, modificaLivro, deletarLivroPorId } = require("../service/livro");

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
    const id = req.params.id
    const livro = getLivroId(id);
    res.send(livro);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}


//criar novo livro 
function postLivro(req, res) {
  const livroNovo = req.body;

  insereLivro(livroNovo)
  res.status(201)
  res.send('livro inserido com sucesso')
  try {
    
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

//editar um livro
function patchLivro(req,res){

  try {
    const id = req.params.id
    const body = req.body;

    modificaLivro(body, id)

    res.send('item modificado com sucesso!!')
    
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

//deletar um livro 
function deleteLivro(req, res) {
  try {
      const id = req.params.id
      deletarLivroPorId(id)
      res.send("livro deletado com sucesso")
  } catch (error) {
      res.status(500)
      res.send(error.message)
  }
}


module.exports = {
  getLivros,
  getLivro, 
  postLivro, 
  patchLivro, 
  deleteLivro
};
