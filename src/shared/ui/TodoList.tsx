import { useState } from "react";
import { Input } from "./Input";
import { Todo } from "./Todo";
import { TodoFooter } from "./TodoFooter";

interface Todo {
  id: number;
  content: string;
  checked: boolean;
}

export function TodoList() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setTodos((prev) => [
        ...prev,
        {
          id: Math.random(),
          content: text,
          checked: false,
        },
      ]);
      setText("");
    }
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-[#b83f45] dark:text-cyan-500 text-[80px] text-center my-[40px] font-extralight hover:text-cyan-500">
        todos
      </h1>
      <div className="flex relative">
        <div className="absolute top-[20px] left-[20px]"></div>
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyUp={handleKeyUp}
        />
      </div>
      <ul className="bg-white dark:bg-slate-600 shadow-2xl border-t border-[#e6e6e6] text-2xl text-[#484848] dark:text-[#e6e6e6] font-extralight">
        {todos.map((todo) => (
          <Todo key={todo.id} content={todo.content} checked={todo.checked} />
        ))}
      </ul>
      <TodoFooter />
    </div>
  );
}
