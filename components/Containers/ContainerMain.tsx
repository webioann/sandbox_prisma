import React from 'react'

const ContainerMain = ({ children }: { children: React.ReactNode}) => {
    
    return (
        <main style={{
            width: '100%',
            height: '100%',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
        }}>
            { children }
        </main>
    )
}

export default ContainerMain;