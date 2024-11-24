// import { Metadata } from 'next';
// import { SocketProvider } from '@/context/SocketProvider';
// // These styles apply to every route in the application
// import './globals.css';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// export const metadata = {
//   title: 'Digital Thesis Repository',
//   description: 'A platform to explore, submit, and manage academic theses.',
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className="bg-gray-900 text-gray-200">
//         {/* Wrap the entire application with the SocketProvider */}
//         <SocketProvider>
//           <Navbar />
//           <main className="min-h-screen">{children}</main>
//           <Footer />
//         </SocketProvider>
//       </body>
//     </html>
//   );
// }
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { SocketProvider } from "@/context/SocketProvider";
// These styles apply to every route in the application
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function RootLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login"); // Redirect to login if no token
    }
  }, [router]);

  return (
    <html lang="en">
      <body className="bg-gray-900 text-gray-200">
        <SocketProvider>
          {/* Show Navbar and Footer even if user is not authenticated */}
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </SocketProvider>
      </body>
    </html>
  );
}

