import { Metadata } from 'next'
 
// These styles apply to every route in the application
import './globals.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Digital Thesis Repository',
  description: 'A platform to explore, submit, and manage academic theses.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-gray-200">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
