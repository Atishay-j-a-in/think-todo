import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <header className="py-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-[28px] border-2 border-[#3d3124] bg-[#fcdb9b] px-8 py-5">
        <Image
          src="/logo.png"
          alt="ThinkToDo"
          width={180}
          height={50}
          priority
        />

       
        <div className="flex gap-3">
          
          <Link href="/sign-in">
          <button className="rounded-xl bg-[#d96e1f] px-5 py-3 font-semibold text-white">
            Get Started
          </button>
          </Link>
        </div>
      </nav>
    </header>
  );
}