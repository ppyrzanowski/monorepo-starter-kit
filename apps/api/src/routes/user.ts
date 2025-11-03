/* EXPRESS */
import { Router } from 'express';
import type { Router as RouterType } from 'express';
import * as userController from '@/controller/user';

const router: RouterType = Router();

router.put('/user/update:name', userController.updateName );
    
export { router as userRouter }