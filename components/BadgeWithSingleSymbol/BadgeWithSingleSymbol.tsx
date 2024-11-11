import React from 'react'
import styles from './badge.module.scss'

type badgeProps = {
    variant: 'circle' | 'cube' | 'cube_big' | 'cube_grey' | 'circle_big'
    symbol: string
}

function BadgeWithSingleSymbol({ variant, symbol }: badgeProps) {
    return (
        <span className={`${styles[variant]}`}>
            { !symbol ? 'A' : symbol[0].toUpperCase() }
        </span>
    )
}

export default BadgeWithSingleSymbol;