import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Wallet, CreditCard, Settings, LogOut, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Sidebar({ isOpen, close }) {
  const { logoutContext } = useAuth();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
          onClick={close}
        />
      )}
      
      {/* Sidebar Content */}
      <aside className={`fixed md:static inset-y-0 left-0 z-50 w-64 glass-container flex flex-col h-full md:h-[calc(100vh-2rem)] md:m-4 shadow-2xl transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="p-6 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Wallet className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold tracking-tight text-text-main">FinTrack</span>
          </div>
          <button className="md:hidden text-text-muted hover:text-text-main" onClick={close}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          <NavLink 
            to="/dashboard" 
            onClick={close}
            className={({isActive}) => `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive ? 'bg-primary/10 text-primary font-semibold' : 'text-text-muted hover:bg-card hover:text-text-main'}`}
          >
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </NavLink>
          
          <NavLink 
            to="/transactions" 
            onClick={close}
            className={({isActive}) => `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive ? 'bg-primary/10 text-primary font-semibold' : 'text-text-muted hover:bg-card hover:text-text-main'}`}
          >
            <CreditCard className="w-5 h-5" />
            Transactions
          </NavLink>

          <NavLink 
            to="/settings" 
            onClick={close}
            className={({isActive}) => `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive ? 'bg-primary/10 text-primary font-semibold' : 'text-text-muted hover:bg-card hover:text-text-main'}`}
          >
            <Settings className="w-5 h-5" />
            Settings
          </NavLink>
        </nav>

        <div className="p-4 border-t border-border mt-auto">
          <button 
            onClick={logoutContext}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-text-muted hover:bg-danger/10 hover:text-danger transition-colors font-medium"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}
