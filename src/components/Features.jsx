export default function Features() {
  return (
    <section className="bg-gray-100 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-xl">AI Room Design</h3>
            <p className="mt-3 text-gray-600">
              Generate beautiful room designs using AI.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-xl">DIY Ideas</h3>
            <p className="mt-3 text-gray-600">
              Explore easy DIY decoration ideas.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-xl">Furniture Shop</h3>
            <p className="mt-3 text-gray-600">
              Discover modern furniture recommendations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}