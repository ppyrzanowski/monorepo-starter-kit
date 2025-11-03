import { eq } from "drizzle-orm";
import { db } from "../db.js";
import { user } from "../schemas/auth.js";

export const updateUserInformationByUserId = async ( userId: string, data: { name?: string, image?: string } ) => {
	await db
		.update(user)
		.set({
			name: data.name,
			image: data.image
		})
		.where(eq(user.id, userId));
}
