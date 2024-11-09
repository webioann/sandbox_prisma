import React from 'react'
import styles from './person-board.module.scss'

function PersonBoard() {
    
    let name = 'a'
    let protectedSymbol = name === '' ? 'A' : name

    return (
        <div className={styles.person_cell}>
            <div className={styles.person_icon}>
                {protectedSymbol[0].toUpperCase()}
            </div>
            <h3 className={styles.person_name}>
                Antonio
            </h3>
            <p className={styles.person_email}>antonio@gmail.com</p>
        </div>
    )
}

export default PersonBoard;