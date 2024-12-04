import type { WorkspacesDataType } from "@/types/workspaces.types"

type props = {
    data: WorkspacesDataType
    projectId: string
}

export const useFindProjectDataByID = ({data, projectId}: props) => {
    let temp;
    const  raw = data.map(workspace => workspace).find((project) => {
        return project.projects_list.filter(item => item.project_id === projectId )
    })
    temp = raw?.projects_list.filter((obj) => obj.project_id === projectId)
    if(temp) return temp[0]
    else return null
}
