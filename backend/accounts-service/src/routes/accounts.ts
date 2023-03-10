import { Router, Request, Response } from 'express';
import Joi from 'joi';

import {getAccounts, getAccount, addAccount, setAccount, loginAccount, logoutAccount} from '../controllers/accounts';

import {accountSchema, loginSchema} from '../models/account';

function validateSchema(schema : Joi.ObjectSchema<any>, req: Request, res: Response, next: any){
    const {error} = schema.validate(req.body);
    if(error == null) return next();

    const {details} = error;
    const message = details.map(item => item.message).join(',');

    console.log(message);
    res.status(422).end();
}

function validateAccount(req: Request, res: Response, next: any){
    return validateSchema(accountSchema, req, res, next);
}

function validateLogin(req: Request, res: Response, next: any){
    return validateSchema(loginSchema, req, res, next);
}

const router = Router();

router.get('/accounts/', getAccounts);

router.get('/accounts/:id', getAccount);

router.post('/accounts/', validateAccount, addAccount);

router.patch('/accounts/:id', validateAccount, setAccount);

router.post('/accounts/', validateAccount, addAccount);

router.post('/accounts/login', validateLogin, loginAccount);

router.post('/accounts/logout', logoutAccount);

export default router;