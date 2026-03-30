import { useTheme } from '../context/ThemeContext';
import { IndianRupee, PieChart as PieChartIcon, ArrowRight } from 'lucide-react';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Pie, Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';

ChartJS.register(ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);
ChartJS.defaults.font.family = 'Inter, sans-serif';

export default function DemoDashboardPreview() {
  const { theme } = useTheme();
  
  // Calculate specific theme parameters to dynamically style the Chart axes to remain visible
  const isDark = theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  const textColor = isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)';
  const gridColor = isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)';

  const mockData = [
    { category: 'Food', amount: 4200 },
    { category: 'Shopping', amount: 3100 },
    { category: 'Entertainment', amount: 2200 },
    { category: 'Transport', amount: 1600 },
    { category: 'Other', amount: 1350 },
  ];

  const pieData = {
    labels: mockData.map(d => d.category),
    datasets: [{
      data: mockData.map(d => d.amount),
      backgroundColor: ['#58a6ff', '#2ea043', '#f85149', '#a371f7', '#d29922'],
      borderWidth: 0,
      hoverOffset: 4
    }]
  };

  const lineData = {
    labels: ['1st', '5th', '10th', '15th', '20th', '25th', '30th'],
    datasets: [{
      label: 'Spending Trend (₹)',
      data: [800, 1500, 3200, 4800, 7100, 9200, 12450],
      borderColor: '#a371f7',
      backgroundColor: 'rgba(163, 113, 247, 0.2)',
      fill: true,
      tension: 0.4,
      pointBackgroundColor: '#a371f7',
      pointBorderColor: '#fff',
      borderWidth: 2,
    }]
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: { grid: { color: gridColor }, ticks: { color: textColor } },
      x: { grid: { display: false }, ticks: { color: textColor } }
    },
    plugins: { legend: { display: false } }
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: 'right', labels: { color: textColor } } }
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 text-center animate-in fade-in zoom-in-95 duration-700">
      <h2 className="text-3xl font-bold mb-4 text-text-main">Interactive Analytics Interface</h2>
      <p className="text-xl text-text-muted mb-12 max-w-2xl mx-auto">
         Preview how FinTrack Pro visualizes and analyzes your spending patterns in real time.
      </p>

      {/* Static Mock Dashboard Visual Container */}
      <div className="relative rounded-2xl border border-border bg-card p-4 sm:p-6 shadow-2xl glass-container text-left mb-12 overflow-hidden mx-auto">
        
        {/* KPI Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
           <div className="glass-container p-6 bg-gradient-to-br from-card to-background border border-border/50 hover:border-primary/30 transition-colors">
             <div className="flex items-center gap-3 mb-2">
               <div className="p-2 rounded-lg bg-primary/10">
                 <IndianRupee className="w-5 h-5 text-primary" />
               </div>
               <h3 className="text-text-muted font-medium">Total Expenses</h3>
             </div>
             <p className="text-3xl font-bold text-text-main tracking-tight">₹12,450.00</p>
           </div>
           
           <div className="glass-container p-6 bg-gradient-to-br from-card to-background border border-border/50 hover:border-success/30 transition-colors">
             <div className="flex items-center gap-3 mb-2">
               <div className="p-2 rounded-lg bg-success/10">
                 <PieChartIcon className="w-5 h-5 text-success" />
               </div>
               <h3 className="text-text-muted font-medium">Categories Processed</h3>
             </div>
             <p className="text-3xl font-bold text-text-main tracking-tight">5</p>
           </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6 h-auto lg:h-80">
           <div className="glass-container p-6 flex flex-col bg-background/50 h-80 lg:h-full border border-border/50">
             <h3 className="font-semibold mb-4 text-text-main">Category Distribution</h3>
             <div className="flex-1 relative w-full h-full pb-4">
               <Pie data={pieData} options={pieOptions} />
             </div>
           </div>
           
           <div className="lg:col-span-2 glass-container p-6 flex flex-col bg-background/50 h-80 lg:h-full border border-border/50">
             <h3 className="font-semibold mb-4 text-text-main">Spending Trend</h3>
             <div className="flex-1 relative w-full h-full pb-4">
               <Line data={lineData} options={lineOptions} />
             </div>
           </div>
        </div>

        {/* Mock Table */}
        <div className="glass-container p-6 bg-background/50 overflow-x-auto border border-border/50">
           <h3 className="font-semibold mb-4 text-text-main">Recent Transactions</h3>
           <table className="w-full text-left border-collapse min-w-[500px]">
             <thead>
               <tr className="border-b border-border text-text-muted text-sm font-medium">
                 <th className="pb-3 px-2 font-medium">Date</th>
                 <th className="pb-3 px-2 font-medium">Description</th>
                 <th className="pb-3 px-2 font-medium">Category</th>
                 <th className="pb-3 px-2 font-medium text-right">Amount</th>
               </tr>
             </thead>
             <tbody className="text-sm">
               {mockData.map((expense, idx) => (
                 <tr key={idx} className="border-b border-border/50 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                   <td className="py-4 px-2 text-text-main whitespace-nowrap">Oct {20 - idx}, 2023</td>
                   <td className="py-4 px-2 text-text-main whitespace-nowrap">Standard {expense.category} Bill</td>
                   <td className="py-4 px-2 whitespace-nowrap">
                     <span className="bg-card px-3 py-1 rounded-full text-xs border border-border text-text-main shadow-sm">
                       {expense.category}
                     </span>
                   </td>
                   <td className="py-4 px-2 text-right text-danger font-semibold whitespace-nowrap">
                     -₹{parseFloat(expense.amount).toFixed(2)}
                   </td>
                 </tr>
               ))}
             </tbody>
           </table>
        </div>
      </div>

      {/* Call to Action Wrapper */}
      <div className="flex justify-center">
        <Link to="/register" className="btn-primary inline-flex items-center justify-center sm:w-auto px-10 py-5 text-lg font-semibold shadow-primary/25 cursor-pointer max-w-sm rounded-xl">
          Start Tracking Your Expenses
          <ArrowRight className="w-6 h-6 ml-3" />
        </Link>
      </div>

    </section>
  );
}
