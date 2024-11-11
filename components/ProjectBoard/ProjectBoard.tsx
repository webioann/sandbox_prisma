import React from 'react'
import BadgeWithSingleSymbol from '../BadgeWithSingleSymbol/BadgeWithSingleSymbol'
import styles from './project-board.module.scss'

function ProjectBoard() {
    let name = 'Mobile App Development'
    return (
        <div className={styles.project_board}>
            <BadgeWithSingleSymbol variant='cube_big' symbol={name}/>
            <p className={styles.project_name}>{name}</p>
        </div>
    )
}

export default ProjectBoard