import React from 'react'
import BadgeWithSymbol from '../BadgeWithSymbol/BadgeWithSymbol'
import styles from './project-board.module.scss'

function ProjectBoard() {
    let name = 'Mobile App Development'
    return (
        <div className={styles.project_board}>
            <BadgeWithSymbol variant='big-cube' symbol={name}/>
            <p className={styles.project_name}>{name}</p>
        </div>
    )
}

export default ProjectBoard