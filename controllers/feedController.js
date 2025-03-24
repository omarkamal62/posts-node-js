const { validationResult } = require("express-validator");

exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: "1",
        title: "First Post",
        content: "This is the first post",
        imageUrl: "/images/1.jpg",
        creator: {
          name: "Omar",
        },
        createdAt: new Date(),
      },
    ],
  });
};

exports.createPost = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      message: "Validation Failed",
    });
  }

  const title = req.body.title;
  const content = req.body.content;

  res.status(201).json({
    message: "Post Created Successfully!",
    post: {
      _id: new Date().toISOString(),
      title,
      content,
      creator: {
        name: "Omar",
      },
      createdAt: new Date(),
    },
  });
};
