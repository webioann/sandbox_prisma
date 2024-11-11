import React from 'react'
import styles from './single-project.module.scss'

async function SingleProjectPage({params}: {params: Promise<{projectId: string}>}) {
    const projectId = (await params).projectId
    return (
        <div className={styles.single_project_page}>
            PAGE {projectId}
        </div>
    )
}

export default SingleProjectPage;