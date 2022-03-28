import { boolean, object,string, array, TypeOf } from "zod"

export const createEventSchema = object({
    body: object({
        user: object({
            id: string({
                required_error: "user id is required"
            })
        }),

        consents: object({
            id: string({
                required_error: "consent id is required"
            }),

            enabled: boolean({
                required_error: "consent value is required"
            })
        })
    })
})

export type CreateEventInput = TypeOf<typeof createEventSchema>