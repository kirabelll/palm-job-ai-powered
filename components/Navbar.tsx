import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-green-200 transition-colors">
          PalmJob
        </Link>
        <div className="space-x-4">
          <Link href="/" className="hover:text-green-200 transition-colors">
            Home
          </Link>
          <Link href="/jobs" className="hover:text-green-200 transition-colors">
            Jobs
          </Link>
          {/* Add more links as needed */}
        </div>
      </div>
    </nav>
  );
}
