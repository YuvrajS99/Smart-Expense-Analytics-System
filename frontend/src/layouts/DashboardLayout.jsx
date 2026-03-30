import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { useState } from 'react';

export default function DashboardLayout({ children }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => setMobileNavOpen(!mobileNavOpen);

  return (
    <div className="flex h-screen bg-background text-text-main overflow-hidden transition-colors">
      <Sidebar isOpen={mobileNavOpen} close={() => setMobileNavOpen(false)} />
      <main className="flex-1 flex flex-col h-full overflow-y-auto">
        <Navbar toggleMobileNav={toggleMobileNav} />
        <div className="px-4 pb-8 max-w-7xl mx-auto w-full space-y-6">
          {children}
        </div>
      </main>
    </div>
  );
}
