'use client'

import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Rajesh Kumar',
    location: 'Mumbai',
    rating: 5,
    text: 'Best forex rates I found anywhere! Saved ₹3000 on my USD exchange compared to my bank. Delivery was super fast too.',
    avatar: '👨‍💼',
  },
  {
    name: 'Priya Sharma',
    location: 'Delhi',
    rating: 5,
    text: 'Excellent service! Got my forex card delivered the same day. The customer support team was very helpful throughout.',
    avatar: '👩‍💼',
  },
  {
    name: 'Amit Patel',
    location: 'Bangalore',
    rating: 5,
    text: 'Very transparent process. No hidden charges. The rates are updated in real-time and much better than banks.',
    avatar: '👨‍💻',
  },
  {
    name: 'Sneha Reddy',
    location: 'Hyderabad',
    rating: 5,
    text: 'Used BookMyForex for my Europe trip. The forex card worked perfectly everywhere. Highly recommended!',
    avatar: '👩‍🎓',
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600">Join thousands of satisfied customers</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={18} />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              
              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t">
                <div className="text-3xl">{testimonial.avatar}</div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8">
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">Rated Excellent on</p>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-green-500 fill-green-500" size={20} />
              ))}
            </div>
            <p className="font-bold text-gray-900 mt-1">Trustpilot</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">Google Rating</p>
            <p className="text-3xl font-bold text-gray-900">4.8/5</p>
            <p className="text-sm text-gray-500">10,000+ reviews</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">App Store</p>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-1">50,000+ downloads</p>
          </div>
        </div>
      </div>
    </section>
  )
}

