import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ThemeToggle from './ThemeToggle';
import { IndianRupee, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function PublicNavbar() {
  const { token } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-background/80 border-b border-border transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-primary to-[#a371f7] flex items-center justify-center text-white">
              <IndianRupee className="w-5 h-5" />
            </div>
            <Link to="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#a371f7]">
              FinTrack Pro
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium text-text-muted hover:text-text-main transition-colors">Home</Link>
            <Link to="/about" className="text-sm font-medium text-text-muted hover:text-text-main transition-colors">About</Link>
            <Link to="/how-it-works" className="text-sm font-medium text-text-muted hover:text-text-main transition-colors">How It Works</Link>
            <Link to="/contact" className="text-sm font-medium text-text-muted hover:text-text-main transition-colors">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            {token ? (
              <Link to="/dashboard" className="text-sm px-4 py-2 font-medium bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
                Dashboard
              </Link>
            ) : (
              <div className="flex items-center gap-3">
                <Link to="/login" className="text-sm font-medium text-text-main hover:text-primary transition-colors">
                  Login
                </Link>
                <Link to="/register" className="text-sm px-4 py-2 font-medium bg-primary text-white rounded-md hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-text-muted hover:text-text-main"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-text-main hover:bg-card">Home</Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-text-main hover:bg-card">About</Link>
            <Link to="/how-it-works" className="block px-3 py-2 rounded-md text-base font-medium text-text-main hover:bg-card">How It Works</Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-text-main hover:bg-card">Contact</Link>
            
            <div className="pt-4 border-t border-border mt-4">
              {token ? (
                <Link to="/dashboard" className="block w-full text-center px-4 py-2 bg-primary text-white rounded-md font-medium">Dashboard</Link>
              ) : (
                <div className="flex flex-col gap-2 px-3">
                  <Link to="/login" className="block text-center px-4 py-2 border border-border rounded-md font-medium text-text-main">Login</Link>
                  <Link to="/register" className="block text-center px-4 py-2 bg-primary text-white rounded-md font-medium">Sign Up</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
