import { Mountain, Landmark, Waves, Trees } from "lucide-react"

const highlights = [
  {
    icon: Mountain,
    title: "Gorilla Trekking",
    desc: "Hike through misty bamboo forests to meet the gentle giants of Volcanoes National Park.",
    image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=1600&auto=format&fit=crop",
    tag: "Bucket list"
  },
  {
    icon: Waves,
    title: "Lake Kivu Escapes",
    desc: "Relax on sandy shores, kayak through serene waters, and enjoy island-hopping adventures.",
    image: "https://images.unsplash.com/photo-1647891684895-15c5b831fde1?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxMYWtlJTIwS2l2dSUyMEVzY2FwZXN8ZW58MHwwfHx8MTc2MzU2OTU3NXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
    tag: "Chill"
  },
  {
    icon: Landmark,
    title: "Kigali Culture",
    desc: "Discover a clean, modern capital with world-class coffee, art, and moving history.",
    image: "https://images.unsplash.com/photo-1699800709647-649643a39de7?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxLaWdhbGklMjBDdWx0dXJlfGVufDB8MHx8fDE3NjM1Njk1NzV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
    tag: "City"
  },
  {
    icon: Trees,
    title: "Nyungwe Canopy Walk",
    desc: "Walk among ancient rainforest treetops on Africa's highest canopy bridge.",
    image: "https://images.unsplash.com/photo-1493314894560-5c412a56c17c?q=80&w=1600&auto=format&fit=crop",
    tag: "Adventure"
  }
]

export default function Highlights() {
  return (
    <section id="highlights" className="py-20 bg-gradient-to-b from-white to-emerald-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">Highlights</h2>
          <p className="mt-2 text-slate-600 max-w-2xl">A compact country with diverse landscapes — every corner of Rwanda offers something special.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map(({ icon: Icon, title, desc, image, tag }) => (
            <div key={title} className="group rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <img src={image} alt={title} className="h-44 w-full object-cover" />
                <span className="absolute top-3 left-3 rounded-full bg-white/90 text-slate-900 text-xs font-semibold px-2 py-1 border border-slate-200">{tag}</span>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 text-emerald-600">
                  <Icon className="h-5 w-5" />
                  <h3 className="font-semibold text-slate-900">{title}</h3>
                </div>
                <p className="mt-2 text-sm text-slate-600">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
