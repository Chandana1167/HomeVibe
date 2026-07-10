export default function InspirationCard({ image, title, category }) {
  function handleSaveInspiration() {
    const saved = localStorage.getItem("homevibe_saved_inspirations") || "[]";
    const currentList = JSON.parse(saved);

    // Prevent duplicate entries
    if (!currentList.includes(title)) {
      currentList.push(title);
      localStorage.setItem("homevibe_saved_inspirations", JSON.stringify(currentList));
      alert(`"${title}" saved to your inspirations dashboard!`);
      // Dispatches an event so the active dashboard dashboard reads it instantly
      window.dispatchEvent(new Event("storage"));
    } else {
      alert("This inspiration is already saved!");
    }
  }

  return (
    <div className="bg-white/40 backdrop-blur-md border border-white/30 rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
      
      <div className="overflow-hidden relative h-56">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-4 left-4 bg-white/70 backdrop-blur-md text-xs font-bold px-3 py-1 rounded-full text-purple-950 border border-white/20">
          {category}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1 justify-between">
        <h3 className="text-lg font-bold text-purple-950 line-clamp-1">
          {title}
        </h3>

        <button 
          onClick={handleSaveInspiration}
          className="mt-4 w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium py-2.5 rounded-xl shadow-md active:scale-[0.98] transition-all"
        >
          Save Inspiration
        </button>
      </div>
    </div>
  );
}