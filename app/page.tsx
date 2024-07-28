import Todo from "../components/Todo"
import AddTodoInput from "../components/AddTodoInput";
import type { TodoType } from "@/types/todo.types";
import './global.css'
import Link from "next/link";

interface IResponseData {
  data: TodoType[],
  status: number
}
export const revalidate = 60
export default async function Home() {

  async function fetchTodo() {
    const res = await fetch('http://localhost:3000/api/todos')
    if (!res.ok) { throw new Error('Failed to fetch data') }
    const todos: Promise<IResponseData> = res.json()
    return todos
  }

  const todos = await fetchTodo()

  return (
    <main className="main">
      <section className="container">
        <Link href='/register' className="link-btn">Signin</Link>
        <h1>HOME PAGE</h1>
        <AddTodoInput/>
        <ul className="todo-list">
          { todos.data.map((todo) => <Todo data={todo} key={todo.id}/>) }
        </ul>
      </section>
    </main>
  );
}
