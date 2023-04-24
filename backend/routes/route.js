import express from 'express';
import { userSignUp, userLogin,ownerLogin,ownerSignUp } from '../controller/user-controller.js';
import { getPost, createPost } from '../controller/posts.js';
import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';
const router= express.Router();
router.post('/signup/user',userSignUp);
router.post('/login/user',userLogin);
router.post('/signup/owner',ownerSignUp);
router.post('/login/owner',ownerLogin);
router.post('/localposts', createPost);
router.get('/getPosts', getPosts);
router.post('/createPost', createPost);
router.get('/getPosts:id', getPost);
router.patch('/getPosts:id', updatePost);
router.delete('/getPosts:id', deletePost);
router.post("/recommend", )
// router.patch('/getPosts:id/likePost', likePost);
export default router;