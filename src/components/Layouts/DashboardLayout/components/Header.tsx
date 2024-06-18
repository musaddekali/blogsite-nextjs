import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="bg-slate-700 text-white h-14 w-full flex items-center">
        <div className="container">
          <Link href="/" className="text-base  hover:underline">
            Home
          </Link>
        </div>
      </div>
    </header>
  );
}
