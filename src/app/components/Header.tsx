"use client";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="w-full bg-[linear-gradient(90deg,_#FC004E_0%,_#10CBE0_100%)] lg:text-[22px] text-[16px] text-white text-sm font-bold text-center py-2 px-4">
        <span className="text-[#00E7F9]">🚀 FRESH BEGINNINGS SALE: </span>
        <span className="font-bold">Extra 25% OFF</span>, Limited Spots - start
        your journey today!
      </div>

      <header className="flex justify-between items-start px-6 pt-4 lg:pt-10 pb-0 bg-black md:px-16 lg:px-32">
        <div className="md:hidden"></div>
        <div className="text-white text-3xl font-bold font-urbanist">
          <img
            src="/logo.png"
            alt="fametonic"
            className="lg:h-[74px] h-[46px]"
          />
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/*Nav Menu */}

        <nav className="space-x-8 hidden md:flex items-start">
          <button className="text-[#A9A9A9] text-[18px] transition">
            About us
          </button>
          <button className="text-[#A9A9A9] text-[18px] transition">
            Contact
          </button>
        </nav>
      </header>
    </>
  );
}
