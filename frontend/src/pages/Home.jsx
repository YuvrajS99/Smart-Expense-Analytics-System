import { Link } from 'react-router-dom';
import { BarChart3, PieChart, ShieldCheck, Zap, Smartphone, ArrowRight, Activity, Wallet, CreditCard } from 'lucide-react';
import DemoDashboardPreview from '../components/DemoDashboardPreview';
import HowItWorksIllustration from '../components/HowItWorksIllustration';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      
      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 text-center">
        <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20 shadow-lg shadow-primary/5">
          ✨ Introducing FinTrack Pro 2.0
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-text-main">
          Track Your Expenses <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#a371f7]">Intelligently</span>
        </h1>
        <p className="text-xl text-text-muted mb-10 max-w-3xl mx-auto leading-relaxed">
          Take control of your financial future. FinTrack Pro simplifies personal finance management by visualizing expenses across categories and time periods in real-time.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/register" className="btn-primary sm:w-auto px-8 py-4 text-lg shadow-primary/25">
            Start Tracking Free
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
          <Link to="/login" className="px-8 py-4 text-lg font-medium bg-card border border-border rounded-lg hover:border-primary/50 text-text-main transition-colors shadow-sm">
            Login to Dashboard
          </Link>
        </div>
      </section>

      {/* Product Dashboard Visual */}
      <DemoDashboardPreview />

      {/* Features Grid */}
      <section className="w-full bg-card/50 border-y border-border py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-text-main">Everything you need to manage money</h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              Our comprehensive suite of tools gives you unparalleled insights into your spending habits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<PieChart className="w-8 h-8 text-primary" />}
              title="Category Insights"
              description="Automatically categorize your transactions and see exactly where your money goes."
            />
            <FeatureCard 
              icon={<BarChart3 className="w-8 h-8 text-[#a371f7]" />}
              title="Monthly Trends"
              description="Compare your spending month-over-month to stay on top of your financial goals."
            />
            <FeatureCard 
              icon={<Activity className="w-8 h-8 text-success" />}
              title="Real-time Analytics"
              description="Instant updates to your dashboard charts the moment an expense is logged."
            />
            <FeatureCard 
              icon={<ShieldCheck className="w-8 h-8 text-danger" />}
              title="Bank-grade Security"
              description="Your financial data is encrypted and securely stored with industry-leading standards."
            />
          </div>
        </div>
      </section>

      {/* How it Works Summary */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
         <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
               <h2 className="text-3xl font-bold text-text-main">How FinTrack Works</h2>
               <p className="text-text-muted text-lg">It's incredibly simple to start gaining profound insights into your daily finances. Forget the spreadsheets.</p>
               
               <div className="space-y-6">
                 <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                       <Wallet className="text-primary w-6 h-6" />
                    </div>
                    <div>
                       <h3 className="text-lg font-bold text-text-main">1. Record Expenses</h3>
                       <p className="text-text-muted mt-1">Log your transactions via our rapid entry form.</p>
                    </div>
                 </div>
                 
                 <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#a371f7]/20 flex items-center justify-center shrink-0">
                       <PieChart className="text-[#a371f7] w-6 h-6" />
                    </div>
                    <div>
                       <h3 className="text-lg font-bold text-text-main">2. Automatic Analytics</h3>
                       <p className="text-text-muted mt-1">Our engine breaks down the data into categories.</p>
                    </div>
                 </div>
                 
                 <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-success/20 flex items-center justify-center shrink-0">
                       <BarChart3 className="text-success w-6 h-6" />
                    </div>
                    <div>
                       <h3 className="text-lg font-bold text-text-main">3. Gain Clarity</h3>
                       <p className="text-text-muted mt-1">Review your trends and start saving money efficiently.</p>
                    </div>
                 </div>
               </div>
               
               <Link to="/how-it-works" className="inline-flex items-center text-primary font-medium hover:underline">
                 View detailed walkthrough <ArrowRight className="w-4 h-4 ml-1" />
               </Link>
            </div>
            
            <div className="flex-1 w-full bg-gradient-to-tr from-card to-background border border-border rounded-2xl p-4 sm:p-8 glass-container flex justify-center items-center shadow-2xl relative min-h-[400px]">
                <HowItWorksIllustration />
            </div>
         </div>
      </section>

      {/* Future Roadmap / UPI Alert */}
      <section className="w-full bg-card border-t border-border py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <Smartphone className="w-16 h-16 mx-auto text-[#a371f7] mb-6 animate-pulse" />
           <h2 className="text-3xl font-bold text-text-main mb-6">Coming Soon: Real-time UPI Tracking</h2>
           <p className="text-xl text-text-muted mb-8 leading-relaxed">
             We are actively developing deep integration with major UPI platforms. Soon, every digital payment you make will securely and automatically sync into your dashboard, eliminating the need for manual data entry entirely.
           </p>
           <Link to="/future-roadmap" className="inline-block px-8 py-3 rounded-lg border border-border text-text-main font-medium hover:bg-white/5 transition-colors">
             Explore our Future Roadmap
           </Link>
        </div>
      </section>

    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="glass-container p-6 flex flex-col items-start hover:-translate-y-1 transition-transform border border-border/50">
      <div className="w-16 h-16 rounded-xl bg-background border border-border flex items-center justify-center mb-6 shadow-md text-text-main">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-text-main">{title}</h3>
      <p className="text-text-muted text-sm leading-relaxed">{description}</p>
    </div>
  )
}
