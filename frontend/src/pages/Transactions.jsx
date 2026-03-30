import { useState, useEffect } from 'react';
import api from '../services/api';
import ExpenseTable from '../components/ExpenseTable';
import ExpenseForm from '../components/ExpenseForm';
import { IndianRupee, Plus, Filter, LayoutDashboard } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Transactions() {
  const [expenses, setExpenses] = useState([]);
  const [filteredExpenses, setFilteredExpenses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editExpenseData, setEditExpenseData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchTransactions = async () => {
    try {
      setLoading(true);
      // Fulfilling instruction, API endpoint for expense is /expenses
      const res = await api.get('/expenses');
      setExpenses(res.data);
      setFilteredExpenses(res.data);
      
      // Extract unique categories for the filter
      const uniqueCategories = [...new Set(res.data.map(item => item.category))];
      setCategories(uniqueCategories);
      
    } catch (error) {
      console.error("Failed to load transactions", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  // Handle Filtering
  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredExpenses(expenses);
    } else {
      setFilteredExpenses(expenses.filter(e => e.category === selectedCategory));
    }
  }, [selectedCategory, expenses]);

  const handleEdit = (expense) => {
    setEditExpenseData(expense);
    setIsModalOpen(true);
  };

  const handleAddNew = () => {
    setEditExpenseData(null);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-text-main">All Transactions</h1>
          <p className="text-sm text-text-muted mt-1">Review and manage your complete expense history.</p>
        </div>
        <button onClick={handleAddNew} className="btn-primary sm:w-auto h-11 px-6 shadow-primary/20">
          <Plus className="w-4 h-4 mr-2" />
          Add Expense
        </button>
      </div>

      <div className="glass-container p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Filter className="w-5 h-5 text-text-muted" />
          <select 
            className="auth-input flex-1 sm:w-64 max-h-12 py-2"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All Categories ({expenses.length})</option>
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        
        <div className="text-sm text-text-muted w-full sm:w-auto text-right">
          Showing <span className="text-text-main font-semibold">{filteredExpenses.length}</span> transactions
        </div>
      </div>

      <div className="glass-container p-6">
        {loading ? (
           <div className="py-12 flex justify-center text-text-muted">Loading transactions...</div>
        ) : (
          <ExpenseTable 
            expenses={filteredExpenses} 
            onEdit={handleEdit} 
            onRefresh={fetchTransactions} 
          />
        )}
      </div>

      {isModalOpen && (
        <ExpenseForm 
          expense={editExpenseData} 
          onClose={() => setIsModalOpen(false)} 
          onSuccess={fetchTransactions} 
        />
      )}
    </div>
  );
}
