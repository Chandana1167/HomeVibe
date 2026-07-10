import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-emerald-600">
          HomeVibe
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <NavLink
            to="/"
            className="text-gray-700 hover:text-emerald-600 transition"
          >
            Home
          </NavLink>

          <NavLink
            to="/inspiration"
            className="text-gray-700 hover:text-emerald-600 transition"
          >
            Inspiration
          </NavLink>

          <NavLink
            to="/room-makeover"
            className="text-gray-700 hover:text-emerald-600 transition"
          >
            AI Design
          </NavLink>

          <NavLink
            to="/diy"
            className="text-gray-700 hover:text-emerald-600 transition"
          >
            DIY Ideas
          </NavLink>

          <NavLink
            to="/shop"
            className="text-gray-700 hover:text-emerald-600 transition"
          >
            Shop
          </NavLink>
        </div>

        {/* Authentication Buttons */}
        <div className="flex gap-3">
          <Link
            to="/login"
            className="px-4 py-2 border border-emerald-600 rounded-lg text-emerald-600 hover:bg-emerald-50 transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}