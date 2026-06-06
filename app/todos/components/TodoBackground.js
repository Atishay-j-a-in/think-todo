import Image from "next/image";

export default function TodoBackground() {
  return (
    <div
  className="absolute inset-0 bg-no-repeat bg-cover bg-center"
  style={{
    backgroundImage: "url('/todos.png')",
  }}
/>
  );
}