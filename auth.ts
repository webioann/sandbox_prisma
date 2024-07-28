import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import prisma  from "./prisma/prisma"
// import bcrypt from "bcryptjs";
const bcrypt = require('bcryptjs')


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
                // let user = null
                const { name, email, password } = credentials
                try{
                    if( !email || !password) { throw new Error('Wrong email or password') }
                    const user = await prisma.user.findFirst({where: { email: email }}) 
                    if(user) {
                        const passwordsMatch = await bcrypt.compare(password, user.password)
                        if(passwordsMatch) {
                            const { password, ...userWithoutPassword } = user
                            console.log('USER_DOC --> ', user)
                            console.log('USER_WITHOUT_PASSWORD --> ', userWithoutPassword)
                            return userWithoutPassword
                        }
                        if(!passwordsMatch) { throw new Error('Not correct password') }
                    }
                    // if (!user) { throw new Error("User not found.") }
                    if(!user) {
                        const hashedPassword = bcrypt.hash(password, 10)
                        await prisma.user.create({data: {
                            username: 'Johny',
                            email: '',
                            password: hashedPassword,
                            image: 'EMPTY',
                            provider: 'credentials'
                        }})
                    }
                    return user
    
                }
                catch(error) {  throw new Error('Not found User on MongoDB')  }
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