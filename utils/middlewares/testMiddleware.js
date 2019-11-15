const testMiddleware = {};

testMiddleware.getMessageFromMiddleware = (req, res, next) => {
  console.log('This message is from the Middleware');
};

module.exports = testMiddleware;
