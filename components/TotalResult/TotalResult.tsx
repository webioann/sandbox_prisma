import React from 'react'
import { BiSolidUpArrow } from "react-icons/bi"
import styles from './total-result.module.scss'

type resultProps = {
    total: number
    title: string
}

function TotalResult({total, title}: resultProps) {
    return (
        <div className={styles.result_box}>
            <div className={styles.top_board}>
                <p className={styles.title}>{title}</p>
                <BiSolidUpArrow size={14} color='green'/>
                <span className={styles.result}>{total}</span>
            </div>
            <h3 className={styles.main_result}>{total}</h3>
        </div>
    )
}

export default TotalResult;