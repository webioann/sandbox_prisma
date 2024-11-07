import React, { ReactNode } from 'react'

function Sidebar({children}:  Readonly<{ children: React.ReactNode }>) {
    return (
        <div>{children}</div>
    )
}

export default Sidebar;