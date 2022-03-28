/*
    User Controller
    Handles [ Creation, Delete, Find, FindAll]
    And calls the appropriate Service for each operation
*/

import { Request, Response } from "express";
import logger from '../utils/logger'
import { createUser , getUsers, getSingleUser, deleteSingleUser } from "../service/user.service";
import { CreateUserInput, FindUserInput, DeleteUserInput } from "../schema/user.schema";

export async function createUserHandler(req :Request<{}, {}, CreateUserInput["body"]>, res: Response){
    try {
        const user = await createUser(req.body);
        return res.send(user);
    } catch (error: any) {
        logger.error(error);
        return res.status(409).send(error.message);
    }

}

//Returns All users
export async function getUserHandler(req: Request, res: Response){

    try {
        const users = await getUsers();
        return res.send(users);
    } catch (error: any) {     
        logger.error(error);
        return res.status(500).send(error.message);
    }

}

//Returns a single user
export async function getSingleUserHandler(req: Request<FindUserInput["body"]>, res: Response){

    try {
        const user = await getSingleUser(req.body);
        return res.send(user);
    } catch (error: any) {     
        logger.error(error);
        return res.status(500).send(error.message);
    }

}

//Delete Single User
export async function deleteSingleUserHandler(req: Request<DeleteUserInput["body"]>, res: Response){

    try {
        const user = await deleteSingleUser(req.body);
        return res.send(user);
    } catch (error: any) {     
        logger.error(error);
        return res.status(500).send(error.message);
    }

}