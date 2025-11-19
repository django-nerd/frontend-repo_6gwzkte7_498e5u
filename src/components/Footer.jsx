export default function Footer() {
  return (
    <footer id="about" className="pt-14 pb-10 bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <img src="https://images.unsplash.com/photo-1511283878565-0833bf39de9d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSd2FuZGF8ZW58MHwwfHx8MTc2MzU2OTU3NHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Rwanda" className="h-6 w-8 rounded-sm" />
              <h4 className="text-xl font-extrabold tracking-tight">Visit Rwanda</h4>
            </div>
            <p className="mt-3 text-white/80 text-sm max-w-sm">Welcome to the Land of a Thousand Hills. Plan a safe, sustainable and unforgettable journey with authentic local experiences.</p>
          </div>

          <div>
            <h5 className="font-semibold">Plan</h5>
            <ul className="mt-2 space-y-2 text-white/80 text-sm">
              <li><a href="#experiences" className="hover:text-emerald-400">Experiences</a></li>
              <li><a href="#highlights" className="hover:text-emerald-400">Highlights</a></li>
              <li><a href="#plan" className="hover:text-emerald-400">Trip Ideas</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold">Practical</h5>
            <ul className="mt-2 space-y-2 text-white/80 text-sm">
              <li>Visa on arrival for most nationalities</li>
              <li>Direct flights from regional hubs</li>
              <li>Clean, safe, and welcoming</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Visit Rwanda. All rights reserved.</p>
          <p>Made with care for responsible travel.</p>
        </div>
      </div>
    </footer>
  )
}
