module.exports = mongoose => {

  const schema = mongoose.Schema(
    {
      articleId: String,
      intentId: String,
      summary: String,
      description: String,
    },
    { timestamps: true }
  );

  // schema.method("toJSON", () => {
  //   const { __v, _id, ...object } = object;
  //   object.id = _id;
  //   return object;
  // });

  const Article = mongoose.model("article", schema);
  return Article;

};