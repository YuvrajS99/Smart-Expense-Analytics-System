import { useState, useEffect } from 'react';
import Charts from '../components/Charts';
import ExpenseTable from '../components/ExpenseTable';
import ExpenseForm from '../components/ExpenseForm';
import api from '../services/api';
import { IndianRupee, Layers, PlusCircle } from 'lucide-react';

export default function Dashboard() {
  const [expenses, setExpenses] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [categoriesCount, setCategoriesCount] = useState(0);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editExpenseData, setEditExpenseData] = useState(null);

  const fetchDashboardData = async () => {
    try {
      const expensesRes = await api.get('/expenses');
      setExpenses(expensesRes.data);
      
      const categoryRes = await api.get('/analytics/category');
      setCategoriesCount(categoryRes.data.length);
      
      const total = expensesRes.data.reduce((sum, item) => sum + parseFloat(item.amount), 0);
      setTotalAmount(total);
      
    } catch (error) {
      console.error("Dashboard failed to load data", error);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const handleEdit = (expense) => {
    setEditExpenseData(expense);
    setIsModalOpen(true);
  };

  const handleAddNew = () => {
    setEditExpenseData(null);
    setIsModalOpen(true);
  };

  return (
    <>
      {/* Top Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-container p-6 flex items-center justify-between">
          <div>
            <p className="text-text-muted text-sm font-semibold uppercase tracking-wider mb-1">Total Expenses</p>
            <h3 className="text-3xl font-bold text-text-main">₹{totalAmount.toLocaleString('en-IN', {minimumFractionDigits: 2})}</h3>
          </div>
          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
            <IndianRupee className="w-6 h-6" />
          </div>
        </div>

        <div className="glass-container p-6 flex items-center justify-between">
          <div>
            <p className="text-text-muted text-sm font-semibold uppercase tracking-wider mb-1">Categories Processed</p>
            <h3 className="text-3xl font-bold text-text-main">{categoriesCount}</h3>
          </div>
          <div className="w-12 h-12 bg-[#a371f7]/20 rounded-full flex items-center justify-center text-[#a371f7]">
            <Layers className="w-6 h-6" />
          </div>
        </div>

        <div 
          onClick={handleAddNew}
          className="glass-container p-6 flex items-center justify-between cursor-pointer hover:bg-success/5 border hover:border-success/30 transition-all group"
        >
          <div>
            <p className="text-text-muted text-sm font-semibold uppercase tracking-wider mb-1">Quick Action</p>
            <h3 className="text-2xl font-bold text-success group-hover:text-success/80 transition-colors">+ Add Expense</h3>
          </div>
          <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center text-success mix-blend-screen group-hover:scale-110 transition-transform">
            <PlusCircle className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Analytics Overview - Rendering Chart components dynamically */}
      <Charts triggerFetch={expenses} />

      {/* Transactions Output Table */}
      <div className="glass-container p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold tracking-tight text-text-main">Recent Transactions</h2>
        </div>
        <ExpenseTable 
          expenses={expenses} 
          onEdit={handleEdit} 
          onRefresh={fetchDashboardData} 
        />
      </div>

      {/* Reusable Form Modal Component */}
      {isModalOpen && (
        <ExpenseForm 
          expense={editExpenseData} 
          onClose={() => setIsModalOpen(false)} 
          onSuccess={fetchDashboardData} 
        />
      )}
    </>
  );
}
