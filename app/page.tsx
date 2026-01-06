export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="text-center max-w-xl px-6">
        <p className="text-sm uppercase tracking-widest text-slate-400 mb-4">
          🚧 Work in Progress
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Service Booking Platform
        </h1>

        <p className="text-slate-300 text-lg leading-relaxed mb-8">
          I’m currently building a full-stack service booking application where
          users can book services, businesses can manage appointments, and admins
          control the platform.
        </p>

        <div className="flex flex-wrap gap-3 justify-center text-sm">
          <span className="px-4 py-2 rounded-full bg-slate-700">
            Next.js
          </span>
          <span className="px-4 py-2 rounded-full bg-slate-700">
            Supabase
          </span>
          <span className="px-4 py-2 rounded-full bg-slate-700">
            PostgreSQL
          </span>
          <span className="px-4 py-2 rounded-full bg-slate-700">
            Full Stack
          </span>
        </div>

        <p className="mt-10 text-xs text-slate-500">
          More features coming soon 🚀
        </p>
      </div>
    </main>
  );
}
