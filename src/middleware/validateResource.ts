/*
    Middleware to Validate incoming Requests 
*/

import { Request, Response, NextFunction } from "express"
import {AnyZodObject} from 'zod'

const validate = (schema: AnyZodObject) =>(req: Request, res: Response, next: NextFunction) =>{

    try {
        schema.parse({
            body: req.body,
            query: req.params,
            params: req.params
        });
        next();
    } catch (e: any) {
        return res.status(400).send(e.errors);
    }

}

export default validate;