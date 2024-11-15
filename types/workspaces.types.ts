import { ITaskType } from "./tasks.types"
export interface IProjectType {
    project_id: string
    project_name: string
    project_tasks_list: Array<ITaskType>
    project_due_date: number
    project_created_at: number
}
// export type WorkspaceType = Array<IProjectType>

export type WorkspaceType = {
    workspace_id: string
    projects_list: Array<IProjectType>
}
export type WorkspacesDataType = Array<WorkspaceType>


