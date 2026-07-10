import { useState } from "react";
import DashboardLayout from "../components/DashboardLayout";

import Sofa from "../assets/images/Sofa.jpg";
import Chair from "../assets/images/Chair.jpg";
import Bed from "../assets/images/Bed.jpg";
import Lamp from "../assets/images/Lamp.jpg";
import Cabinet from "../assets/images/Cabinet.jpg";
import Cabinet1 from "../assets/images/Cabinet1.jpg";

const mergedProducts = [
  { id: 1, name: "Luxury Sofa Lounge", price: 24999, category: "Sofa", rating: "⭐️ 4.9", image: Sofa },
  { id: 2, name: "Modern Nordic Chair", price: 6999, category: "Chair", rating: "⭐️ 4.7", image: Chair },
  { id: 3, name: "King Size Bed Frame", price: 39999, category: "Bed", rating: "⭐️ 4.9", image: Bed },
  { id: 4, name: "Designer Ambient Lamp", price: 2499, category: "Lamp", rating: "⭐️ 4.6", image: Lamp },
  { id: 5, name: "Classic Wooden Cabinet", price: 12999, category: "Cabinet", rating: "⭐️ 4.5", image: Cabinet },
  { id: 6, name: "Premium Storage Cabinet", price: 15999, category: "Cabinet", rating: "⭐️ 4.8", image: Cabinet1 },
  { id: 7, name: "Modern Gray Minimalist Sofa", price: 34500, category: "Sofa", rating: "⭐️ 4.8", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=400" },
  { id: 8, name: "Emerald Velvet Accent Chair", price: 8200, category: "Chair", rating: "⭐️ 4.6", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=400" },
  { id: 9, name: "Solid Oak Floating Bed", price: 45000, category: "Bed", rating: "⭐️ 4.9", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=400" },
  { id: 10, name: "Minimalist Matte Brass Lamp", price: 3100, category: "Lamp", rating: "⭐️ 4.4", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=400" },
  { id: 11, name: "Industrial Slate Sideboard", price: 18900, category: "Cabinet", rating: "⭐️ 4.7", image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=400" },
];

export default function Shop() {
  const [maxPrice, setMaxPrice] = useState(50000);
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  // Track button loading states per individual product item ID
  const [loadingStates, setLoadingStates] = useState({});

  const filteredProducts = mergedProducts.filter(p => 
    p.price <= maxPrice && (selectedCategory === "All" || p.category === selectedCategory)
  );

  const handleAddToCart = (id, name) => {
    // Set individual item button to loading state
    setLoadingStates(prev => ({ ...prev, [id]: "loading" }));

    setTimeout(() => {
      // Transition to success checkmark
      setLoadingStates(prev => ({ ...prev, [id]: "success" }));
      
      // Update global cart counts in storage
      const currentCartCount = parseInt(localStorage.getItem("homevibe_cart_count") || "0");
      localStorage.setItem("homevibe_cart_count", currentCartCount + 1);
      window.dispatchEvent(new Event("storage"));

      // Reset button state back to original after a short display window
      setTimeout(() => {
        setLoadingStates(prev => ({ ...prev, [id]: null }));
      }, 1500);

    }, 800);
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col lg:flex-row gap-8 tracking-wide font-sans text-slate-900">
        
        {/* Left Side Filters Sidebar Widget */}
        <aside className="w-full lg:w-64 bg-white/30 backdrop-blur-xl border border-white/40 rounded-[2rem] p-6 shadow-xl h-fit space-y-6">
          <div>
            <h3 className="font-extrabold text-purple-950 text-sm tracking-wider uppercase mb-3">Budget Limits</h3>
            <input 
              type="range" 
              min="2000" 
              max="50000" 
              step="1000"
              value={maxPrice} 
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-purple-600 bg-purple-200/50 rounded-lg appearance-none h-2 cursor-pointer"
            />
            <div className="flex justify-between text-xs font-bold text-slate-600 mt-2">
              <span>₹2,000</span>
              <span className="text-purple-700 bg-purple-100 px-2 py-0.5 rounded-md">Max: ₹{maxPrice.toLocaleString()}</span>
            </div>
          </div>

          <div>
            <h3 className="font-extrabold text-purple-950 text-sm tracking-wider uppercase mb-3">Item Categories</h3>
            <div className="flex flex-wrap lg:flex-col gap-2">
              {["All", "Sofa", "Chair", "Bed", "Lamp", "Cabinet"].map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-left text-sm px-4 py-2 rounded-xl font-semibold transition-all ${
                    selectedCategory === cat 
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md"
                      : "bg-white/40 hover:bg-white/70 text-slate-700"
                  }`}
                >
                  {cat === "All" ? "📦 All Collections" : cat}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Right Side Products Grid Dashboard */}
        <div className="flex-1">
          <div className="mb-6">
            <h1 className="text-4xl font-black bg-gradient-to-r from-purple-950 to-indigo-950 bg-clip-text text-transparent">Interior Shop</h1>
            <p className="text-sm font-semibold text-slate-600 mt-1">Discover premium recommended furniture picked directly by our design algorithms.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <div 
                key={product.id}
                className="bg-white/30 backdrop-blur-xl border border-white/40 rounded-[2rem] shadow-lg overflow-hidden flex flex-col justify-between group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-4 right-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm text-purple-950">
                    {product.rating}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="text-lg font-extrabold text-purple-950 line-clamp-1 group-hover:text-purple-800 transition-colors">
                      {product.name}
                    </h2>
                    <p className="text-2xl font-black text-transparent bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text mt-2">
                      ₹{product.price.toLocaleString()}
                    </p>
                  </div>

                  <button 
                    onClick={() => handleAddToCart(product.id, product.name)}
                    disabled={loadingStates[product.id] === "loading"}
                    className={`mt-5 w-full font-bold py-3 rounded-xl shadow-md transition-all active:scale-[0.98] ${
                      loadingStates[product.id] === "success"
                        ? "bg-emerald-600 text-white"
                        : "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white"
                    }`}
                  >
                    {loadingStates[product.id] === "loading" && "🛒 Adding to Space..."}
                    {loadingStates[product.id] === "success" && "✅ Added to Layout!"}
                    {!loadingStates[product.id] && "Add To Space Cart"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}