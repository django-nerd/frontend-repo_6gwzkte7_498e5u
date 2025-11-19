import { Calendar, Plane, Hotel, Phone } from "lucide-react"
import { useState } from "react"

export default function PlanTrip() {
  const [form, setForm] = useState({ name: "", email: "", dates: "", interests: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="plan" className="py-20 bg-emerald-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold border border-emerald-200 text-emerald-700">
            <Plane className="h-3.5 w-3.5" /> Trip inquiry sent
          </div>
          <h3 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900">Thanks! We'll be in touch.</h3>
          <p className="mt-2 text-slate-600">A travel specialist will email you with ideas and sample itineraries for Rwanda.</p>
          <a href="#" onClick={() => setSubmitted(false)} className="mt-6 inline-flex items-center rounded-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 font-semibold">Send another</a>
        </div>
      </section>
    )
  }

  return (
    <section id="plan" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-700 px-3 py-1 text-xs font-semibold border border-emerald-200">
              <Calendar className="h-3.5 w-3.5" /> Tailored itineraries
            </div>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">Plan your Rwanda adventure</h2>
            <p className="mt-2 text-slate-600">Share your details and interests. We'll craft a personalized journey with trusted local partners.</p>

            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              <div className="rounded-xl border border-slate-200 p-4">
                <Plane className="h-5 w-5 text-emerald-600" />
                <p className="mt-2 text-sm font-semibold">Flights & Transfers</p>
                <p className="text-sm text-slate-600">Seamless connections across Rwanda</p>
              </div>
              <div className="rounded-xl border border-slate-200 p-4">
                <Hotel className="h-5 w-5 text-emerald-600" />
                <p className="mt-2 text-sm font-semibold">Stays</p>
                <p className="text-sm text-slate-600">From luxury lodges to boutique hotels</p>
              </div>
              <div className="rounded-xl border border-slate-200 p-4">
                <Phone className="h-5 w-5 text-emerald-600" />
                <p className="mt-2 text-sm font-semibold">On-trip support</p>
                <p className="text-sm text-slate-600">Local experts available 24/7</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 p-6 bg-white shadow-sm">
            <div className="grid gap-4">
              <div>
                <label className="text-sm font-medium text-slate-700">Name</label>
                <input name="name" value={form.name} onChange={handleChange} required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Email</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Travel dates</label>
                <input name="dates" value={form.dates} onChange={handleChange} placeholder="e.g. June 10–17" className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Interests</label>
                <textarea name="interests" value={form.interests} onChange={handleChange} placeholder="Gorillas, hiking, coffee, culture…" rows={4} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <button className="mt-2 inline-flex items-center rounded-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 font-semibold">Request ideas</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
