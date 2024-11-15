import type { IProjectType } from '@/types/workspaces.types'
import styles from './single-project.module.scss'

import { WorkspacesData } from '../../../../../../NEW_MOCK_DATA'

async function SingleProjectPage({params}: {params: Promise<{projectId: string}>}) {
    const projectId = (await params).projectId

    // const newData = WorkspacesData.filter((workspace) => {
    //         return workspace.projects_list.filter((project) => {
    //         project.project_id === projectId
    //     })
    // })

    // console.log("newData: ====> ", newData);
    const filteringProjectData = () => {
        let result = {} as IProjectType
        const  raw = WorkspacesData.map(workspace => workspace).forEach((project) => {
            return project.projects_list.filter(item => item.project_id === projectId )
        })
        console.log(raw);
        return result
    }
    console.log(filteringProjectData());


    // let projectData = WorkspacesData.flat().map((ws) => ws.projects_list.filter((project) => project.project_id === projectId))
    // console.log(projectData);

    return (
        <div className={styles.single_project_page}>
            PAGE {projectId}
            <h2>{'hhh'}</h2>
        </div>
    )
}

export default SingleProjectPage;