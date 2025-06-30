"use client";
import { AlignLeft, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Fitness Programs", href: "/fitness-program" },
    { name: "Weekly Plan", href: "/weekly-plan" },
    { name: "Daily Workouts", href: "/daily-workouts" },
    { name: "Health Benefits", href: "/health-benifits" },
    { name: "Blogs", href: "/blogs" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <nav
      className={`${
        isHomePage
          ? "bg-transparent fixed top-0 w-full z-50"
          : "text-black border-b border-b-white w-full top-0 z-50 fixed"
      } ${isScrolled ? "bg-white delay-200" : "bg-transparent"}`}
    >
      <div className="w-full h-15 flex flex-row items-center justify-between px-4 sm:px-6 lg:px-10 py-3">
        {/* Logo */}
        <div className="w-28 md:w-36">
          <Link href="/">
            <Image
              src="/all-images/logo/fitness.png"
              alt="logo"
              width={150}
              height={50}
              className="w-full"
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex flex-row justify-center items-center gap-6 text-sm lg:text-base">
          {navLinks.map((link) => (
            <li key={link.name} className="relative group">
              <Link
                href={link.href}
                className={`pb-1 transition duration-300 ${
                  pathname === link.href
                    ? "text-orange-600 font-semibold"
                    : "text-black hover:text-orange-600"
                }`}
              >
                {link.name}
                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-orange-600 transition-all duration-300 ${
                    pathname === link.href
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Nav Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? null : <AlignLeft size={28} />}
        </button>

        {/* Mobile Nav Menu */}
        {isOpen && (
          <div className="fixed inset-0 pt-20 w-full h-screen z-50 bg-white/80 backdrop-blur-md flex flex-col items-center gap-4 md:hidden">
            <button
              className="absolute top-4 right-4"
              onClick={() => setIsOpen(false)}
            >
              <X size={32} className="text-black" />
            </button>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xl hover:text-orange-600"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
