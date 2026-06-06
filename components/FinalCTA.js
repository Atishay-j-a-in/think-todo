import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-10 rounded-[36px] border-2 border-[#3d3124] bg-[#d88c24] p-12 lg:flex-row">
          <div>
            <h2 className="max-w-xl text-5xl font-bold leading-tight">
              Ready to get more done,
              every day?
            </h2>

            <p className="mt-4 text-lg">
              Join thousands of users who trust
              ThinkToDo to organize their lives.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Link href="/sign-up">
            <button className="rounded-2xl bg-[#2f635d] px-10 py-5 text-lg font-semibold text-white">
              Start Free Today</button>
            </Link>

            <span>
              No credit card required.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}