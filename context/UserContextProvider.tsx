"use client";
import React, {  useState, createContext, useEffect} from 'react'

interface IUser {
    name: string | null
    email: string 
    user_id: string
    photoURL: string | null
}
const initialUser: IUser = {
    name: 'Antonio',
    email: 'antonio@gmail.com',
    user_id: 'i am super user',
    photoURL: null
}

export const UserContext = createContext<IUser | null>(null)

const UserContextProvider = ({ children }: {children: React.ReactNode}) => {

    const [user, setUser] = useState<IUser | null>(initialUser) 

    return (
        <UserContext.Provider value={ user }>
            { children }
        </UserContext.Provider>    )
}

export default UserContextProvider;

// import React, { useContext } from 'react'
// import { UserContext } from '@/context/UserContext'
// const { user } = useContext(UserContext)