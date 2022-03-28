/*
    Event Controller 
    Handles [ Creation]
    And calls the appropriate Service for each operation
*/
import { Request, Response } from "express";
import logger from "../utils/logger";
import { CreateEventInput } from "../schema/event.schema"; //Importing Event Schema
import { handleEvent } from "../service/event.service"; //Importing Services Responsible for handling event

export async function createEventHandler(
  req: Request<CreateEventInput["body"]>,
  res: Response
) {
  try {
    let _id = req.body.user.id;
    let update = {
      consents: req.body.consents.map(
        (value: any, index: number, array: any) => {
            //Validate Input to make sure the correct consent id was used
            
          if (
            value.id == "email_notifications" ||
            value.id == "sms_notifications"
          ) {
            return {
                id: value.id,
                enabled: value.enabled,
              };
          } else{
            return res.status(409).send("Please use a valid consent ID");
          }

          
        }
      ),
    };

    const event = await handleEvent({ _id }, update, { new: true });
    return res.send(event);
  } catch (error: any) {
    logger.error(error);
    return res.status(409).send(error.message);
  }
}
