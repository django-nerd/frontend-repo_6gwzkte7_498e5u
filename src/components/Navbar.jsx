import { Menu, Mountain, MapPin, Camera, Info } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: "#highlights", label: "Highlights", icon: Mountain },
    { href: "#experiences", label: "Experiences", icon: Camera },
    { href: "#plan", label: "Plan your trip", icon: MapPin },
    { href: "#about", label: "About", icon: Info },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 dark:bg-slate-900/70 border border-white/40 dark:border-slate-700/60 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-2">
              <img src="https://images.unsplash.com/photo-1511283878565-0833bf39de9d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSd2FuZGF8ZW58MHwwfHx8MTc2MzU2OTU3NHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Rwanda" className="h-6 w-8 rounded-sm shadow" />
              <span className="font-extrabold tracking-tight text-slate-900 dark:text-white text-lg">Visit Rwanda</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map(({ href, label }) => (
                <a key={href} href={href} className="text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium">
                  {label}
                </a>
              ))}
              <a href="#plan" className="inline-flex items-center rounded-full bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 text-sm font-semibold shadow-sm transition-colors">Start Planning</a>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200">
              <Menu className="h-5 w-5" />
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4">
              <div className="grid gap-2">
                {navItems.map(({ href, label, icon: Icon }) => (
                  <a key={href} href={href} onClick={() => setOpen(false)} className="flex items-center gap-2 p-3 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-slate-200/70 dark:border-slate-700/70 text-slate-800 dark:text-slate-100">
                    <Icon className="h-5 w-5 text-emerald-600" />
                    <span className="font-medium">{label}</span>
                  </a>
                ))}
                <a href="#plan" onClick={() => setOpen(false)} className="text-center p-3 rounded-xl bg-emerald-600 text-white font-semibold">Start Planning</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
