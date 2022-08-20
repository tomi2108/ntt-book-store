const jwt = require("jsonwebtoken");

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

const getTokenFrom = (request) => {
  const authorization = request.get("authorization");
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    return authorization.substring(7);
  }
  return null;
};

const tokenExtractor = (request, _, next) => {
  const token = getTokenFrom(request);
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  if (!decodedToken) {
    request.token = null;
  } else {
    request.token = decodedToken;
  }
  next();
};



module.exports = { unknownEndpoint,tokenExtractor };