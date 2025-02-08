import { db } from "@/drizzle/db";
import { users } from "@/drizzle/schema"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET() {
    // get currently logged in user
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    console.log(user);

    // check if user exists and contains valid email
    if (!user || !user.email) {
        throw new Error("something went wrong with authentication" + user);
    }

    // get the same user from database using email .(email is the only unique property that is common between kinde user and db user)
    const dbUser = await db.select().from(users).where(eq(users.email, user.email));

    // if user doesnt exist in database , create an entry.
    if (!dbUser) {
        // check if user given my kinde has valid email , first name and last name
        if(!user.email || !user.given_name||!user.family_name){
            throw new Error("invalid user data!");
        }
        await db.insert(users).values({
            firstName:user.given_name,
            lastName:user.family_name,
           email:user.email,
        });
    }

    return NextResponse.redirect("http://localhost:3000/");
}