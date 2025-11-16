import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-white font-bold text-lg sm:text-xl mb-3 sm:mb-4">BookMyForex</h3>
            <p className="text-xs sm:text-sm mb-3 sm:mb-4">
              India's most trusted platform for foreign exchange services. Get the best rates for currency exchange, forex cards, and money transfers.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a href="#" className="hover:text-primary-400 transition-colors"><Facebook size={18} className="sm:w-5 sm:h-5" /></a>
              <a href="#" className="hover:text-primary-400 transition-colors"><Twitter size={18} className="sm:w-5 sm:h-5" /></a>
              <a href="#" className="hover:text-primary-400 transition-colors"><Instagram size={18} className="sm:w-5 sm:h-5" /></a>
              <a href="#" className="hover:text-primary-400 transition-colors"><Linkedin size={18} className="sm:w-5 sm:h-5" /></a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Services</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><Link href="/exchange-currency" className="hover:text-primary-400 transition-colors">Buy/Sell Currency</Link></li>
              <li><Link href="/forex-cards" className="hover:text-primary-400 transition-colors">Forex Cards</Link></li>
              <li><Link href="/transfer-money" className="hover:text-primary-400 transition-colors">Money Transfer</Link></li>
              <li><Link href="/reload-card" className="hover:text-primary-400 transition-colors">Reload Forex Card</Link></li>
              <li><Link href="/travel-insurance" className="hover:text-primary-400 transition-colors">Travel Insurance</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><Link href="/rates" className="hover:text-primary-400 transition-colors">Live Forex Rates</Link></li>
              <li><Link href="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link href="/how-it-works" className="hover:text-primary-400 transition-colors">How It Works</Link></li>
              <li><Link href="/faq" className="hover:text-primary-400 transition-colors">FAQs</Link></li>
              <li><Link href="/blog" className="hover:text-primary-400 transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contact Us</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2">
                <Phone size={14} className="sm:w-4 sm:h-4 mt-1 flex-shrink-0" />
                <div>
                  <p>+91 9121219191</p>
                  <p className="text-xs text-gray-400">Mon-Sat: 9AM-7PM</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={14} className="sm:w-4 sm:h-4 mt-1 flex-shrink-0" />
                <p>support@bookmyforex.com</p>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="sm:w-4 sm:h-4 mt-1 flex-shrink-0" />
                <p>Mumbai, Maharashtra, India</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm gap-4">
          <p className="text-center sm:text-left">&copy; 2024 BookMyForex. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link href="/privacy" className="hover:text-primary-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary-400 transition-colors">Terms of Service</Link>
            <Link href="/refund" className="hover:text-primary-400 transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

