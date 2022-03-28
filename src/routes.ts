import { Express, Request, Response } from "express";
import { create } from "lodash";
import { createUserHandler, getUserHandler, getSingleUserHandler, deleteSingleUserHandler } from "./controller/user.controller";
import validateResource from "./middleware/validateResource"
import { createUserSchema } from "./schema/user.schema";
import {createEventHandler} from "./controller/event.controller"

function routes(app: Express){

    // ------------------- All User Routes ----------------------------------------

    // Get All Users
    app.get('/api/users',  getUserHandler)

    // Get Single User Using Email As Param
    app.get('/api/users/:email',  getSingleUserHandler)

    // Delete Single User Using Email As Param
    app.delete('/api/users/:email',  deleteSingleUserHandler)

    //Create New User
    app.post('/api/users', validateResource(createUserSchema), createUserHandler)

    //----------------------- All Event Routes -----------------------------------

    // Trigger Events
    app.post('/api/events',  createEventHandler)
}

export default routes;