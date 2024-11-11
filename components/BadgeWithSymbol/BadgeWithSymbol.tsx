import React from 'react'
import styles from './badge.module.scss'

type badgeProps = {
    variant: 'circle' | 'cube' | 'big-cube'
    symbol: string
}

function BadgeWithSymbol({ variant, symbol }: badgeProps) {
    let protectedSymbol = !symbol ? 'A' : symbol
    if(variant === 'big-cube')     
        return (
        <div className={styles.big_cube}>
            {protectedSymbol[0].toUpperCase()}
        </div>
    )
    if(variant === 'cube')     
        return (
        <div className={styles.cube}>
            {protectedSymbol[0].toUpperCase()}
        </div>
    )
    if(variant === 'circle')     
        return (
        <div className={styles.circle}>
            {protectedSymbol[0].toUpperCase()}
        </div>
    )
}

export default BadgeWithSymbol;