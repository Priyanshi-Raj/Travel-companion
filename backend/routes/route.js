import express from 'express';
import { userSignUp, userLogin,ownerLogin,ownerSignUp } from '../controller/user-controller.js';
import { getPost, createPost } from '../controller/posts.js';

const router= express.Router();
router.post('/signup/user',userSignUp);
router.post('/login/user',userLogin);
router.post('/signup/owner',ownerSignUp);
router.post('/login/owner',ownerLogin);
router.post('/localposts', createPost);
export default router;