import React from 'react';
import { DollarSign, Calendar, CheckCircle, Plus, Rocket } from 'lucide-react';

const ProposalView = () => (
  <div className="min-h-screen bg-slate-50 p-8 flex flex-col items-center">
    <div className="max-w-4xl w-full">
      <div className="text-center mb-12">
         <h2 className="text-4xl font-black text-slate-900 mb-2 italic">PROPUESTA DE TRANSFORMACIÓN DIGITAL</h2>
         <p className="text-blue-600 font-bold tracking-widest uppercase text-sm">CASAMI x TECNOLOGÍA AL COSTO</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Columna Inversión */}
        <div className="bg-white p-8 rounded-[40px] shadow-xl border-2 border-slate-100">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3"><DollarSign className="text-green-600" /> Inversión Inicial</h3>
          <div className="space-y-6">
             <div className="flex justify-between items-center border-b pb-4 border-slate-50">
                <div>
                  <p className="font-bold text-slate-800">Dominio & Hosting</p>
                  <p className="text-xs text-slate-500 italic">Tu propio www.casami.com</p>
                </div>
                <p className="font-black text-slate-900">$1,500</p>
             </div>
             <div className="flex justify-between items-center border-b pb-4 border-slate-50">
                <div>
                  <p className="font-bold text-slate-800">E-Commerce & ERP</p>
                  <p className="text-xs text-slate-500 italic">Sistema completo de tienda e inventario</p>
                </div>
                <p className="font-black text-slate-900">$6,500</p>
             </div>
             <div className="flex justify-between items-center border-b pb-4 border-slate-50">
                <div>
                  <p className="font-bold text-slate-800">CRM & Cloud Setup</p>
                  <p className="text-xs text-slate-500 italic">100GB en Google Cloud para tu info</p>
                </div>
                <p className="font-black text-slate-900">$2,000</p>
             </div>
             <div className="bg-slate-900 p-6 rounded-3xl text-white flex justify-between items-center">
                <span className="font-bold uppercase tracking-widest text-xs">TOTAL ESTIMADO</span>
                <span className="text-3xl font-black italic">$10,000 MXN</span>
             </div>
             <p className="text-[10px] text-slate-400 text-center italic mt-4">* Precio simbólico de apoyo para hardware y despliegue inicial</p>
          </div>
        </div>

        {/* Columna Tiempos */}
        <div className="bg-blue-600 p-8 rounded-[40px] shadow-xl text-white">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-3"><Calendar /> Cronograma de Salida</h3>
          <div className="space-y-8">
             <div className="flex gap-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold border-2 border-white shrink-0">1</div>
                <div>
                  <p className="font-bold text-lg">Semana 1: Lanzamiento</p>
                  <p className="text-blue-100 text-sm">Dominio activo, tienda en línea funcionando y sistemas ERP/CRM listos en la nube.</p>
                </div>
             </div>
             <div className="flex gap-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold border-2 border-white shrink-0">2</div>
                <div>
                  <p className="font-bold text-lg">Semana 2: Carga de Datos</p>
                  <p className="text-blue-100 text-sm">Vaciado total de tu inventario actual, fotos de piezas y capacitación rápida de uso.</p>
                </div>
             </div>
             <div className="flex gap-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-blue-600 shrink-0"><CheckCircle /></div>
                <div>
                  <p className="font-bold text-lg italic">¡VENDIENDO!</p>
                  <p className="text-blue-100 text-sm">A los 15 días ya tienes tu local digital trayendo clientes de todo México.</p>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Mensaje de cierre */}
      <div className="bg-white p-10 rounded-[40px] border-4 border-blue-600 shadow-2xl relative overflow-hidden">
         <div className="relative z-10 text-center">
            <h4 className="text-2xl font-black text-slate-900 mb-4 italic uppercase italic">El valor real: $50,000 MXN (3 meses)</h4>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Este tipo de proyectos complejos normalmente toman meses de desarrollo. <br/>
              Para <strong>Casami</strong>, lo hacemos en <strong>2 semanas</strong> aprovechando tecnología AI de Google.
            </p>
            <div className="flex items-center justify-center gap-4 text-blue-600 font-black text-xl italic">
              <span>ESTA ES UNA ALIANZA ENTRE BROTHERS</span>
              <Plus size={24}/>
              <span>APOYO POR EL BEBÉ QUE VIENE</span>
            </div>
         </div>
         <Rocket className="absolute -right-10 -bottom-10 text-slate-50 rotate-[320deg]" size={300} />
      </div>
    </div>
  </div>
);

export default ProposalView;
