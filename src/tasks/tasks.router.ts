import { taskController } from './tasks.controller';
import { Router } from 'express';
import { createValidator, updateValidator } from './tasks.validator';

export const taskRouter: Router = Router();

taskRouter.get(
    '/tasks',
    taskController.getAll
); // create default route

taskRouter.post(
    '/tasks',
    createValidator,
    taskController.create,
);

taskRouter.put(
    '/tasks',
    updateValidator,
    taskController.update,
);