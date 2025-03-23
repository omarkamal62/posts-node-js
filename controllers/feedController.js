exports.getPosts = (req, res, next) => {
  res.json({
    posts: [
      {
        title: "First Post",
        content: "This is the first post",
      },
    ],
  });
};
