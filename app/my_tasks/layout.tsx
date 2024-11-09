import React from 'react'
import TaskPageNavigation from '@/components/TaskPageNavigation/TaskPageNavigation'

export default function TaskPagesLayout({
    children,
    }: {
        children: React.ReactNode
    }) {
    return (
        <section style={{width: '100%', height: '100%', padding: '0 1rem'}}>
            <div style={{border: '1px solid #f4f4f4', borderRadius: '8px', padding: '0 1rem'}}>
                <TaskPageNavigation/>
                {children}
            </div>
        </section>
    )
}