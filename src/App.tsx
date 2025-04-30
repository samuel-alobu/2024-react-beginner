import { useState } from "react";
import TodoItems from "./components/TodoItems";
import { dummyData } from "./data/todos";
import AddTodoForm from "./components/AddTodoForm";

function App() {
  const [todos, setTodos] = useState(dummyData);
  function setTodoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  }
  return (
    <main className="py-10 bg-red-500 h-screen space-y-5">
      <h1 className="font-bold text-3xl text-center">Your Todos</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rouded-md p-5 space-y-6">
        <div className="space-y-2">
          <AddTodoForm
            onSubmit={function (title: string): void {
              throw new Error("Function not implemented.");
            }}
          />
          {todos.map((todo) => (
            <TodoItems
              key={todo.id}
              todo={todo}
              onCompletedChange={setTodoCompleted}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
