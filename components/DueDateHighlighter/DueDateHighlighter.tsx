import React from 'react'
import type { dueDateStatusColors, createAndHighlightDueDateType } from '../../types/tasks.types'

import styles from './date-highlighter.module.scss'

type dateHighlighterProps = {
    dueDate: number
}


function DueDateHighlighter({dueDate}: dateHighlighterProps) {

        // const dueDateDay = new Date(2024, 10, 14).valueOf()

        const createAndHighlightDueDate: createAndHighlightDueDateType = (dueDate: number, criticalPeriod: number) => {
            const currentDate = Date.now();
            const month = ["January","February","March","April","May","June","July",
                "August","September","October","November","December"];
            const oneDay = 86400000;
            // create readable date ---
            let dueDateInReadbleFormat: string = '';
            let dueDateYear = new Date(dueDate).getFullYear()
            let dueDateMonth = new Date(dueDate).getMonth()
            let dueDateDay = new Date(dueDate).getDate()
            dueDateInReadbleFormat= `${month[dueDateMonth]} ${dueDateDay}th, ${dueDateYear}`
            // highlight critical period ---
            let criticalityColor: dueDateStatusColors = '#34CB97'
            let daysByDutDate = Math.ceil(( dueDate - currentDate ) / oneDay) 
            if(daysByDutDate >= criticalPeriod + 2) criticalityColor = '#34CB97'
            if(daysByDutDate < criticalPeriod + 2 && daysByDutDate > 2) criticalityColor = '#F7CE1B'
            if(daysByDutDate <= 2) criticalityColor = '#F57174'
    
            return { dueDateInReadbleFormat, criticalityColor }
        } 
        let { dueDateInReadbleFormat, criticalityColor } = createAndHighlightDueDate(dueDate, 3)
        // console.log(dueDateDay);
        // console.log(criticalityColor);
    
    return (
        <div className={styles.due_date}>
            <p 
                className={styles.date}
                style={{color: criticalityColor}}
                >
                { dueDateInReadbleFormat }</p>
        </div>    
    )
}

export default DueDateHighlighter;