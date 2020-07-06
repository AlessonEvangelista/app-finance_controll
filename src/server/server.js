import express from 'express';
import routes from './routes';
import path from 'path';

class App {
    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(express.json());
        this.server.use(express.urlencoded({ extended: false }));
        this.pages();
    }

    routes() {
        this.server.use(routes);
    }

    pages() {
        this.server.set('views', path.join(__dirname, '../pages'));
        this.server.set('view engine', 'ejs');
        this.server.engine('html', require('ejs').renderFile);
    }
}

export default new App().server;