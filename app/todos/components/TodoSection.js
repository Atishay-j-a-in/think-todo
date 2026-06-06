import TodoItem from "./TodoItem";

export default function TodoSection({
  title,
  todos,
  onToggle,
  onDelete,
}) {
  if (todos.length === 0) return null;

  return (
    <section className="space-y-4 ">
      <h2 className="text-3xl font-bold text-[#5B3716]">
        {title}
      </h2>

      <div className="space-y-3">
        {todos.map((todo) => (
          <TodoItem
            key={todo._id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </div>
    </section>
  );
}