import React from 'react'

const ContainerMain = ({ children }: { children: React.ReactNode}) => {
    
    return (
        <div style={{
            width: '100%',
            height: '100%',
            minHeight: '100vh',
            position: 'relative',
            display: 'grid',
            alignItems: 'start',
        }}>
            { children }
        </div>
    )
}

export default ContainerMain;