import { Smartphone, Sparkles, AlertTriangle, Building, CreditCard } from 'lucide-react';

export default function FutureRoadmap() {
  const roadmapItems = [
    {
      icon: <CreditCard />,
      title: "Real-time UPI Integration",
      desc: "Connect securely with major UPI platforms to automatically log your payments without manual entry. Never miss a small transaction again.",
      status: "In Development",
      color: "text-[#a371f7]",
      bgColor: "bg-[#a371f7]/20"
    },
    {
      icon: <Building />,
      title: "Bank API Integration",
      desc: "Secure read-only integration with banking APIs to import your credit card and checking account transaction history automatically.",
      status: "Planned Q2",
      color: "text-primary",
      bgColor: "bg-primary/20"
    },
    {
      icon: <Sparkles />,
      title: "AI-Powered Insights",
      desc: "Machine learning algorithms that analyze your spending patterns to offer personalized saving recommendations and categorize transactions automatically.",
      status: "Planned Q3",
      color: "text-success",
      bgColor: "bg-success/20"
    },
    {
      icon: <AlertTriangle />,
      title: "Smart Budget Alerts",
      desc: "Set specific category limits and receive real-time push notifications when you are close to exceeding your monthly budget.",
      status: "Coming Soon",
      color: "text-danger",
      bgColor: "bg-danger/20"
    },
    {
      icon: <Smartphone />,
      title: "Native Mobile App",
      desc: "A dedicated iOS and Android application optimized for on-the-go expense logging, receipt scanning, and quick analytical views.",
      status: "Planned Q4",
      color: "text-text-main",
      bgColor: "bg-text-main/10"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Future Roadmap</h1>
        <p className="text-xl text-text-muted max-w-2xl mx-auto">
          We are constantly iterating. Here is a look at what we are building next to make FinTrack Pro the ultimate financial tool.
        </p>
      </div>

      <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-border">
        
        {roadmapItems.map((item, idx) => (
          <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            
            {/* Center Timeline Node */}
            <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-background ${item.bgColor} ${item.color} shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-0 md:left-1/2 -mb-2`}>
              <div className="w-5 h-5">{item.icon}</div>
            </div>

            {/* Content Box */}
            <div className="ml-14 md:ml-0 md:w-[calc(50%-2.5rem)] glass-container p-6 relative">
               {/* Arrow */}
               <div className="absolute top-5 -left-3 md:group-odd:-left-3 md:group-even:left-auto md:group-even:-right-3 w-6 h-6 bg-card border-l border-t md:group-even:border-l-0 md:group-even:border-r md:group-even:border-b-0 border-border transform -rotate-45 md:group-even:rotate-45" />
               
               <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between mb-4">
                 <h3 className="text-xl font-bold">{item.title}</h3>
                 <span className={`inline-block mt-2 md:mt-0 px-3 py-1 text-xs font-semibold rounded-full ${item.bgColor} ${item.color}`}>
                   {item.status}
                 </span>
               </div>
               <p className="text-text-muted relative z-10">{item.desc}</p>
            </div>
            
          </div>
        ))}
        
      </div>

    </div>
  );
}
