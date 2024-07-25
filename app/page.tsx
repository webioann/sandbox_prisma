import Todo from "./components/Todo"
import AddTodoInput from "./components/AddTodoInput";
import type { TodoType } from "@/types/todo.types";
import './global.css'

interface IResponseData {
  data: TodoType[],
  status: number
}

export default async function Home() {

  async function fetchTodo() {
    const res = await fetch('http://localhost:3000/api/todos')
    // The return value is *not* serialized http://localhost:3000/api/create
    // You can return Date, Map, Set, etc.
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    const todos: Promise<IResponseData> = res.json()
    return todos
  }

  const todos = await fetchTodo()
  console.log('DATA ===> ', todos.data)

  return (
    <main className="main">
      <section className="container">
        <h1>HOME PAGE</h1>
        <AddTodoInput/>
        <ul className="todo-list">
          { todos.data.map((todo) => <Todo 
            title={todo.title}
            isCompleted={todo.isCompleted}
            createdAt={todo.createdAt}
            id={todo.id}
            key={todo.id}
            />) }
          

        </ul>
      </section>
    </main>
  );
}
