import { Router } from 'express'
import { getTodos } from '../controllers/todos';

const router = Router();

router.get('/', getTodos);

export default router;

