// -----------------------------
// Footer
// -----------------------------
import RivaayaLogo from "./RivaayaLogo";
const Footer = () => (
  <footer className="mt-10 border-t border-slate-200 bg-white/70 py-10 backdrop-blur">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <RivaayaLogo />
          <p className="mt-3 max-w-md text-sm text-slate-600">
            Rivaaya connects heritage artisans with the world through thoughtful storytelling and technology.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-900">Explore</h4>
          <ul className="mt-2 space-y-2 text-sm text-slate-600">
            <li><a href="#shop" className="hover:text-violet-700">Shop</a></li>
            <li><a href="#artisans" className="hover:text-violet-700">Artisans</a></li>
            <li><a href="#story" className="hover:text-violet-700">Our Story</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-900">For Artisans</h4>
          <ul className="mt-2 space-y-2 text-sm text-slate-600">
            <li><a href="#join" className="hover:text-violet-700">Get Started</a></li>
            <li><a href="#" className="hover:text-violet-700">FAQs</a></li>
            <li><a href="#" className="hover:text-violet-700">Support</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 md:flex-row">
        <p>© {new Date().getFullYear()} Rivaaya. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <a href="#" className="hover:text-violet-700">Privacy</a>
          <span>•</span>
          <a href="#" className="hover:text-violet-700">Terms</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;