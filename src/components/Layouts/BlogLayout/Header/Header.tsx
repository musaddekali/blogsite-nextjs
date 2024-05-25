import Link from "next/link";

export default function Header() {
  return (
    <header id="header">
      <nav className="bg-slate-800">
        <div className="container">
          <div className="navmenu flex items-center justify-between py-3">
            {/* Left  */}
            <Link aria-label="Brand" href="/">
              <h2 className="text-3xl font-semibold text-white">PB Talk</h2>
            </Link>
            {/* Right  */}
            <div className="navmenu_nav">
              <ul className="flex items-center gap-x-3 text-white">
                <li>
                  <Link
                    className="px-4 py-2 hover:text-slate-300 transition"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="px-4 py-2 hover:text-slate-300 transition"
                    href="blog/recurtion"
                  >
                    Recurtion
                  </Link>
                </li>
                <li>
                  <Link
                    className="px-4 py-2 hover:text-slate-300 transition"
                    href="/"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className="px-4 py-2 hover:text-slate-300 transition"
                    href="/"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    className="px-4 py-2 hover:text-slate-300 transition"
                    href="/"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    className="px-4 py-2 hover:text-slate-300 transition"
                    href="/"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
