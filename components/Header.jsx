import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-gray-900 text-gray-200 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-100">
          Thesis Repository
        </Link>
        <nav>
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-4 text-gray-400">
            <li>
              <Link href="/" className="hover:text-indigo-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/search" className="hover:text-indigo-400">
                Search
              </Link>
            </li>
            <li>
              <Link href="/submit-thesis" className="hover:text-indigo-400">
                Submit Thesis
              </Link>
            </li>
            <li>
              <Link href="/peer-review" className="hover:text-indigo-400">
                Peer Review
              </Link>
            </li>
            <li>
              <Link href="/statistics" className="hover:text-indigo-400">
                Statistics
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-indigo-400">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-indigo-400">
                Contact
              </Link>
            </li>
          </ul>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
            {menuOpen && (
              <ul className="mt-4 space-y-2 text-gray-400">
                <li>
                  <Link href="/" className="block hover:text-blue-400">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/search" className="block hover:text-blue-400">
                    Search
                  </Link>
                </li>
                <li>
                  <Link href="/submit-thesis" className="block hover:text-blue-400">
                    Submit Thesis
                  </Link>
                </li>
                <li>
                  <Link href="/peer-review" className="block hover:text-blue-400">
                    Peer Review
                  </Link>
                </li>
                <li>
                  <Link href="/statistics" className="block hover:text-blue-400">
                    Statistics
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="block hover:text-blue-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="block hover:text-blue-400">
                    Contact
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
