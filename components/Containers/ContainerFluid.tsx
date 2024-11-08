import React from 'react'

const ContainerFluid = ({ width, children }: { children: React.ReactNode; width: number }) => {
    
    return (
        <div style={{
            width: '100%',
            maxWidth: `${width}px`,
            marginLeft: 'auto',
            marginRight: 'auto',
            height: '100%',
            position: 'relative',
            display: 'flex',
        }}>
            { children }
        </div>
    )
}

export default ContainerFluid;