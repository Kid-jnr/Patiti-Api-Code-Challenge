import {DocumentDefinition} from "mongoose";
import UserModel, {UserDocument} from "../models/user.model";

export async function createUser(input: DocumentDefinition<Omit<UserDocument,'createdAt' | 'updatedAt' >>){

    try {
        return await UserModel.create(input);
    } catch (error: any) {
        throw new Error(error) 
    }
    
}

export async function getUsers(){
    try {
        return await UserModel.find();
    } catch (error: any) {
        throw new Error(error)
    }
}

export async function getSingleUser(input: DocumentDefinition <UserDocument>){
    try {
        return await UserModel.findOne(input);
    } catch (error: any) {
        throw new Error(error)
    }
}

export async function deleteSingleUser(input: DocumentDefinition <UserDocument>){
    try {
        return await UserModel.deleteOne(input);
    } catch (error: any) {
        throw new Error(error)
    }
}