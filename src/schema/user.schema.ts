import { object,string, TypeOf, any, array } from "zod"

export const createUserSchema = object({
    body: object({
        email: string({
            required_error: "Email is required"
        }).email( " Not a valid email"),

    })
})

export const findUserSchema = object({
    body: object({
        email: string({
            required_error: "Email is required"
        }).email( " Not a valid email"),

     
    })
})

export const deleteUserSchema = object({
    body: object({
        email: string({
            required_error: "Email is required"
        }).email( " Not a valid email"),

     
    })
})

export type CreateUserInput = TypeOf<typeof createUserSchema>
export type FindUserInput = TypeOf<typeof findUserSchema>
export type DeleteUserInput = TypeOf<typeof deleteUserSchema>