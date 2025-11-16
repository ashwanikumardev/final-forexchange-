'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Phone, User, ShoppingCart } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary-600 text-white py-2">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+919121219191" className="flex items-center gap-2 hover:text-primary-100">
              <Phone size={16} />
              <span>+91 9121219191</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="hover:text-primary-100">Login</Link>
            <Link href="/register" className="hover:text-primary-100">Register</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-bold text-2xl px-4 py-2 rounded-lg">
              BookMyForex
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <div className="relative group">
              <button className="font-medium text-gray-700 hover:text-primary-600">
                Services
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 py-2 w-64">
                <Link href="/exchange-currency" className="block px-4 py-2 hover:bg-primary-50">Exchange Currency</Link>
                <Link href="/transfer-money" className="block px-4 py-2 hover:bg-primary-50">Transfer Money Abroad</Link>
                <Link href="/forex-cards" className="block px-4 py-2 hover:bg-primary-50">Forex Cards</Link>
                <Link href="/reload-card" className="block px-4 py-2 hover:bg-primary-50">Reload/Unload Card</Link>
              </div>
            </div>
            <Link href="/rates" className="font-medium text-gray-700 hover:text-primary-600">Forex Rates</Link>
            <Link href="/about" className="font-medium text-gray-700 hover:text-primary-600">About</Link>
            <Link href="/contact" className="font-medium text-gray-700 hover:text-primary-600">Contact</Link>
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/dashboard" className="flex items-center gap-2 text-gray-700 hover:text-primary-600">
              <User size={20} />
              <span>My Account</span>
            </Link>
            <Link href="/cart" className="flex items-center gap-2 text-gray-700 hover:text-primary-600">
              <ShoppingCart size={20} />
              <span className="bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4">
            <nav className="flex flex-col gap-4">
              <Link href="/exchange-currency" className="font-medium text-gray-700">Exchange Currency</Link>
              <Link href="/transfer-money" className="font-medium text-gray-700">Transfer Money Abroad</Link>
              <Link href="/forex-cards" className="font-medium text-gray-700">Forex Cards</Link>
              <Link href="/rates" className="font-medium text-gray-700">Forex Rates</Link>
              <Link href="/dashboard" className="font-medium text-gray-700">My Account</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

