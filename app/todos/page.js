"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import {UserButton} from "@clerk/nextjs";

import TodoBackground from "./components/TodoBackground";
import TodoInput from "./components/TodoInput";
import TodoSection from "./components/TodoSection";
import {updateTodo, getTodos, deleteTodo, createTodo } from "../../lib/todoApi"

export default function TodosPage() {
  const [text, setText] = useState("");

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchTodos() {
      try {
        const todos = await getTodos();
   
        setTodos((prevTodos) => [...prevTodos, ...todos]);
      } catch (error) {
        console.error("Failed to fetch todos");
      }
    }

   fetchTodos();
   
  }, []);

  useEffect(() => {
    console.log("Todos updated:", todos);
  }, [todos]);

  function addTodo() {
    if (!text.trim()) return;

    createTodo({text, completed: false}).then((id) => {
      setTodos((prev) => [
        {
          _id:id,
          text,
          completed: false,
        },
        ...prev,
      ]);
    });

    setText("");
  }
  function deleteTodoItem(id) {
    deleteTodo(id).then(() => {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    });
  }
  async function toggleTodo(id) {
    const todoToUpdate = todos.find((todo) => {
      console.log(todo._id, id);
      return todo._id === id;
    });
    console.log("Toggling todo:", todoToUpdate);
    if (!todoToUpdate) return;

    const updatedTodo = { ...todoToUpdate, completed: !todoToUpdate.completed };
   const update=await updateTodo(updatedTodo)
   console.log("Updated todo id:", update);
    setTodos((prev) =>
      prev.map((todo) => (todo._id === update ? { ...todo, completed: !todo.completed } : todo))
    );
     setText("");
  }
      

   
  



  const pendingTodos = useMemo(
    () => todos.filter((todo) => !todo.completed),
    [todos]
  );

  const completedTodos = useMemo(
    () => todos.filter((todo) => todo.completed),
    [todos]
  );

  return (
    <main className="relative min-h-screen overflow-hidden ">
      <TodoBackground />

      <div className="relative z-10 max-w-4xl px-6 py-6">
        <div className="rounded-3xl border-2 border-[#8B5E34] bg-[#fcdb9b]/90 p-8  space-y-10">
          <h1 className="text-5xl flex items-center justify-between font-bold text-[#5B3716]">
           <div className="flex items-center justify-center"><Image src="/favicon.png" alt="ThinkToDo Logo" width={50} height={50} />ThinkToDo</div>  <UserButton afterSignOutUrl="/" />
          </h1>

          <TodoInput
            value={text}
            onChange={setText}
            onAdd={addTodo}
          />

          <TodoSection
            title="Todo"
            todos={pendingTodos}
            onToggle={toggleTodo}
            onDelete={deleteTodoItem}
          />

          <TodoSection
            title="Completed"
            todos={completedTodos}
            onToggle={toggleTodo}
            onDelete={deleteTodoItem}
          />
        </div>
      </div>
    </main>
  );
}