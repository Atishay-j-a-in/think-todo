import { Trash2 } from "lucide-react";

export default function TodoItem({
  todo,
  onToggle,
  onDelete,
}) {
  return (
    <div
      

      className={`
        flex items-center gap-3
        rounded-xl
        border-2 border-[#8B5E34]
        bg-[#FFF8E8]
        px-4 py-3
        ${todo.completed ? "opacity-50" : ""}
      `}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo._id)}
      />

      <span
        className={`flex-1 ${
          todo.completed
            ? "line-through text-neutral-500"
            : ""
        }`}
      >
        {todo.text}
      </span>
      <button
        onClick={() => onDelete(todo._id)}
        className="
          rounded-lg
          p-2
          text-red-600
          transition
          hover:bg-red-100
        "
        aria-label="Delete todo"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}