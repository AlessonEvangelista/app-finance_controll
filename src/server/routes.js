import { Router } from 'express';
import IndexController from '../controller/IndexController';

const routes = new Router();

routes.get('/', IndexController.access);

export default routes;