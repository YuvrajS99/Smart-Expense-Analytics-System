import { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Pie, Bar, Line } from 'react-chartjs-2';
import api from '../services/api';
import { useTheme } from '../context/ThemeContext';

ChartJS.register(ArcElement, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, Filler);

ChartJS.defaults.font.family = 'Inter, sans-serif';

export default function Charts({ triggerFetch }) {
  const [pieData, setPieData] = useState(null);
  const [barData, setBarData] = useState(null);
  const [lineData, setLineData] = useState(null);
  const { theme } = useTheme();
  
  const isDark = theme === 'dark';
  const textColor = isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)';
  const gridColor = isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)';

  ChartJS.defaults.color = textColor;

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const [catRes, monRes, trendRes] = await Promise.all([
          api.get('/analytics/category'),
          api.get('/analytics/monthly'),
          api.get('/analytics/trend')
        ]);

        // Format Pie Data
        setPieData({
          labels: catRes.data.map(d => d.category),
          datasets: [{
            data: catRes.data.map(d => d.total),
            backgroundColor: ['#58a6ff', '#2ea043', '#f85149', '#a371f7', '#d29922', '#1f6feb'],
            borderWidth: 0,
            hoverOffset: 4
          }]
        });

        // Format Bar Data
        setBarData({
          labels: monRes.data.map(d => d.month),
          datasets: [{
            label: 'Monthly Total',
            data: monRes.data.map(d => d.total),
            backgroundColor: 'rgba(88, 166, 255, 0.6)',
            borderColor: '#58a6ff',
            borderWidth: 1,
            borderRadius: 4
          }]
        });

        // Format Line Data (Trend)
        setLineData({
          labels: trendRes.data.map(d => d.date),
          datasets: [{
            label: 'Daily Trend (₹)',
            data: trendRes.data.map(d => d.amount),
            borderColor: '#a371f7',
            backgroundColor: 'rgba(163, 113, 247, 0.2)',
            fill: true,
            tension: 0.4,
            pointBackgroundColor: '#a371f7',
            pointBorderColor: '#fff',
            borderWidth: 2,
          }]
        });

      } catch (e) {
        console.error("Charts fetch failed", e);
      }
    };

    fetchAnalytics();
  }, [triggerFetch]); // Re-fetch when main expenses state changes

  const barLineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: { 
        beginAtZero: true, 
        grid: { color: gridColor },
        ticks: { color: textColor }
      },
      x: { 
        grid: { display: false },
        ticks: { color: textColor }
      }
    },
    plugins: { 
      legend: { display: false } 
    }
  };

  const pieOptions = {
    responsive: true, 
    maintainAspectRatio: false, 
    plugins: { 
      legend: { 
        position: 'right',
        labels: { color: textColor }
      } 
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="glass-container p-6 h-80 flex flex-col">
          <h2 className="font-semibold mb-4 text-text-main">Category Distribution</h2>
          <div className="flex-1 relative w-full h-full">
            {pieData ? <Pie data={pieData} options={pieOptions} /> : <p className="text-text-muted animate-pulse">Loading chart...</p>}
          </div>
        </div>
        
        <div className="lg:col-span-2 glass-container p-6 h-80 flex flex-col">
          <h2 className="font-semibold mb-4 text-text-main">Spending Trend</h2>
          <div className="flex-1 relative w-full h-full">
            {lineData ? <Line data={lineData} options={barLineOptions} /> : <p className="text-text-muted animate-pulse">Loading trend...</p>}
          </div>
        </div>
      </div>

      <div className="glass-container p-6 h-[22rem] flex flex-col">
        <h2 className="font-semibold mb-4 text-text-main">Monthly Aggregations</h2>
        <div className="flex-1 relative w-full h-full">
          {barData ? <Bar data={barData} options={barLineOptions} /> : <p className="text-text-muted animate-pulse">Loading timeline...</p>}
        </div>
      </div>
    </>
  );
}
