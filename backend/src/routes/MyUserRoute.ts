import express from 'express';
import {
  createCurrentUser,
  getCurrentUser,
  updateCurrentUser,
} from '../controllers/MyUserController';
import { jwtCheck, jwtParse } from '../middlewares/auth';
import { validateMyUserRrequest } from '../middlewares/validation';

const router = express.Router();
// /api/my/user
router.post('/', jwtCheck, createCurrentUser);
//
//

router.put('/', jwtCheck, jwtParse, validateMyUserRrequest, updateCurrentUser);
router.get('/', jwtCheck, jwtParse, getCurrentUser);

export default router;
