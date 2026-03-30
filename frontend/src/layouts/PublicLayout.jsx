import PublicNavbar from '../components/PublicNavbar';
import Footer from '../components/Footer';

export default function PublicLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-background text-text-main font-sans transition-colors selection:bg-primary/30">
      <PublicNavbar />
      <main className="flex-1 flex flex-col pt-8 pb-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
