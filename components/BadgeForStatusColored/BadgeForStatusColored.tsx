import React from 'react'
import { taskStatusesList } from '../../types/tasks.types'
import styles from './colored-badge.module.scss'

type badgeProps = { status: string }

function BadgeForStatusColored({status}:badgeProps) {

    const setBadgeColor = (key: string) => {
        let finding = taskStatusesList.find((obj) => obj.status === status )
        return finding?.statusHighlightColor
    }

    return (
        <div className={styles.task_status}>
            <p  style={{backgroundColor: setBadgeColor(status)}}
                className={styles.colored_status}>
                {status}
            </p>
        </div>
    )
}

export default BadgeForStatusColored;