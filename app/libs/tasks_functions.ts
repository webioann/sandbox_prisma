import type { WorkspacesDataType } from "@/types/workspaces.types"

type countFunctionType = (data: WorkspacesDataType) => number

export const projectsTotalCount: countFunctionType = (data: WorkspacesDataType) => {
    // return projects count from all workspaces
    return data.reduce((accum, item) =>{
        return accum + item.projects_list.length
    }, 0)
};

export const tasksTotalCount: countFunctionType = (data: WorkspacesDataType) => {
    // return full count of tasks in all workspaces
    return data.reduce((accum, item) =>{
        return accum + item.projects_list.reduce((accum, item) => {return accum + item.project_tasks_list.length}, 0) 
    }, 0)
};

export const taskCheckedCount: countFunctionType = (data: WorkspacesDataType) => {
    // return tasks count in which fields "task_checked" equal true
    return data.reduce((accum, workspace) =>{
        return accum + workspace.projects_list.reduce((accum, project) => 
            {return accum + project.project_tasks_list.filter((item) => 
                item.task_checked === true).length
            }, 0) 
    }, 0)
}
