import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="bg-emerald-600 text-white py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold">
          Ready to Transform Your Home?
        </h2>

        <p className="mt-4">
          Join HomeVibe and start designing today.
        </p>

        <Link
          to="/signup"
          className="inline-block mt-8 bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}