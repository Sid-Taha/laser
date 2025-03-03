"use server";

import { auth, currentUser } from "@clerk/nextjs/server";

export async function clerkGetUser() {
    const { userId } = await auth();
    const user = await currentUser();

    const userName = `${user?.firstName ?? ""} ${user?.lastName ?? ""}`.trim();
    const userEmail = user?.externalAccounts?.[0]?.emailAddress ?? "";
    const userImage = user?.imageUrl ?? "";

    return { userId, user, userName, userEmail, userImage };
}