import React from 'react'

const Container = ({ width, children }: { children: React.ReactNode; width: number }) => {
    
    return (
        <div style={{
            width: '100%',
            maxWidth: `${width}px`,
            marginLeft: 'auto',
            marginRight: 'auto',
            height: '100%',
            position: 'relative',
            padding: '0 1rem',
            display: 'flex'
        }}>
            { children }
        </div>
    )
}

export default Container;