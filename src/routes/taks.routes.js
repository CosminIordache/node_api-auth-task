import { Router } from 'express';
import { auth_requied } from '../middlewares/validate_token.js'
import { getTasks, getTask, deleteTask, craeteTask, updatetTask } from '../controllers/task.controller.js';
import { validateSchema } from '../middlewares/validator.middelware.js';
import { createTaskSchema } from '../schemas/task.schema.js';

const router = Router()

router.get('/tasks', auth_requied , getTasks );
router.get('/tasks/:id', auth_requied , getTask);
router.post('/tasks', auth_requied, validateSchema(createTaskSchema), craeteTask);
router.delete('/tasks/:id', auth_requied , deleteTask);
router.put('/tasks/:id', auth_requied , updatetTask);


export default router


