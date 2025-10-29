import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Dumbbell, Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menu = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "Login", path: "/login" },
  ]

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md">
      <div className="mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-semibold text-green-600 flex gap-5 items-center">
         <Dumbbell size={26} /> <span className='text-yellow-600 font-bold'>Eat
            <span className='text-green-600'>Healthy</span>
         </span>
       
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex text-gray-700 gap-8">
          {menu.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="font-medium hover:text-green-600 transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-inner border-t border-gray-100">
          <div className="flex flex-col items-center py-4 space-y-3">
            {menu.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="text-gray-700 font-medium hover:text-green-600 transition-colors duration-200"
                onClick={() => setIsOpen(false)} // close on click
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar