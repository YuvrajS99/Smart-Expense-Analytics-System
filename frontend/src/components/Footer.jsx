import { Link } from 'react-router-dom';
import { Github, Linkedin, IndianRupee } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-primary to-[#a371f7] flex items-center justify-center text-white">
                <IndianRupee className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-text-main">FinTrack Pro</span>
            </div>
            <p className="text-sm text-text-muted mb-4">
              Intelligent expense tracking and financial analytics for the modern professional.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/YuvrajS99/Smart-Expense-Analytics-System" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository" className="text-text-muted hover:text-primary hover:scale-110 transition-all cursor-pointer">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/yuvrajs779" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-text-muted hover:text-[#0a66c2] hover:scale-110 transition-all cursor-pointer dark:hover:text-[#3b82f6]">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text-main uppercase tracking-wider mb-4">FinTrack</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-text-muted hover:text-text-main transition-colors">About</Link></li>
              <li><Link to="/how-it-works" className="text-sm text-text-muted hover:text-text-main transition-colors">How It Works</Link></li>
              <li><Link to="/contact" className="text-sm text-text-muted hover:text-text-main transition-colors">Contact</Link></li>
              <li><Link to="/future-roadmap" className="text-sm text-text-muted hover:text-text-main transition-colors text-primary font-medium">✨ Future Roadmap</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text-main uppercase tracking-wider mb-4">Product</h3>
            <ul className="space-y-3">
              <li><Link to="/dashboard" className="text-sm text-text-muted hover:text-text-main transition-colors">Dashboard</Link></li>
              <li><Link to="/transactions" className="text-sm text-text-muted hover:text-text-main transition-colors">Transactions</Link></li>
              <li><Link to="/settings" className="text-sm text-text-muted hover:text-text-main transition-colors">Settings</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text-main uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link to="/privacy" className="text-sm text-text-muted hover:text-text-main transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-text-muted hover:text-text-main transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-border flex justify-center items-center text-center">
          <p className="text-sm text-text-muted">
            © {new Date().getFullYear()} Yuvraj Sanap • Java Full Stack Developer
          </p>
        </div>
      </div>
    </footer>
  );
}
