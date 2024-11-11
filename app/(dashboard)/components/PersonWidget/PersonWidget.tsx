import React from 'react'
import BadgeWithSingleSymbol from '@/components/BadgeWithSingleSymbol/BadgeWithSingleSymbol'
import styles from './person-widget.module.scss'

function PersonWidget() {
    
    return (
        <div className={styles.person_widget}>
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

export default PersonWidget;