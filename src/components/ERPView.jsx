import React, { useState } from 'react';
import { LayoutDashboard, Truck, Package, Database, Edit3, Save, X, PlusCircle } from 'lucide-react';
import { useStore } from '../context/StoreContext';

const ERPView = () => {
  const { products, updateStock, addProduct } = useStore();
  const [editingId, setEditingId] = useState(null);
  const [tempStock, setTempStock] = useState(0);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: '', sku: '', price: '', stock: '', cat: 'Motor' });

  const handleEdit = (p) => {
    setEditingId(p.id);
    setTempStock(p.stock);
  };

  const handleSave = (id) => {
    updateStock(id, tempStock);
    setEditingId(null);
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    addProduct({
      ...newProduct,
      price: parseFloat(newProduct.price),
      stock: parseInt(newProduct.stock)
    });
    setShowAddForm(false);
    setNewProduct({ name: '', sku: '', price: '', stock: '', cat: 'Motor' });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      <div className="w-full md:w-64 bg-slate-900 text-white flex flex-col p-6 space-y-4 shrink-0">
        <div className="text-2xl font-black italic text-blue-500 mb-8 tracking-tighter">CASAMI ERP</div>
        <div className="space-y-2">
           <div className="flex items-center gap-3 p-3 bg-blue-600 rounded-xl font-bold cursor-pointer transition-all hover:translate-x-1"><LayoutDashboard size={20}/> Dashboard</div>
           <div className="flex items-center gap-3 p-3 hover:bg-slate-800 rounded-xl transition-all hover:translate-x-1 cursor-pointer"><Truck size={20}/> Logística</div>
           <div className="flex items-center gap-3 p-3 hover:bg-slate-800 rounded-xl transition-all hover:translate-x-1 cursor-pointer"><Package size={20}/> Inventario</div>
           <div className="flex items-center gap-3 p-3 hover:bg-slate-800 rounded-xl transition-all hover:translate-x-1 cursor-pointer"><Database size={20}/> Backup Nube</div>
        </div>
      </div>

      <div className="flex-1 overflow-x-hidden">
        <header className="h-16 bg-white border-b px-8 flex items-center justify-between sticky top-0 z-30">
          <h2 className="font-bold text-slate-500 uppercase tracking-widest text-sm">Operaciones de Almacén</h2>
          <div className="flex items-center gap-2 text-xs font-bold text-green-500 bg-green-50 px-3 py-1 rounded-full border border-green-100">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div> SINCRONIZADO
          </div>
        </header>

        <div className="p-4 md:p-8">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm transition-all hover:shadow-md">
                <p className="text-slate-400 text-[10px] font-bold uppercase mb-1">Items Totales</p>
                <p className="text-2xl md:text-3xl font-black text-slate-800">{products.length}</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm transition-all hover:shadow-md">
                <p className="text-slate-400 text-[10px] font-bold uppercase mb-1">Bajo Stock</p>
                <p className="text-2xl md:text-3xl font-black text-red-500">{products.filter(p => p.stock < 5).length}</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm transition-all hover:shadow-md">
                <p className="text-slate-400 text-[10px] font-bold uppercase mb-1">Stock Total</p>
                <p className="text-2xl md:text-3xl font-black text-blue-600">{products.reduce((acc, p) => acc + p.stock, 0)}</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm transition-all hover:shadow-md">
                <p className="text-slate-400 text-[10px] font-bold uppercase mb-1">Valor Inventario</p>
                <p className="text-2xl md:text-3xl font-black text-slate-800">${(products.reduce((acc, p) => acc + (p.stock * p.price), 0) / 1000000).toFixed(1)}M</p>
              </div>
           </div>

           {showAddForm && (
             <div className="bg-white p-6 rounded-3xl border-2 border-blue-500 shadow-xl mb-8 animate-in slide-in-from-top duration-300">
               <div className="flex justify-between items-center mb-6">
                 <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2"><PlusCircle className="text-blue-600"/> Registrar Nuevo Producto</h3>
                 <button onClick={() => setShowAddForm(false)} className="text-slate-400 hover:text-red-500"><X/></button>
               </div>
               <form onSubmit={handleAddProduct} className="grid grid-cols-1 md:grid-cols-5 gap-4">
                 <div className="md:col-span-2">
                   <label className="text-[10px] font-bold text-slate-400 uppercase">Nombre del Producto</label>
                   <input required type="text" className="w-full bg-slate-50 border-none rounded-xl p-3 mt-1" placeholder="Ej. Amortiguador..." value={newProduct.name} onChange={e => setNewProduct({...newProduct, name: e.target.value})} />
                 </div>
                 <div>
                   <label className="text-[10px] font-bold text-slate-400 uppercase">SKU</label>
                   <input required type="text" className="w-full bg-slate-50 border-none rounded-xl p-3 mt-1" placeholder="SKU-123" value={newProduct.sku} onChange={e => setNewProduct({...newProduct, sku: e.target.value})} />
                 </div>
                 <div>
                   <label className="text-[10px] font-bold text-slate-400 uppercase">Precio</label>
                   <input required type="number" className="w-full bg-slate-50 border-none rounded-xl p-3 mt-1" placeholder="0.00" value={newProduct.price} onChange={e => setNewProduct({...newProduct, price: e.target.value})} />
                 </div>
                 <div>
                   <label className="text-[10px] font-bold text-slate-400 uppercase">Stock Inicial</label>
                   <input required type="number" className="w-full bg-slate-50 border-none rounded-xl p-3 mt-1" placeholder="0" value={newProduct.stock} onChange={e => setNewProduct({...newProduct, stock: e.target.value})} />
                 </div>
                 <div className="md:col-span-5 flex justify-end">
                   <button type="submit" className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all">GUARDAR PRODUCTO</button>
                 </div>
               </form>
             </div>
           )}

           <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden overflow-x-auto">
             <div className="p-6 border-b flex flex-col sm:flex-row justify-between items-center gap-4">
               <h3 className="font-bold text-slate-800">Control de Entradas / Salidas</h3>
               {!showAddForm && (
                 <button onClick={() => setShowAddForm(true)} className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2 rounded-xl text-sm font-bold flex items-center gap-2 transition-all active:scale-95">
                   <PlusCircle size={18}/> AGREGAR PIEZA
                 </button>
               )}
             </div>
             <table className="w-full text-left border-collapse">
                <thead className="bg-slate-50 text-slate-400 text-[10px] uppercase font-bold tracking-widest border-b border-slate-100">
                  <tr>
                    <th className="p-6">SKU</th>
                    <th className="p-6">Producto</th>
                    <th className="p-6">Localización</th>
                    <th className="p-6">Stock Actual</th>
                    <th className="p-6 text-right">Acción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {products.map(p => (
                    <tr key={p.id} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="p-6 font-mono font-bold text-blue-600 text-xs">{p.sku}</td>
                      <td className="p-6">
                        <p className="font-bold text-slate-700">{p.name}</p>
                        <p className="text-[10px] text-slate-400 uppercase font-bold">{p.cat}</p>
                      </td>
                      <td className="p-6 text-slate-400 italic text-xs">ESTANTE B-12</td>
                      <td className="p-6">
                        {editingId === p.id ? (
                          <input
                            type="number"
                            className="w-20 bg-blue-50 border-2 border-blue-200 rounded-lg p-1 font-bold text-blue-600 focus:outline-none"
                            value={tempStock}
                            autoFocus
                            onChange={e => setTempStock(e.target.value)}
                          />
                        ) : (
                          <span className={`font-black ${p.stock < 5 ? 'text-red-500' : 'text-slate-800'}`}>{p.stock}</span>
                        )}
                      </td>
                      <td className="p-6 text-right">
                        {editingId === p.id ? (
                          <div className="flex justify-end gap-2">
                            <button onClick={() => handleSave(p.id)} className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"><Save size={16}/></button>
                            <button onClick={() => setEditingId(null)} className="p-2 bg-slate-200 text-slate-500 rounded-lg hover:bg-slate-300 transition-all"><X size={16}/></button>
                          </div>
                        ) : (
                          <button
                            onClick={() => handleEdit(p)}
                            className="text-slate-400 hover:text-blue-600 p-2 hover:bg-blue-50 rounded-lg transition-all"
                          >
                            <Edit3 size={18}/>
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
             </table>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ERPView;
