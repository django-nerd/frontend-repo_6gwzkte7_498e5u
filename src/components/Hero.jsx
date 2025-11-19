import { MapPin, Play } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28" aria-label="Hero">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1586769852044-692d6e3703b2?q=80&w=2000&auto=format&fit=crop"
          alt="Rwanda landscape"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 items-center gap-10 py-20">
          <div className="lg:col-span-7 text-white">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur">
              <MapPin className="h-3.5 w-3.5" /> Heart of Africa
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Discover Rwanda
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-white/90 max-w-2xl">
              From misty volcanoes and mountain gorillas to vibrant cities and serene lakes, Rwanda is a compact country packed with unforgettable experiences.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#plan" className="inline-flex items-center rounded-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 font-semibold shadow-lg shadow-emerald-900/30">
                Start Planning
              </a>
              <a href="#experiences" className="inline-flex items-center rounded-full bg-white/10 hover:bg-white/20 text-white px-6 py-3 font-semibold border border-white/20">
                <Play className="h-5 w-5 mr-2" /> Explore Experiences
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-white/80">
              <div className="flex -space-x-2">
                {[
                  "https://images.unsplash.com/photo-1528712306091-ed0763094c98?q=80&w=400&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=400&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=400&auto=format&fit=crop",
                ].map((src, i) => (
                  <img key={i} src={src} alt="traveler" className="h-9 w-9 rounded-full border-2 border-white/60" />
                ))}
              </div>
              <p className="text-sm">Join thousands discovering Rwanda this season</p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1566139420581-58aa8b66d194?q=80&w=1600&auto=format&fit=crop"
                alt="Gorilla trekking Rwanda"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <p className="text-sm">Volcanoes National Park — Gorilla Trekking</p>
                <span className="rounded-full bg-emerald-600/90 px-3 py-1 text-xs font-semibold">Top pick</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
