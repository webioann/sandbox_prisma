import React from 'react'
import BadgeWithSingleSymbol from '../BadgeWithSingleSymbol/BadgeWithSingleSymbol'
import styles from './person-board.module.scss'

function PersonBoard() {
    
    return (
        <div className={styles.person_cell}>
            <div className={styles.badge}>
                <BadgeWithSingleSymbol variant='circle_big' symbol='antonio'/>
            </div>
            <h3 className={styles.person_name}>
                Antonio
            </h3>
            <p className={styles.person_email}>antonio@gmail.com</p>
        </div>
    )
}

export default PersonBoard;