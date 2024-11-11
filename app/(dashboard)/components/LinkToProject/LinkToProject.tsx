import React from 'react'
import BadgeWithSingleSymbol from '../../../../components/BadgeWithSingleSymbol/BadgeWithSingleSymbol'
import Link from 'next/link'
import styles from './link-to-project.module.scss'

function LinkToProject() {
    let name = 'Mobile App Development'
    return (
        <Link href={`/projects/${'this_project_ID'}`}>
            <div className={styles.project_link}>
                <BadgeWithSingleSymbol variant='cube_big' symbol={name}/>
            <p className={styles.project_name}>{name}</p>
            </div>
        </Link>
    )
}

export default LinkToProject