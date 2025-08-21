import RivaayaLogo from "./RivaayaLogo"
const Navbar = () => (
  <div className="fixed top-0 left-0 right-0 z-50">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/50 p-3 backdrop-blur-md shadow-sm">
        <RivaayaLogo />
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
          <a href="#shop" className="hover:text-violet-700">Shop</a>
          <a href="#artisans" className="hover:text-violet-700">Artisans</a>
          <a href="#story" className="hover:text-violet-700">Our Story</a>
          <a href="#join" className="hover:text-violet-700">Join</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold shadow hover:shadow-md">Sign in</button>
          <button className="rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-violet-700">Open Marketplace</button>
        </div>
      </div>
    </div>
  </div>
);
export default Navbar;