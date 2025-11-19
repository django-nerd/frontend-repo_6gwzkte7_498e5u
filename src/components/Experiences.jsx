import { Camera, Utensils, Ship, Leaf } from "lucide-react"

const experiences = [
  {
    title: "Gorilla & Primate Treks",
    points: [
      "Gorillas in Volcanoes National Park",
      "Chimpanzees in Nyungwe",
      "Golden monkeys and birding"
    ],
    image: "https://images.unsplash.com/photo-1581888227599-779811939961?q=80&w=1600&auto=format&fit=crop",
    icon: Leaf,
    color: "bg-emerald-600"
  },
  {
    title: "Lake & Leisure",
    points: [
      "Kayaking and island hopping",
      "Coffee farm tours",
      "Sunset cruises on Lake Kivu"
    ],
    image: "https://images.unsplash.com/photo-1550927001-03fd6b9e9262?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjM1Njk1NzZ8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
    icon: Ship,
    color: "bg-sky-600"
  },
  {
    title: "Taste of Rwanda",
    points: [
      "Farm-to-table dining",
      "Specialty coffee tastings",
      "Kigali's vibrant food scene"
    ],
    image: "https://images.unsplash.com/photo-1478144592103-25e218a04891?q=80&w=1600&auto=format&fit=crop",
    icon: Utensils,
    color: "bg-amber-600"
  },
  {
    title: "Culture & History",
    points: [
      "Kigali Genocide Memorial",
      "Local art galleries",
      "Community experiences"
    ],
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
    icon: Camera,
    color: "bg-purple-600"
  }
]

export default function Experiences() {
  return (
    <section id="experiences" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">Experiences</h2>
          <p className="mt-2 text-slate-600 max-w-2xl">Choose from nature, culture, cuisine, or unwinding by the water. Mix and match to create your perfect trip.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map(({ title, points, image, icon: Icon, color }) => (
            <div key={title} className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
              <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover -z-10" />
              <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/40 -z-10"></div>

              <div className="p-6 sm:p-8 text-white">
                <div className={`inline-flex items-center gap-2 rounded-full ${color} px-3 py-1 text-xs font-semibold shadow` }>
                  <Icon className="h-3.5 w-3.5" />
                  Featured
                </div>
                <h3 className="mt-3 text-2xl font-bold">{title}</h3>
                <ul className="mt-4 space-y-2 text-white/90">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/80"></span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <a href="#plan" className="inline-flex items-center rounded-full bg-white/90 hover:bg-white text-slate-900 px-4 py-2 text-sm font-semibold shadow">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
