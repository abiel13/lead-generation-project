import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[#060218] text-white flex-col w-screen flex">

      {/* BACKGROUND GLOW */}
      <div className="absolute w-[200px] h-[200px] md: w-[400px] md:h-[400px] bg-blue-500/30 blur-[140px] top-[-10%] left-[0%]" />
      <div className="absolute w-[200px] h-[200px] md: w-[400px] md:h-[400px] bg-cyan-400/30 blur-[140px] bottom-[10%] right-[0%]" />

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 md:px-4 py-6 relative z-10">
        <h1 className="text-xl font-bold">LeadFlow</h1>

        <div className="hidden md:flex gap-6 text-white/70">
          <a href="#">Features</a>
          <a href="#">How it works</a>
          <a href="#">Pricing</a>
        </div>

        <Link
          href="/sign-up"
          className="px-5 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 transition"
        >
          Get Started
        </Link>
      </nav>

      {/* HERO */}
      <section className="text-center px-6 mt-16 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto">
          Find Leads. <br />
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Send Personalized Emails.
          </span>{" "}
          Automatically.
        </h1>

        <p className="mt-6 text-white/60 max-w-xl mx-auto">
          Discover high-quality leads, select who matters, and launch
          AI-powered email campaigns in seconds — all in one place.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/sign-up"
            className="px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition font-medium"
          >
            Start for Free
          </Link>

          <button className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition">
            Watch Demo
          </button>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="mt-20 text-center text-white/40 text-sm">
        Trusted by developers & founders worldwide
      </section>

      {/* FEATURES */}
      <section className="mt-20 px-6 md:px-12 grid md:grid-cols-3 gap-6">

        {[
          {
            title: "Find Leads Instantly",
            desc: "Search and discover high-quality prospects tailored to your niche."
          },
          {
            title: "Select & Organize",
            desc: "Choose who you want to reach and manage your outreach effortlessly."
          },
          {
            title: "Automated Emails",
            desc: "Generate and send personalized emails powered by AI."
          }
        ].map((f, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
          >
            <h3 className="text-lg font-semibold">{f.title}</h3>
            <p className="text-white/60 mt-3 text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* PRODUCT PREVIEW */}
      <section className="mt-24 px-6 md:px-12 text-center">
        <h2 className="text-3xl font-bold">
          Built for speed and simplicity
        </h2>

        <p className="text-white/60 mt-4">
          Everything you need to run outreach campaigns — without complexity.
        </p>

        <div className="mt-10 rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-xl">
          <div className="h-[300px] rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-400/10 flex items-center justify-center text-white/40">
            Dashboard Preview (todo)
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 text-center px-6 pb-20">
        <h2 className="text-3xl md:text-4xl font-bold">
          Start closing more deals today
        </h2>

        <p className="text-white/60 mt-4">
          Join others using LeadFlow to automate their outreach.
        </p>

        <Link
          href="/auth"
          className="inline-block mt-6 px-8 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition"
        >
          Get Started Now
        </Link>
      </section>

    </main>
  );
}