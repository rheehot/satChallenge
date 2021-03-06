import routes from '../routes.js';
import express from 'express';
import { getAllChallenges } from '../controller/challengeController.js';
import { onlyPublic, onlyPrivate } from '../middlewares.js';
import { postJoin, postLogin, getLogout, getMe } from '../controller/userController.js';

const globalRouter = express.Router();

// [post] api/join
globalRouter.post(routes.join, /*onlyPublic,*/ postJoin);

// [post] api/login
globalRouter.post(routes.login, /*onlyPublic,*/ postLogin);




export default globalRouter;