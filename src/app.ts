import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv'; dotenv.config({ path: './.env' });
import morgan from 'morgan';
import cors from 'cors';

import globalError from './middlewares/globalError.js';

import authRouter from './routes/auth.js';
import userRouter from './routes/user.js';
import taskRouter from './routes/task.js';



const app = express();



app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.use(morgan("dev"));






app.use(cors());

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.json({
        status: 'success',
        message: 'Server is up',
    })
})

app.get('/api/v1', (req: Request, res: Response, next: NextFunction) => {
    res.json({
        status: 'success',
        message: 'API v1 working',
    })
})


app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(process.env.NODE_ENV === 'production' ? 'Production' : 'Development');
    next();
})





app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/task', taskRouter);





app.use('*', (req, res, next) => {
    res.status(404).json({
        status: 'fail',
        message: 'API not found',
    })
})


app.use(globalError);


export default app;