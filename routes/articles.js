const express = require('express');
const articleController = require('../controllers/articles.controller');

const router = express.Router();


router.get('/', (req, res) => {

  articleController.getArticles().then(articles => {
    console.log(`articles ${articles}`);
 
   res.status(200).send(articles);
  });

});

router.get('/:articleId', (req, res) => {
  const { articleId } = req.params;

  articleController.getArticlebyArticleId(articleId).then(article => {
    console.log(`article ${article}`);
 
   res.status(200).send(article);
  });

});

router.get('/intents/:intentId', (req, res) => {
  const { intentId } = req.params;

 articleController.getArticlebyIntentId(intentId).then(article => {
   console.log(`article ${article}`);

  res.status(200).send(article);
 });

});

router.post('/', (req, res) => {
  const {articleId, intentId, summary, description  } = req.body;

  const document = {
    articleId,
    intentId,
    summary,
    description,
  }

  articleController.createArticle(document).then(response => {

    res.status(201).send(response);
  });

});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const {articleId, intentId, summary, description} = req.body;

  const document = {
    articleId,
    intentId,
    summary,
    description,
  }

  console.log(id, articleId, intentId, summary, description);

  articleController.updateArticlebyId(id, document).then(response => {
    res.status(200).send(response);
  }).catch(error => {
    console.log(error);
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  articleController.deleteArticlebyId(id).then(response => {
    res.status(200).send(response);
  });
});

module.exports = router;