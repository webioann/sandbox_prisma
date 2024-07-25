const prisma = require('../prisma/prisma.client')

export default function Home() {

  const todo = async() => {
    await prisma.todo.create({
      data: {
        title: 'hello world',
        isComplited: false
      }
    })
  }

  return (
    <main>
      <h1>HOME PAGE</h1>
      <button onClick={todo}>CLICK ME</button>
    </main>
  );
}
