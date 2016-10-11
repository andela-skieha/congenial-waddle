/* eslint-disable no-console */

const sendResponse = function sendResponse(res, next) {
  return (obj) => {
    res.send(200, obj);
    next();
  };
};
exports.sendResponse = sendResponse;

const sendError = function sendError(next) {
  return (err) => {
    console.log(err);
    next(err);
  };
};
exports.sendError = sendError;
