function createComment(url, request) {
  const requestComment = request.body && request.body.comment;
  const response = {};

  if (requestComment && database.users[requestComment.username] && database.articles[articleId]) {
    const comment = {
      id: database.nextCommentId++,
      username: requestComment.username,
      articleId: database.articles[articleId],
      upvotedBy: [],
      downvotedBy: []
    };

    database.comments[comment.id] = comment;

    response.body = {comment: comment};
    response.status = 201;
  } else {
    response.status = 400;
  }

  return response;
}
