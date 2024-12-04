import {useFindProjectDataByID}  from './hooks/useFindProjectDataByID';
import styles from './single-project.module.scss'

import { WorkspacesData } from '../../../../../../NEW_MOCK_DATA'

async function SingleProjectPage({params}: {params: Promise<{projectId: string}>}) {
    const projectId = (await params).projectId

    const projectData = useFindProjectDataByID({data: WorkspacesData, projectId})

    return (
        <div className={styles.single_project_page}>
            PAGE for project {projectData?.project_name}
            <h2>{'hhh'}</h2>
        </div>
    )
}

export default SingleProjectPage;