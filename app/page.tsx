import Todo from "./components/Todo"
import AddTodoInput from "./components/AddTodoInput";
import './Styles/todo.css'
export default function Home() {

  return (
    <main className="main">
      <section className="container">
        <h1>HOME PAGE</h1>
        <AddTodoInput/>
        <ul className="todo-list">
          <Todo/>

        </ul>
      </section>
    </main>
  );
}
