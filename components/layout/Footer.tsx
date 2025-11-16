import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold text-xl mb-4">BookMyForex</h3>
            <p className="text-sm mb-4">
              India's most trusted platform for foreign exchange services. Get the best rates for currency exchange, forex cards, and money transfers.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary-400"><Facebook size={20} /></a>
              <a href="#" className="hover:text-primary-400"><Twitter size={20} /></a>
              <a href="#" className="hover:text-primary-400"><Instagram size={20} /></a>
              <a href="#" className="hover:text-primary-400"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/exchange-currency" className="hover:text-primary-400">Buy/Sell Currency</Link></li>
              <li><Link href="/forex-cards" className="hover:text-primary-400">Forex Cards</Link></li>
              <li><Link href="/transfer-money" className="hover:text-primary-400">Money Transfer</Link></li>
              <li><Link href="/reload-card" className="hover:text-primary-400">Reload Forex Card</Link></li>
              <li><Link href="/travel-insurance" className="hover:text-primary-400">Travel Insurance</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/rates" className="hover:text-primary-400">Live Forex Rates</Link></li>
              <li><Link href="/about" className="hover:text-primary-400">About Us</Link></li>
              <li><Link href="/how-it-works" className="hover:text-primary-400">How It Works</Link></li>
              <li><Link href="/faq" className="hover:text-primary-400">FAQs</Link></li>
              <li><Link href="/blog" className="hover:text-primary-400">Blog</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <div>
                  <p>+91 9121219191</p>
                  <p className="text-xs text-gray-400">Mon-Sat: 9AM-7PM</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <p>support@bookmyforex.com</p>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <p>Mumbai, Maharashtra, India</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; 2024 BookMyForex. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-primary-400">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary-400">Terms of Service</Link>
            <Link href="/refund" className="hover:text-primary-400">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

