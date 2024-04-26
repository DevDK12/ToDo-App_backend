import express from 'express';
import CatchAsync from '../error/catchAsync.js';





const router = express.Router();


router.use('/create-data', CatchAsync(async (req, res, next) => {



})
);



export default router;