import { auth } from 'express-oauth2-jwt-bearer';
import express = require('express');
import cors = require('cors');
import authRoutes = require('../routes/auth');

export default class Server{
    
    public app;
    public port;
    public authPath;

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.authPath = '/api/auth';

        this.middlewares();

        this.routes();

    }

    middlewares(){

        this.app.use(cors());

        this.app.use(express.json());

        this.app.use(express.static('public'));

    }

    routes(){

        this.app.use(this.authPath, authRoutes);

    }

    listen(){
        console.log('Listening on port:', this.port)
        this.app.listen(this.port);
    }
}
