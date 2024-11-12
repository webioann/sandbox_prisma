// types for My Tasks page ====
// type statusHighlightColorsTypes = ''
export type StatusesType = 
    |'Backlog'
    |'Todo'
    |'In Review'
    |'In Progress'
    |'Done'
type statusesListType = {
    status: StatusesType
    statusHighlightColor: string
}
export const taskStatusesList: Array<statusesListType> = [
    {status: 'Backlog', statusHighlightColor: '#F672B2'},
    {status: 'Todo', statusHighlightColor: '#F57174'},
    {status: 'In Review', statusHighlightColor: '#64A3F6'},
    {status: 'In Progress', statusHighlightColor: '#F7CE1B'},
    {status: 'Done', statusHighlightColor: '#34CB97'},
];

export type dueDateStatusColors = Readonly<'#34CB97' | '#F7CE1B' | '#F57174'>
// function for transforming Dates in readable format and highlighting a critical period
export type createAndHighlightDueDateType = 
    (
        dueDate: number, 
        criticalPeriod: number
    ) => 
    {
        dueDateInReadableFormat: string,
        criticalityColor: dueDateStatusColors
    }
// one single task object type
export interface ITaskType {
    task_id: string
    task_description: string
    task_checked: boolean
    assigned_person: string
    status: StatusesType
    due_date: number
    task_created_at: number
}
export interface IProjectType {
    project_id: string
    project_name: string
    project_tasks_list: Array<ITaskType>
    project_due_date: number
    project_created_at: number
}
export type ProjectsDataType = Array<IProjectType>
