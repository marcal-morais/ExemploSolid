import { Router } from 'express';
import userRouter from './routes/UserRoutes';
import groupRouter from './routes/GroupRoutes';

const router = Router();

router.use(userRouter);
router.use(groupRouter);

export default router;
