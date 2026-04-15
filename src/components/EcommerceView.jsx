import React, { useState } from 'react';
import { ShoppingBag, Search, Settings, ShoppingCart as CartIcon, Plus } from 'lucide-react';
import { categories } from '../data/mockData';
import { useStore } from '../context/StoreContext';

const EcommerceView = () => {
  const { products, addToCart, cart } = useStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.sku.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? p.cat === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white pb-20">
      <nav className="border-b px-6 py-4 flex justify-between items-center bg-white sticky top-0 z-40">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-black italic">C</div>
          <span className="font-bold text-xl tracking-tighter">CASAMI <span className="text-blue-600">AUTO</span></span>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
          <span
            className={`${!selectedCategory ? 'text-blue-600 border-b-2 border-blue-600' : 'hover:text-blue-600'} cursor-pointer`}
            onClick={() => setSelectedCategory(null)}
          >
            Catálogo
          </span>
          <span className="hover:text-blue-600 cursor-pointer">Ofertas</span>
          <span className="hover:text-blue-600 cursor-pointer">Mayoreo</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar..."
              className="pl-10 pr-4 py-1 bg-slate-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-32 md:w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative cursor-pointer group">
            <ShoppingBag size={24} className="text-slate-700 group-hover:text-blue-600 transition-colors" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold border-2 border-white animate-bounce">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Search */}
      {!selectedCategory && !searchTerm && (
        <div className="bg-slate-900 text-white px-8 py-12 md:py-20 relative overflow-hidden">
          <div className="max-w-4xl mx-auto relative z-10 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-black mb-6 italic leading-tight uppercase">
              Las refacciones <br/>que tu auto merece
            </h1>
            <p className="text-slate-400 mb-8 max-w-lg text-lg">Tu local digital abierto 24/7. Envíos a todo México con garantía Casami.</p>
            <div className="bg-white rounded-xl p-2 flex flex-col md:flex-row items-center gap-2 shadow-2xl max-w-2xl">
              <Search className="text-slate-400 mx-2 hidden md:block" size={24}/>
              <input
                type="text"
                placeholder="Año, Marca, Modelo o SKU de pieza..."
                className="text-slate-900 w-full focus:outline-none p-3 text-lg"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold text-sm transition-all w-full md:w-auto">BUSCAR</button>
            </div>
          </div>
        </div>
      )}

      <div className="p-8 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-slate-800">
          {selectedCategory ? `Categoría: ${selectedCategory}` : searchTerm ? `Resultados para: "${searchTerm}"` : 'Categorías Populares'}
        </h2>

        {!selectedCategory && !searchTerm ? (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map(cat => (
              <div
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className="aspect-square bg-slate-50 border border-slate-100 hover:border-blue-500 hover:shadow-xl rounded-2xl flex flex-col items-center justify-center transition-all cursor-pointer group"
              >
                <div className="w-14 h-14 bg-white rounded-full shadow-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Settings size={24} className="text-blue-600"/>
                </div>
                <span className="text-sm font-bold text-slate-700">{cat}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map(p => (
              <div key={p.id} className="bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-2xl transition-all group flex flex-col">
                <div className="aspect-video bg-slate-100 flex items-center justify-center relative">
                   <Settings size={48} className="text-slate-300 group-hover:rotate-45 transition-transform duration-500" />
                   <div className="absolute top-2 right-2">
                     <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${p.stock > 0 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                       {p.stock > 0 ? 'EN STOCK' : 'AGOTADO'}
                     </span>
                   </div>
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <p className="text-[10px] text-blue-600 font-bold uppercase mb-1">{p.cat}</p>
                  <h3 className="font-bold text-slate-800 mb-2 line-clamp-2">{p.name}</h3>
                  <div className="mt-auto flex justify-between items-center">
                    <span className="font-black text-xl text-slate-900">${p.price}</span>
                    <button
                      onClick={() => addToCart(p)}
                      disabled={p.stock <= 0}
                      className={`p-2 rounded-xl shadow-lg transition-all ${p.stock > 0 ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-100 active:scale-90' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}
                    >
                      <Plus size={20}/>
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {filteredProducts.length === 0 && (
              <div className="col-span-full py-20 text-center">
                <p className="text-slate-400 text-lg">No encontramos lo que buscas. Prueba con otro término.</p>
                <button onClick={() => {setSearchTerm(''); setSelectedCategory(null);}} className="text-blue-600 font-bold mt-4 underline">Ver todo el catálogo</button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default EcommerceView;
