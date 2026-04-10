import React, { useState } from 'react';
import EcosystemSwitcher from './components/EcosystemSwitcher';
import EcommerceView from './components/EcommerceView';
import TabletView from './components/TabletView';
import ERPView from './components/ERPView';
import AdminView from './components/AdminView';
import ProposalView from './components/ProposalView';

const App = () => {
  const [currentView, setCurrentView] = useState('ecommerce');

  return (
    <div className="font-sans antialiased text-slate-900 overflow-x-hidden">
      <EcosystemSwitcher currentView={currentView} setCurrentView={setCurrentView} />

      {currentView === 'ecommerce' && <EcommerceView />}
      {currentView === 'tablet' && <TabletView />}
      {currentView === 'warehouse' && <ERPView />}
      {currentView === 'admin' && <AdminView />}
      {currentView === 'proposal' && <ProposalView />}

      {/* Footer del Simulador */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur shadow-2xl border px-6 py-2 rounded-full flex items-center gap-4 z-50 transition-all hover:scale-105 border-slate-200">
        <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Demo Casami v2.0</span>
        <div className="flex gap-2">
          <div className={`w-3 h-3 rounded-full transition-colors ${currentView === 'ecommerce' ? 'bg-blue-600' : 'bg-slate-200'}`}></div>
          <div className={`w-3 h-3 rounded-full transition-colors ${currentView === 'tablet' ? 'bg-blue-600' : 'bg-slate-200'}`}></div>
          <div className={`w-3 h-3 rounded-full transition-colors ${currentView === 'warehouse' ? 'bg-blue-600' : 'bg-slate-200'}`}></div>
          <div className={`w-3 h-3 rounded-full transition-colors ${currentView === 'admin' ? 'bg-blue-600' : 'bg-slate-200'}`}></div>
          <div className={`w-3 h-3 rounded-full transition-colors ${currentView === 'proposal' ? 'bg-orange-500' : 'bg-slate-200'}`}></div>
        </div>
      </div>
    </div>
  );
};

export default App;
