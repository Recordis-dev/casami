import React, { useState } from 'react';
import { Menu, Plus, Minus, Trash2, ShoppingCart, Search, CheckCircle } from 'lucide-react';
import { useStore } from '../context/StoreContext';

const TabletView = () => {
  const { products, posCart, addToPosCart, removeFromPosCart, processPosSale } = useStore();
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.sku.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const total = posCart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const handleCobrar = () => {
    if (posCart.length === 0) return;
    processPosSale();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="h-screen bg-slate-100 flex flex-col relative overflow-hidden">
      {/* Success Modal */}
      {showSuccess && (
        <div className="absolute inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
           <div className="bg-white p-10 rounded-[40px] shadow-2xl flex flex-col items-center text-center animate-in zoom-in duration-300">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                <CheckCircle size={48} />
              </div>
              <h2 className="text-3xl font-black italic text-slate-900 mb-2">VENTA EXITOSA</h2>
              <p className="text-slate-500 mb-8 font-medium">El inventario ha sido actualizado correctamente.</p>
              <button
                onClick={() => setShowSuccess(false)}
                className="bg-slate-900 text-white px-12 py-4 rounded-2xl font-black tracking-widest uppercase hover:bg-slate-800 transition-all"
              >
                CONTINUAR
              </button>
           </div>
        </div>
      )}

      <header className="bg-blue-700 text-white p-4 flex justify-between items-center shadow-lg shrink-0">
        <div className="flex items-center gap-3">
          <Menu size={24}/>
          <h2 className="font-bold text-lg">Terminal Mostrador #04</h2>
        </div>
        <div className="flex items-center gap-4">
          <span className="bg-blue-800 px-3 py-1 rounded-full text-[10px] font-bold uppercase">En Línea</span>
          <div className="w-10 h-10 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center font-bold">MG</div>
        </div>
      </header>

      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        <div className="flex-1 p-4 md:p-6 overflow-y-auto">
          <div className="bg-white p-2 rounded-2xl shadow-sm mb-6 flex gap-2 border-2 border-transparent focus-within:border-blue-500 transition-all">
            <Search className="text-slate-400 m-4" size={24}/>
            <input
              type="text"
              placeholder="Escanear código o buscar pieza..."
              className="flex-1 border-none rounded-xl p-4 text-xl focus:ring-0 outline-none bg-slate-50 font-medium"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="bg-slate-900 text-white px-10 rounded-xl font-black tracking-widest uppercase hidden sm:block">SCAN</button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredProducts.map(p => (
              <div
                key={p.id}
                onClick={() => addToPosCart(p)}
                className={`bg-white p-5 rounded-2xl border-2 transition-all shadow-sm cursor-pointer flex flex-col h-48 group relative overflow-hidden ${p.stock <= 0 ? 'opacity-60 grayscale' : 'hover:border-blue-500 active:scale-95'}`}
              >
                <div className="flex justify-between items-start relative z-10">
                  <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded">{p.sku}</span>
                  <div className={`text-[10px] px-2 py-1 rounded-full font-bold ${p.stock > 10 ? 'bg-green-100 text-green-700' : p.stock > 0 ? 'bg-orange-100 text-orange-700' : 'bg-red-100 text-red-700'}`}>
                    STOCK: {p.stock}
                  </div>
                </div>
                <h3 className="font-bold text-slate-800 text-lg mt-3 flex-1 relative z-10">{p.name}</h3>
                <div className="flex justify-between items-center mt-4 border-t border-slate-50 pt-3 relative z-10">
                  <span className="font-black text-blue-600 text-xl">${p.price}</span>
                  <div className="bg-blue-600 text-white p-2 rounded-xl shadow-lg shadow-blue-200 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Plus size={20}/>
                  </div>
                </div>
                <div className="absolute -right-4 -bottom-4 text-slate-50 rotate-12 group-hover:scale-110 transition-transform">
                   <ShoppingCart size={80} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-96 bg-white border-t lg:border-t-0 lg:border-l shadow-2xl flex flex-col h-1/2 lg:h-full">
          <div className="p-6 border-b bg-slate-50 flex justify-between items-center">
            <h3 className="font-bold text-slate-700 flex items-center gap-2 text-lg">
              <ShoppingCart size={22} className="text-blue-600"/>
              Carrito ({posCart.reduce((acc, i) => acc + i.quantity, 0)})
            </h3>
            {posCart.length > 0 && <button className="text-red-500 p-2 hover:bg-red-50 rounded-lg transition-colors"><Trash2 size={18}/></button>}
          </div>
          <div className="flex-1 p-6 space-y-4 overflow-y-auto">
            {posCart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-slate-300 opacity-60 italic">
                <ShoppingCart size={48} className="mb-4" />
                <p>Carrito vacío</p>
                <p className="text-xs">Selecciona productos de la izquierda</p>
              </div>
            ) : (
              posCart.map(item => (
                <div key={item.id} className="flex justify-between items-center bg-slate-50 p-4 rounded-2xl border border-slate-100 animate-in slide-in-from-right duration-200">
                  <div className="flex-1 pr-4">
                    <p className="font-bold text-slate-800 text-sm truncate">{item.name}</p>
                    <p className="text-xs text-blue-600 font-bold">${item.price} c/u</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-3 bg-white border rounded-xl p-1">
                       <button
                        onClick={(e) => {e.stopPropagation(); removeFromPosCart(item.id)}}
                        className="p-1 hover:bg-slate-100 rounded-md text-slate-400 hover:text-red-500"
                       >
                         <Minus size={14}/>
                       </button>
                       <span className="font-black text-sm w-4 text-center">{item.quantity}</span>
                       <button
                        onClick={(e) => {e.stopPropagation(); addToPosCart(item)}}
                        className="p-1 hover:bg-slate-100 rounded-md text-slate-400 hover:text-blue-500"
                       >
                         <Plus size={14}/>
                       </button>
                    </div>
                    <p className="font-black text-slate-900">${(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="p-8 bg-slate-900 text-white rounded-t-[40px] shadow-[0_-20px_50px_rgba(0,0,0,0.2)]">
            <div className="flex justify-between mb-2 text-slate-400 font-medium">
              <span>Items</span>
              <span>{posCart.reduce((acc, i) => acc + i.quantity, 0)}</span>
            </div>
            <div className="flex justify-between mb-4 text-slate-400 font-medium">
              <span>Subtotal</span>
              <span>${total.toLocaleString()}</span>
            </div>
            <div className="flex justify-between mb-8 text-3xl font-black italic tracking-tighter">
              <span>TOTAL</span>
              <span>${total.toLocaleString()}</span>
            </div>
            <button
              onClick={handleCobrar}
              disabled={posCart.length === 0}
              className={`w-full py-5 rounded-2xl font-black text-lg tracking-[0.2em] shadow-xl transition-all active:scale-95 uppercase ${posCart.length > 0 ? 'bg-blue-600 hover:bg-blue-500' : 'bg-slate-800 text-slate-600 cursor-not-allowed'}`}
            >
              COBRAR AHORA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabletView;
