import React from 'react'
import './badge.css'

type badgeProps = {
    variant: 'circle' | 'cube' | 'big-cube'
    symbol: string
}

function BadgeWithSymbol({ variant, symbol }: badgeProps) {
    return (
        <div className={variant}>
            {symbol[0].toUpperCase()}
        </div>
    )
}

export default BadgeWithSymbol