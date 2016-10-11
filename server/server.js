/* eslint-disable new-cap */
/* eslint-disable no-console */

const restify = require('restify');
const NeDBDataStore = require('nedb');
const CardRepository = require('./CardRepository');
const utils = require('./utils');

const db = new NeDBDataStore({ filename: 'kanbanDb.json', autoload: true });
const cardRepository = new CardRepository.default(db);
const server = restify.createServer();

server.use(restify.CORS());
server.use(restify.bodyParser());

server.get('/cards', (req, res, next) => {
  cardRepository
        .findAll()
        .then(utils.sendResponse(res, next))
        .catch(utils.sendError);
});

server.post('/cards/:cardId/tasks', (req, res, next) => {
  const cardId = Number(req.params.cardId);
  const newTask = JSON.parse(req.body);
  cardRepository
        .addTask(cardId, newTask)
        .then(utils.sendResponse(res, next))
        .catch(utils.sendError);
});

server.del('/cards/:cardId/tasks/:taskId', (req, res, next) => {
  const cardId = Number(req.params.cardId);
  const taskId = Number(req.params.taskId);
  cardRepository
        .deleteTask(cardId, taskId)
        .then(utils.sendResponse(res, next))
        .catch(utils.sendError);
});

server.put('/cards/:cardId/tasks/:taskId', (req, res, next) => {
  const cardId = Number(req.params.cardId);
  const taskId = Number(req.params.taskId);
  const status = Boolean(JSON.parse(req.body).done);
  cardRepository
        .updateTaskStatus(cardId, taskId, status)
        .then(utils.sendResponse(res, next))
        .catch(utils.sendError);
});

server.put('/cards/:cardId', (req, res, next) => {
  const cardId = Number(req.params.cardId);
  const card = JSON.parse(req.body);
  cardRepository
        .updateCard(cardId, card)
        .then(utils.sendResponse(res, next))
        .catch(utils.sendError);
});

server.post('/cards', (req, res, next) => {
  const card = JSON.parse(req.body);
  cardRepository
        .addCard(card)
        .then(utils.sendResponse(res, next))
        .catch(utils.sendError);
});

server.listen(3000, () => {
  console.log(`${server.name} listening at ${server.url}`);
});
