export default function Categories() {
  return (
    <section className="py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Explore Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-6 bg-white rounded-xl shadow text-center">
            🛋️
            <h3 className="mt-4 font-semibold">Living Room</h3>
          </div>

          <div className="p-6 bg-white rounded-xl shadow text-center">
            🛏️
            <h3 className="mt-4 font-semibold">Bedroom</h3>
          </div>

          <div className="p-6 bg-white rounded-xl shadow text-center">
            🍽️
            <h3 className="mt-4 font-semibold">Kitchen</h3>
          </div>

          <div className="p-6 bg-white rounded-xl shadow text-center">
            🚿
            <h3 className="mt-4 font-semibold">Bathroom</h3>
          </div>
        </div>
      </div>
    </section>
  );
}