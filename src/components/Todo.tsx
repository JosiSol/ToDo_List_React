import React, { useEffect, useRef, useState } from "react";
import List from "./List";

interface Props {
  id: number;
  text: string;
  status: boolean;
}

const Todo = () => {
  const [todoList, setTodoList] = useState<Props[]>([]);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const add = () => {
    const x: HTMLInputElement | null = inputRef.current;
    const inputText = x?.value.trim() || "";

    if (inputText === "") {
      alert("Write Something");
      return null;
    }
    const newTodo: Props = {
      id: Date.now(),
      text: inputText,
      status: false,
    };
    setTodoList((prev: Props[]) => [...prev, newTodo]);
    if (x) {
      x.value = "";
    }
  };

  const del = (id: number) => {
    setTodoList((prev: Props[]) => {
      return prev.filter((todo) => todo.id !== id);
    });
  };

  const toggle = (id: number) => {
    setTodoList((prev: Props[]) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, status: !todo.status };
        }
        return todo;
      });
    });
  };

  const edit = (id: number) => {
    const x: HTMLInputElement | null = inputRef.current;
    const inputText = x?.value.trim() || "";
    const p = prompt("Edit your task:", inputText);
    if (p) {
      setTodoList((prev: Props[]) => {
        return prev.map((todo) => {
          if (todo.id === id) {
            return { ...todo, text: p.trim() };
          }
          return todo;
        });
      });
    }
  };

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    add();
  };

  return (
    <div className="w-full flex justify-center items-center min-h-screen">
      <div className="w-full max-w-[540px] bg-white px-8 pb-16 pt-8 mb-40 rounded-[10px] shadow-lg">
        <h1 className="text-2xl font-bold text-[#540808] flex items-center mb-6">
          To-Do List 📋
        </h1>

        <div className="flex items-center justify-between bg-gray-100 rounded-full pl-5 h-12 mb-4">
          <form className="flex w-full" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              type="text"
              placeholder="Add Event"
              className="flex-1 bg-transparent border-none outline-none text-sm text-gray-700 placeholder:text-gray-400"
            />
            <button
              type="submit"
              className="bg-[#305CDE] hover:bg-[#244ec0] text-white font-medium px-12 h-12 rounded-full"
            >
              Add
            </button>
          </form>
        </div>
        {todoList.map((item, index) => {
          return (
            <List
              key={index}
              text={item.text || ""}
              id={item.id}
              status={item.status}
              del={() => del(item.id)}
              toggle={() => toggle(item.id)}
              edit={() => edit(item.id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
