import React from 'react'
import './sidebar-wrapper.css'

function SidebarWrapper({children}:  Readonly<{ children: React.ReactNode }>) {
    return (
        <aside className='sidebar'>{children}</aside>
    )
}

export default SidebarWrapper;