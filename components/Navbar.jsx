"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  // State to handle the mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // State for logged-in user
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // Mark component as hydrated
    setHydrated(true);

    // Retrieve user data from localStorage after hydration
    if (typeof window !== "undefined") {
      const user = JSON.parse(localStorage.getItem("user"));
      setLoggedInUser(user);
    }
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setLoggedInUser(null);

    // Redirect to home page
    router.push("/");
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Prevent rendering until hydration is complete
  if (!hydrated) return null;

  return (
    <header className="bg-neutral text-neutral-content shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          Thesis Repository
        </Link>

        {/* Hamburger icon for mobile */}
        <button
          className="block lg:hidden text-gray-300 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>

        {/* Desktop menu */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-4 text-gray-300">
            <li>
              <Link href="/" className="hover:text-primary">Home</Link>
            </li>
            <li>
              <a
                href="https://keerthanametpally06.wordpress.com/8-2/"
                className="hover:text-primary"
              >
                WordPress Blog
              </a>
            </li>
            <li>
              <Link href="/search" className="hover:text-primary">Search</Link>
            </li>
            <li>
              <Link href="/submit-thesis" className="hover:text-primary">Submit Thesis</Link>
            </li>
            <li>
              <Link href="/peer-review" className="hover:text-primary">Peer Review</Link>
            </li>
            <li>
              <Link href="/statistics" className="hover:text-primary">Statistics</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary">About</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary">Contact</Link>
            </li>

            {!loggedInUser ? (
              <>
                <li>
                  <Link href="/register" className="hover:text-primary">Register</Link>
                </li>
                <li>
                  <Link href="/login" className="hover:text-primary">Login</Link>
                </li>
              </>
            ) : (
              <li>
                <button
                  onClick={handleLogout}
                  className="hover:text-primary bg-transparent border-none cursor-pointer text-gray-300"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </nav>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden absolute top-16 left-0 w-full bg-neutral text-gray-300">
            <ul className="flex flex-col space-y-2 p-4">
              <li>
                <Link href="/" className="hover:text-primary" onClick={toggleMobileMenu}>Home</Link>
              </li>
              <li>
                <a
                  href="https://digitalrepositorygroup7.wordpress.com/2024/10/13/introducing-the-digital-repository/"
                  onClick={toggleMobileMenu}
                  className="hover:text-primary"
                >
                  WordPress Blog
                </a>
              </li>
              <li>
                <Link href="/search" className="hover:text-primary" onClick={toggleMobileMenu}>
                  Search
                </Link>
              </li>
              <li>
                <Link href="/submit-thesis" className="hover:text-primary" onClick={toggleMobileMenu}>
                  Submit Thesis
                </Link>
              </li>
              <li>
                <Link href="/peer-review" className="hover:text-primary" onClick={toggleMobileMenu}>
                  Peer Review
                </Link>
              </li>
              <li>
                <Link href="/statistics" className="hover:text-primary" onClick={toggleMobileMenu}>
                  Statistics
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary" onClick={toggleMobileMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary" onClick={toggleMobileMenu}>
                  Contact
                </Link>
              </li>

              {!loggedInUser ? (
                <>
                  <li>
                    <Link
                      href="/register"
                      className="hover:text-primary"
                      onClick={toggleMobileMenu}
                    >
                      Register
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/login"
                      className="hover:text-primary"
                      onClick={toggleMobileMenu}
                    >
                      Login
                    </Link>
                  </li>
                </>
              ) : (
                <li>
                  <button
                    onClick={() => {
                      handleLogout();
                      toggleMobileMenu();
                    }}
                    className="hover:text-primary bg-transparent border-none cursor-pointer text-gray-300"
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
