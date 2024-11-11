import React from 'react'

export default function TaskPagesLayout({
    children,
    }: {
        children: React.ReactNode
    }) {
    return ( <main> {children} </main> )
}
