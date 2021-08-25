const db = require('../models');
const Article = db.articles;

const createArticle = (article) => {

  const document = new Article({
    articleId: article.articleId,
    intentId: article.intentId,
    summary: article.summary,
    description: article.description,
  });

  return new Promise((resolve, reject) => {
    document
    .save(document)
    .then(data => {
      console.log(data);
      resolve(data);
    })
    .catch(err => {
      reject({
        message: err.message || "Some error occurred while creating an article."
      });
    });
  });
};

const getArticlebyIntentId = (intentId) => {

  return new Promise((resolve, reject) => {
    Article.find({ intentId: `${intentId}` })
    .then(data => {
      console.log(data);
      resolve(data);
    })
    .catch(err => {
      reject({
        message: err.message || "error occurred while retrieving an article."
      });
    });
  });
}

const getArticlebyArticleId = (articleId) => {

  return new Promise((resolve, reject) => {
    Article.find({ articleId: `${articleId}` })
    .then(data => {
      console.log(data);
      resolve(data);
    })
    .catch(err => {
      reject({
        message: err.message || "error occurred while retrieving an article."
      });
    });
  });
}

const getArticles = () => {

  return new Promise((resolve, reject) => {
    Article.find({ })
    .then(data => {
      console.log(data);
      resolve(data);
    })
    .catch(err => {
      reject({
        message: err.message || "error occurred while retrieving an articles."
      });
    });
  });

}

const updateArticlebyId = (id, article) => {

  const document = {
    articleId: article.articleId,
    intentId: article.intentId,
    summary: article.summary,
    description: article.description,
  }

  return new Promise((resolve, reject) => {
    Article
    .findByIdAndUpdate(id, document, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        reject({
          message: err.message || `Some error occurred while updating an article - ${id}.`
        });
      } else {
        resolve({ message: "Article was updated successfully." });
      }
    })
    .catch(err => {
      reject({
        message: err.message || `Some error occurred while updating an article - ${id}.`
      });
    });
  });
};

const deleteArticlebyId = (id) => {

  return new Promise((resolve, reject) => {
    Article
    .findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        reject({
          message: err.message || `Some error occurred while deleting an article - ${id}.`
        });
      } else {
        resolve({ message: "Article was deleted successfully." });
      }
    })
    .catch(err => {
      reject({
        message: err.message || `Some error occurred while deleting an article - ${id}.`
      });
    });
  });
};

module.exports = {
  createArticle,
  getArticles,
  getArticlebyArticleId,
  getArticlebyIntentId,
  updateArticlebyId,
  deleteArticlebyId,
}