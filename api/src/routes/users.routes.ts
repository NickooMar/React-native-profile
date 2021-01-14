import express from "express";
import passport from "../auth/passport";


import * as userCtrl from './users.controller';

const router = express();

router.post('/register', userCtrl.createUser);

router.post('/login', passport.authenticate("local"), userCtrl.loginUser);

router.get('/user', userCtrl.getUser);

router.get('/logout', userCtrl.logout);


export default router