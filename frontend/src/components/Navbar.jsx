import { useAuth } from '../context/AuthContext';
import { Bell, Search, Menu, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ toggleMobileNav }) {
  const { user } = useAuth();
  
  return (
    <header className="glass-container m-4 lg:ml-0 px-6 py-4 flex justify-between items-center shadow-md">
      <div className="flex items-center gap-4">
        <button onClick={toggleMobileNav} className="md:hidden text-text-muted hover:text-text-main">
          <Menu className="w-6 h-6" />
        </button>

        <Link to="/" className="hidden lg:flex items-center gap-2 text-sm font-medium text-text-muted hover:text-primary transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        
        <div className="hidden lg:flex items-center bg-background rounded-full px-4 py-2 border border-border focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all ml-4">
            <Search className="w-4 h-4 text-text-muted mr-2" />
            <input type="text" placeholder="Search transactions..." className="bg-transparent border-none outline-none text-sm text-text-main placeholder-text-muted w-64" />
        </div>
      </div>
      
      <div className="flex items-center gap-4 sm:gap-6">
        <ThemeToggle />
        
        {/* Mobile Back button */}
        <Link to="/" className="lg:hidden text-text-muted hover:text-primary transition-colors" aria-label="Back to Home">
           <ArrowLeft className="w-5 h-5" />
        </Link>

        <button className="relative text-text-muted hover:text-text-main transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-danger rounded-full pointer-events-none"></span>
        </button>
        
        <div className="flex items-center gap-3 pl-4 sm:pl-6 border-l border-border">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-[#a371f7] flex items-center justify-center text-sm font-bold text-white shadow-lg">
            {user?.username?.charAt(0).toUpperCase() || 'U'}
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-text-main">{user?.username || 'User'}</p>
            <p className="text-xs text-text-muted">{user?.email || 'user@example.com'}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
