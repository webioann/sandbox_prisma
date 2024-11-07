import React, { ReactNode } from 'react'
import './sidebar.css'

function Sidebar({children}:  Readonly<{ children: React.ReactNode }>) {
    return (
        <aside className='sidebar'>{children}</aside>
    )
}

export default Sidebar;