"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Our Services" },
    { href: "/specialist", label: "Specialist" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="w-full pt-6 pb-2 bg-transparent border-none">
      <div className="container mx-auto max-w-7xl flex items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-transparent flex items-center justify-center">
            {/* Thin blue tooth SVG icon */}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 3C10 3 5 7.5 5 13.5C5 19.5 10 29 16 29C22 29 27 19.5 27 13.5C27 7.5 22 3 16 3Z" stroke="#5686E7" strokeWidth="2.2"/>
              <path d="M12.5 13.5C12.5 15.433 14.067 17 16 17C17.933 17 19.5 15.433 19.5 13.5C19.5 11.567 17.933 10 16 10C14.067 10 12.5 11.567 12.5 13.5Z" stroke="#5686E7" strokeWidth="2.2"/>
            </svg>
          </div>
          <span className="text-xl font-bold text-gray-900">SmileBright</span>
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2 ml-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href))
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-5 py-1.5 rounded-full border ${
                  isActive
                    ? "border-[#5686E7] bg-[#5686E7] text-white"
                    : "border-[#dbeafe] bg-white text-gray-900 hover:bg-[#f1f5fd]"
                } font-medium text-base transition-colors`}
                style={{ boxShadow: 'none' }}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
        {/* Get Started Button */}
        <div className="hidden md:flex items-center">
          <Button variant="outline" className="border-2 border-[#5686E7] text-[#5686E7] bg-white hover:bg-[#f1f5fd] hover:text-[#5686E7] px-6 py-1.5 rounded-full font-semibold text-base shadow-none transition-colors">
            Get Started
          </Button>
        </div>
        {/* Mobile menu button */}
        <button className="md:hidden ml-auto" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden px-6 pt-4 pb-2">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href))
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-5 py-1.5 rounded-full border ${
                    isActive
                      ? "border-[#5686E7] bg-[#5686E7] text-white"
                      : "border-[#dbeafe] bg-white text-gray-900 hover:bg-[#f1f5fd]"
                  } font-medium text-base transition-colors`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )
            })}
            <Button variant="outline" className="border-2 border-[#5686E7] text-[#5686E7] bg-white hover:bg-[#f1f5fd] hover:text-[#5686E7] px-6 py-1.5 rounded-full font-semibold text-base shadow-none transition-colors mt-2">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
