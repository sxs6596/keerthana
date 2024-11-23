import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 border-t border-gray-700">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2024 Digital Thesis Repository. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          {/* Using Next.js Link for client-side routing */}
          <Link href="/about" className="hover:text-white">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
          <Link href="/privacy" className="hover:text-white">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
