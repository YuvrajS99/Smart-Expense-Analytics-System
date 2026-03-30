import { CheckCircle2, UserPlus, CreditCard, LayoutDashboard, TrendingUp, PieChart } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      title: "Create an Account",
      desc: "Sign up securely in seconds. Your data is encrypted and private.",
      color: "text-primary",
      bgClass: "bg-primary/10",
      borderClass: "border-primary/20",
      icon: <UserPlus className="w-full h-full p-6 text-primary" />
    },
    {
      title: "Add Daily Expenses",
      desc: "Log your purchases effortlessly through our streamlined interface.",
      color: "text-[#a371f7]",
      bgClass: "bg-[#a371f7]/10",
      borderClass: "border-[#a371f7]/20",
      icon: <CreditCard className="w-full h-full p-6 text-[#a371f7]" />
    },
    {
      title: "Categorize Transactions",
      desc: "Assign tags like Food, Transport, or Utilities for better organization.",
      color: "text-success",
      bgClass: "bg-success/10",
      borderClass: "border-success/20",
      icon: <PieChart className="w-full h-full p-6 text-success" />
    },
    {
      title: "View Real-time Analytics",
      desc: "Watch your dashboard generate beautiful, interactive charts instantly.",
      color: "text-danger",
      bgClass: "bg-danger/10",
      borderClass: "border-danger/20",
      icon: <LayoutDashboard className="w-full h-full p-6 text-danger" />
    },
    {
      title: "Monitor Monthly Trends",
      desc: "Compare spending across months to see if you're hitting your financial goals.",
      color: "text-primary",
      bgClass: "bg-primary/10",
      borderClass: "border-primary/20",
      icon: <TrendingUp className="w-full h-full p-6 text-primary" />
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-text-main">How It Works</h1>
        <p className="text-xl text-text-muted max-w-2xl mx-auto">
          Start gaining insights into your finances in just a few simple steps.
        </p>
      </div>

      <div className="space-y-16">
        {steps.map((step, index) => (
          <div key={index} className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
            
            {/* Step Text */}
            <div className="flex-1 space-y-4 text-center md:text-left">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full border ${step.borderClass} ${step.bgClass} text-xl font-bold ${step.color} shadow-lg shadow-black/5`}>
                {index + 1}
              </div>
              <h3 className="text-3xl font-bold text-text-main">{step.title}</h3>
              <p className="text-lg text-text-muted">{step.desc}</p>
              
              <ul className="space-y-3 pt-4 hidden md:block">
                {[1, 2, 3].map(i => (
                  <li key={i} className="flex items-center gap-3 text-text-muted text-sm font-medium">
                    <CheckCircle2 className="w-5 h-5 text-success" />
                    Feature detail confirmed explicitly
                  </li>
                ))}
              </ul>
            </div>

            {/* Step Icon Graphic representation */}
            <div className="flex-1 w-full max-w-sm mx-auto">
              <div className={`aspect-square sm:aspect-video md:aspect-square glass-container p-6 flex items-center justify-center relative overflow-hidden group shadow-2xl`}>
                <div className={`absolute inset-0 ${step.bgClass} opacity-50 group-hover:opacity-100 transition-colors duration-500`} />
                <div className={`relative z-10 w-4/5 h-4/5 rounded-2xl bg-card border ${step.borderClass} flex shadow-xl transform transition-transform group-hover:scale-105 duration-500`}>
                   {step.icon}
                </div>
              </div>
            </div>
            
          </div>
        ))}
      </div>

    </div>
  );
}
