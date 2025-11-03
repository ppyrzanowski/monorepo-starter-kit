/* LIBRARIES */
import { Request, Response } from "express"
/* APP */
import { userSchema } from "@monorepo/validator"
import {authentication} from "@monorepo/auth/server";
import { safeDbPromise, validatorDTO } from "@monorepo/validator"
import { updateUserInformationByUserId } from "@monorepo/database"

export const updateName = async ( req: Request, res: Response ) => {

  const auth = await authentication(req);
  const data = await validatorDTO(req, userSchema.updateName);

  await safeDbPromise(updateUserInformationByUserId(auth.user.id, { name: data.body.name } ));

  return res.status(200).json();
}
