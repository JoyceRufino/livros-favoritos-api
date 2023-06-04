const { Router } = require("express");
const {
  getLivros,
  getLivro,
  postLivro,
  patchLivro,
  deleteLivro,
} = require("../controllers/livro");

const router = Router();

router.get("/", getLivros);
router.get("/:id", getLivro);
router.post("/", postLivro);
router.patch("/", patchLivro);
router.delete("/:id", deleteLivro);

module.exports = router;
