import { db } from "@/drizzle/db";
import { users } from "@/drizzle/schema"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import { randomUUID } from "node:crypto";

export async function GET() {
    // check if user exists
    const { getUser, getOrganization } = getKindeServerSession();
    const user = await getUser();
    const org = await getOrganization();

    console.log(user);

    if (!user || user == null || !user.id) {
        throw new Error("something went wrong with authentication" + user);

        //const dbUser = db.select().from(users).where(eq(users.id, user.id)).get();
        const dbUser = await db.select().from(users).where(eq(users.id, user.id));

        if (!dbUser) {
            //     db.insert(users)
            //         .values({
            //             id: user.id,
            //             firstName: user.given_name,
            //             lastName: user.given_name,
            //             email: user.email
            //         })
            //         .run();

            // o
            await db.insert(users).values({
                firstName: user.given_name,
                lastName: user.family_name,
                email: user.email,
            });
        }
    }
    return NextResponse.redirect("http://localhost:3000/");
}