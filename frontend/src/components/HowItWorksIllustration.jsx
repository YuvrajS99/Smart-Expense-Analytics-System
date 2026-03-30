import React from 'react';
import { PieChart, Wallet, ArrowUpRight, TrendingUp, Activity, User } from 'lucide-react';

export default function HowItWorksIllustration() {
  return (
    <>
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
          }
          @keyframes float-fast {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
          @keyframes float-reverse {
            0% { transform: translateY(0px); }
            50% { transform: translateY(15px); }
            100% { transform: translateY(0px); }
          }
          @keyframes pulse-soft {
            0%, 100% { opacity: 0.4; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(1.05); }
          }
          .animate-float { animation: float 6s ease-in-out infinite; }
          .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
          .animate-float-reverse { animation: float-reverse 5s ease-in-out infinite; }
          .animate-pulse-soft { animation: pulse-soft 4s ease-in-out infinite; }
        `}
      </style>
      
      <div className="relative w-full h-full min-h-[450px] flex items-center justify-center p-4">
        
        {/* Abstract Glowing Backgrounds */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[80px] animate-pulse-soft"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-[#a371f7]/20 rounded-full blur-[80px] animate-pulse-soft" style={{ animationDelay: '1.5s' }}></div>

        {/* Center Main Dashboard Panel - The "Laptop/App" perspective */}
        <div className="relative z-10 w-full max-w-[320px] bg-background/80 backdrop-blur-xl border border-border rounded-2xl shadow-2xl overflow-hidden animate-float">
          {/* Mac-style Window Header */}
          <div className="bg-card w-full h-8 flex items-center px-4 border-b border-border/50 space-x-2">
            <div className="w-2.5 h-2.5 rounded-full bg-danger/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-warning/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-success/80"></div>
          </div>
          
          <div className="p-5">
            {/* Header info */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <p className="text-text-muted text-xs font-medium">Total Balance</p>
                <p className="text-2xl font-bold text-text-main mt-1">$12,450.00</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                <Wallet className="w-5 h-5 text-primary" />
              </div>
            </div>

            {/* Main Chart Graphic */}
            <div className="w-full bg-card/50 rounded-xl p-4 border border-border/50 mb-4 hover:border-primary/30 transition-colors cursor-default">
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs font-semibold text-text-main flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-primary" />
                  Expense Trends
                </p>
                <div className="flex items-center text-xs text-success font-medium bg-success/10 px-2 py-0.5 rounded-full">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +2.4%
                </div>
              </div>
              <div className="h-24 w-full relative flex items-end justify-between">
                 {/* Fake SVG Line Chart */}
                 <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 40">
                    <path 
                      d="M0,40 L10,30 L25,35 L40,15 L55,25 L75,5 L100,20 L100,40 Z" 
                      fill="url(#chart-gradient)" 
                      opacity="0.3"
                    />
                    <path 
                      d="M0,40 L10,30 L25,35 L40,15 L55,25 L75,5 L100,20" 
                      fill="none" 
                      stroke="currentColor" 
                      className="text-primary" 
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <defs>
                      <linearGradient id="chart-gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="currentColor" className="text-primary" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="currentColor" className="text-primary" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                 </svg>
                 {/* Decorative Data Points */}
                 <div className="absolute left-[40%] top-[37.5%] w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(79,70,229,0.8)] border border-background"></div>
                 <div className="absolute left-[75%] top-[12.5%] w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(79,70,229,0.8)] border border-background"></div>
              </div>
            </div>

            {/* Mini Stat Cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-card/50 border border-border/50 rounded-lg p-3 hover:bg-card transition-colors">
                 <p className="text-[10px] text-text-muted mb-1">Income</p>
                 <p className="text-sm font-bold text-text-main">$4,200</p>
                 <div className="w-full h-1.5 mt-2 bg-background border border-border/50 rounded-full overflow-hidden">
                    <div className="h-full bg-success w-[70%] rounded-full"></div>
                 </div>
              </div>
              <div className="bg-card/50 border border-border/50 rounded-lg p-3 hover:bg-card transition-colors">
                 <p className="text-[10px] text-text-muted mb-1">Expenses</p>
                 <p className="text-sm font-bold text-text-main">$2,850</p>
                 <div className="w-full h-1.5 mt-2 bg-background border border-border/50 rounded-full overflow-hidden">
                    <div className="h-full bg-[#a371f7] w-[45%] rounded-full"></div>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Element 1 - Top Right - Pie Chart Analysis */}
        <div className="absolute top-8 right-2 sm:right-6 lg:-right-4 z-20 w-44 bg-card/90 backdrop-blur-md border border-border rounded-xl shadow-2xl p-4 animate-float-reverse hover:border-primary/40 transition-colors cursor-default">
          <div className="flex items-center gap-3 mb-3">
             <div className="w-8 h-8 rounded-full bg-[#a371f7]/10 flex items-center justify-center border border-[#a371f7]/20">
                <PieChart className="w-4 h-4 text-[#a371f7]" />
             </div>
             <div>
                <p className="text-xs font-bold text-text-main">Categories</p>
                <p className="text-[10px] text-text-muted">Top Spending</p>
             </div>
          </div>
          <div className="flex items-center justify-center py-2 relative">
             <svg viewBox="0 0 36 36" className="w-16 h-16 transform -rotate-90 drop-shadow-md">
                <circle cx="18" cy="18" r="15.91549430918954" fill="transparent" stroke="currentColor" className="text-background" strokeWidth="4"></circle>
                <circle cx="18" cy="18" r="15.91549430918954" fill="transparent" stroke="currentColor" className="text-primary" strokeWidth="4" strokeDasharray="45 55" strokeDashoffset="0"></circle>
                <circle cx="18" cy="18" r="15.91549430918954" fill="transparent" stroke="currentColor" className="text-[#a371f7]" strokeWidth="4" strokeDasharray="30 70" strokeDashoffset="-45"></circle>
                <circle cx="18" cy="18" r="15.91549430918954" fill="transparent" stroke="currentColor" className="text-success" strokeWidth="4" strokeDasharray="25 75" strokeDashoffset="-75"></circle>
             </svg>
             <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[10px] font-bold text-text-main">45%</span>
             </div>
          </div>
        </div>

        {/* Floating Element 2 - Bottom Left - Recent Transaction */}
        <div className="absolute bottom-12 left-0 sm:left-4 lg:-left-6 z-20 w-52 bg-card/90 backdrop-blur-md border border-border rounded-xl shadow-2xl p-3 animate-float-fast hover:border-primary/40 transition-colors cursor-default">
          <div className="flex justify-between items-center mb-2">
            <p className="text-[9px] font-bold text-text-muted uppercase tracking-wider">Recent Transaction</p>
            <span className="text-[9px] text-text-muted">Just now</span>
          </div>
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0">
                <ArrowUpRight className="w-4 h-4 text-primary" />
             </div>
             <div className="flex-1 overflow-hidden">
                <p className="text-sm font-semibold text-text-main truncate">Apple Store</p>
                <p className="text-[10px] text-[#a371f7] font-medium">Electronics</p>
             </div>
             <div className="text-right">
                <p className="text-sm font-bold text-text-main">-$999</p>
             </div>
          </div>
        </div>

        {/* Floating Element 3 - Decorative User Avatar (Top Left) */}
        <div className="absolute top-20 left-4 sm:left-10 z-0 w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center shadow-lg animate-float-fast hover:scale-110 transition-transform cursor-pointer" style={{ animationDelay: '1s' }}>
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary/20 to-[#a371f7]/20 flex items-center justify-center border border-border">
            <User className="w-5 h-5 text-primary" />
          </div>
        </div>

      </div>
    </>
  );
}
