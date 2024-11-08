import Todo from "../../components/Todos/Todo"
import AddTodoInput from "../../components/Todos/AddTodoInput";
import type { TodoType } from "@/types/todo.types";
import './todos.scss'
import Link from "next/link";

interface IResponseData {
    data: TodoType[],
    status: number
}

async function TodosPage() {
    async function fetchTodo() {
        const res = await fetch('http://localhost:3000/api/todos')
        if (!res.ok) { throw new Error('Failed to fetch data') }
        const todos: Promise<IResponseData> = res.json()
        return todos
    }
    
    const todos = await fetchTodo()
    
    return (
        <main className="todos-page">
            <section>
                <Link href='/' className="link-btn">Back to Home</Link>
                <h1>TODOs</h1>
                <AddTodoInput/>
                <ul className="todo-list">
                    { todos.data.map((todo) => <Todo data={todo} key={todo.id}/>) }
                </ul>
            </section>
        </main>
    )
}

export default TodosPage;