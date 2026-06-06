export default function TodoInput({
  value,
  onChange,
  onAdd,
}) {
  return (
    <div className="flex gap-3">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1 rounded-xl border-2 border-[#8B5E34] bg-[#FFF8E8] px-4 py-3 outline-none"
      />

      <button
        onClick={onAdd}
        className="rounded-xl border-2 border-[#8B5E34] bg-[#F59E0B] px-5 py-3 font-bold"
      >
        Add
      </button>
    </div>
  );
}