import express from 'express';

import { auth } from '../middlewares/auth.js';
import { deleteTask, getTasks, postNewTask, putUpdateTask } from '../controllers/task.js';




const router = express.Router();



router.route('/all').get(auth, getTasks)

router.route('/:taskId')
    .delete(auth, deleteTask)
    .put(auth, putUpdateTask)

router.post('/new', auth, postNewTask)





export default router;
