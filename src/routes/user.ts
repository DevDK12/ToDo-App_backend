import express from 'express';

import {getUser} from '../controllers/user.js';
import { auth } from '../middlewares/auth.js';




const router = express.Router();



router.route('/:userId').get(auth, getUser)





export default router;
