import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-emerald-50 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold">
          Design Your Dream Home with AI
        </h1>

        <p className="mt-4 text-gray-600">
          Welcome to HomeVibe
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <Link
            to="/signup"
            className="bg-emerald-600 text-white px-6 py-3 rounded-lg"
          >
            Get Started
          </Link>

          <Link
            to="/login"
            className="border border-emerald-600 px-6 py-3 rounded-lg"
          >
            Login
          </Link>
        </div>
      </div>
    </section>
  );
}