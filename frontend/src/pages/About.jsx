import { Target, TrendingUp, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">About FinTrack Pro</h1>
        <p className="text-xl text-text-muted">
          Our mission is to simplify personal finance management and empower individuals to achieve financial freedom.
        </p>
      </div>

      <div className="glass-container p-8 md:p-12 mb-12">
        <h2 className="text-2xl font-bold mb-4">The Problem</h2>
        <p className="text-text-muted text-lg leading-relaxed mb-8">
          In today's fast-paced world, it's easy to lose track of where your money goes. Between subscriptions, daily coffees, and unexpected bills, financial awareness often takes a back seat. Many people rely on scattered spreadsheets or confusing banking apps that offer little to no real insight into spending habits.
        </p>
        
        <h2 className="text-2xl font-bold mb-4">Why Expense Tracking Matters</h2>
        <p className="text-text-muted text-lg leading-relaxed mb-2">
          Understanding your spending is the foundational step to building wealth. By tracking expenses, you can:
        </p>
        <ul className="list-disc list-inside text-text-muted text-lg space-y-2 mb-8 ml-4">
          <li>Identify wasteful spending patterns</li>
          <li>Set realistic budgets that you can actually stick to</li>
          <li>Save more efficiently for long-term goals</li>
          <li>Reduce financial anxiety through absolute clarity</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glass-container p-6 text-center">
          <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center text-primary mb-4">
            <Target className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold mb-2">Our Vision</h3>
          <p className="text-text-muted text-sm">To build the most intuitive and powerful personal finance assistant on the market.</p>
        </div>
        
        <div className="glass-container p-6 text-center">
          <div className="w-16 h-16 mx-auto bg-success/20 rounded-full flex items-center justify-center text-success mb-4">
            <TrendingUp className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold mb-2">Your Growth</h3>
          <p className="text-text-muted text-sm">We are dedicated to helping our users grow their net worth year over year.</p>
        </div>

        <div className="glass-container p-6 text-center">
          <div className="w-16 h-16 mx-auto bg-[#a371f7]/20 rounded-full flex items-center justify-center text-[#a371f7] mb-4">
            <Users className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold mb-2">Community</h3>
          <p className="text-text-muted text-sm">Building a platform driven by the feedback and needs of real people.</p>
        </div>
      </div>

    </div>
  );
}
