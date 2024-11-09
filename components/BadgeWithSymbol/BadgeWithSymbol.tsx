import React from 'react'
import './badge.css'

type badgeProps = {
    variant: 'circle' | 'cube' | 'big-cube'
    symbol: string
}

function BadgeWithSymbol({ variant, symbol }: badgeProps) {
    let protectedSymbol = !symbol ? 'A' : symbol
    return (
        <div className={variant}>
            {protectedSymbol[0].toUpperCase()}
        </div>
    )
}

export default BadgeWithSymbol;