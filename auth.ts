import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import prisma  from "./prisma/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Google, 
        Credentials({
            credentials: {
                name: {label: 'Name', type: 'text', required: true},
                email: {label: 'Email', type: 'email', required: true},
                password: {label: 'Password', type: 'password', required: true},
            },
            authorize: async (credentials) => {
                let user = null
                // logic to salt and hash password
                // const pwHash = saltAndHashPassword(credentials.password)
                // logic to verify if the user exists
                // user = await getUserFromDb(credentials.email, pwHash)
                if (!user) {
                  // No user found, so this is their first attempt to login
                  // meaning this is also the place you could do registration
                    throw new Error("User not found.")
                }
                // return user object with their profile data
                return user
            },
        })
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.AUTH_SECRET as string,
    pages: { 
        signIn: '/register',
    }
})