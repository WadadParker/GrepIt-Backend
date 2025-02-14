import express from 'express';
import { createResult } from '../../controllers/results.controllers';
import { authVerify } from '../../middlewares/userAuth.middleware.js';

const resultRouter = express.Router();

resultRouter.post('/create',authVerify, createResult);

export default resultRouter;