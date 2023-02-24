import { Router } from "express";
import {getUser, updateUserMetaData} from '../controllers/auth';

const router = Router();

router.get('/:id', getUser);

router.put('/:id', updateUserMetaData);

export = router;