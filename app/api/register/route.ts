import { NextResponse, NextRequest } from "next/server"
const bcrypt = require('bcryptjs')
import prisma  from "../../../prisma/prisma";


export async function POST(request: NextRequest) {
  try {
    const { name, email, password, image, provider } = await request.json()
    //check if the user already exists in the MongoDB
      const user = await prisma.user.findFirst({where: { email }}) 
      
      if (user && provider === 'credentials') {
        const passwordsMatch = await bcrypt.compare(password, user.password)
        // if User was authenticated and stored on MongoDB earlier
        if(passwordsMatch) {
          return NextResponse.json({
            message: `User with this email ( ${email} ) already exists in the MongoDB` },
            { status: 201 });
        }
        if(!passwordsMatch) {
          return NextResponse.json({
            error: `Not correct password for ${email} account`},
            { status: 501 });
        }
      }
      if (user && provider === 'google') {
        return NextResponse.json({
          message: `User with this email ( ${email} ) already exists in the MongoDB` },
          { status: 201 });
      }
      // create a fully new User
      if(!user) {
        const hashedPassword = await bcrypt.hash(password, 10)
        await prisma.user.create({data: { 
          username: name, 
          email, 
          password: provider === 'google' ? 'password' : hashedPassword,
          image, 
          provider,
          // created: Number(new Date())
        }});
        return NextResponse.json({
          message: `New User ${ name ? name : email } Created Successfully` },
          { status: 201 });
      }
  } catch (error) {
    return NextResponse.json({ 
      error, 
      message: "Server Error: Something went wrong in time Register route" },
      { status: 500 });
  }
}
