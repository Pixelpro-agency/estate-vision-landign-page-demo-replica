import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-[#02040A]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between gap-4">
        <div className="flex items-center">
          <Image
            src="/logos/EstateVision_LogoEsteso_Bianco.svg"
            alt="EstateVision"
            width={180}
            height={40}
            className="h-[25.6px] md:h-8 w-auto transition-all"
          />
        </div>
        <div className="hidden md:flex items-center space-x-8">
          {/* Navigation Links if needed */}
        </div>
        <Link href="/request-access">
          <button className="bg-white text-black px-4 py-2 md:px-6 md:py-2.5 text-[10px] md:text-xs font-bold hover:bg-gray-200 transition-colors tracking-widest uppercase whitespace-nowrap">
            Request Access
          </button>
        </Link>
      </div>
    </nav>
  );
}
