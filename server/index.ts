import express, { Application } from 'express';
import http from 'http';
import serverConfig from './serverConfig';
import connectDB from './mongoDBConfig';
import expressConfig from './expressConfig';


const app: Application = express();
const server = http.createServer(app);

expressConfig(app);

//connecting mongodb
connectDB();

serverConfig(server).startServer();
