import Image from "next/image";
import { Bree_Serif } from "next/font/google";
import Link from "next/link";


const bree = Bree_Serif({
  subsets: ["latin"],
  weight: "400",
});

const stats = [
  {
    value: "50K+",
    label: "Tasks Completed",
    color: "text-[#D86A1E]",
  },
  {
    value: "10K+",
    label: "Users",
    color: "text-[#2F6A65]",
  },
  {
    value: "99.9%",
    label: "Uptime",
    color: "text-[#7B731F]",
  },
];

export default function HeroSection() {
  return (
    <section className=" px-4 py-8">
      <div className=" relative max-w-7xl h-220 overflow-hidden rounded-[38px] border-2 border-[#3D3124] bg-[#f8cd78]">
        <Image
        src="/heroBg.png"
        alt="ThinkToDo dashboard illustration"
        width={1250}
        height={1100}
  
        className="h-full absolute top-0 "
        />
        <div className="grid items-center lg:grid-cols-2">
            
          {/* LEFT CONTENT */}
          <div className="px-8 py-14 lg:px-16 lg:py-20">

            <h1
              className={`${bree.className} text-[4.5rem] leading-[0.9] text-[#2C1B10] lg:text-[7rem]`}
            >
              Turn
              <br />
              Thoughts
              <br />
              Into
              <br />
              <span className="text-[#D86A1E]">
                Action.
              </span>
            </h1>

            <p className="mt-8 max-w-md text-lg leading-relaxed text-black/80">
              Capture ideas instantly, organize tasks effortlessly,
              and focus on what truly matters.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/sign-up">
              <button
                className="
                  rounded-2xl
                  bg-[#D86A1E]
                  px-8
                  py-4
                  w-full
                  font-semibold
                  text-white
                  transition-all
                  hover:-translate-y-1
                "
              >
                Start Free
              </button>
              </Link>

              

            </div>

            {/* STATS */}
            <div className="mt-14 grid grid-cols-3 gap-6 border-t border-[#3D3124]/20 ">

              {stats.map((stat) => (
                <div key={stat.label}>
                  <h6
                    className={`text-xl font-bold lg:text-4xl ${stat.color}`}
                  >
                    {stat.value}
                  </h6>

                  <p className="mt-1 text-sm text-black/75">
                    {stat.label}
                  </p>
                </div>
              ))}

            </div>

          </div>

          {/* RIGHT IMAGE */}
          


         

        </div>
      </div>
      
    </section>
  );
}