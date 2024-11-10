import React from 'react'
import styles from './badge-rounded.module.scss'

type badgeProps = { symbol: string }


function BadgeWithSymbolRounded({symbol}: badgeProps) {
    let protectedSymbol = !symbol ? 'A' : symbol
    return (
        <div className={styles.circle}>
            {protectedSymbol[0].toUpperCase()}
        </div>
    )
}

export default BadgeWithSymbolRounded;