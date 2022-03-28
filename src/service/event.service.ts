import {FilterQuery,  QueryOptions, UpdateQuery} from "mongoose";
import UserModel, {UserDocument} from "../models/user.model";

export async function handleEvent(  
    query: FilterQuery<UserDocument>,
    update: UpdateQuery<UserDocument>,
    options: QueryOptions
    ){

    try {
        return await UserModel.findOneAndUpdate(query, update, options);
    } catch (error: any) {
        throw new Error(error) 
    }
    
}