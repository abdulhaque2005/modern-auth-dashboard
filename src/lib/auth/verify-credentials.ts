import User from "@/models/user";
import connectToDatabase from "../db";

export async function verifyCredentials(credentials: Record<"email" | "password", string> | undefined) {
    await connectToDatabase();
    const user = await User.findOne({ email: credentials?.email })
    if (!user || user.password !== credentials?.password) {
        return null
    }
    return {
        id: user._id.toString(),
        name: user.name,
        email: user.email
    };
}