import { useState, useEffect } from 'react';
import { X, Loader2 } from 'lucide-react';
import api from '../services/api';

export default function ExpenseForm({ expense, onClose, onSuccess }) {
  const isEditing = !!expense;
  
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (expense) {
      setAmount(expense.amount);
      setCategory(expense.category);
      setDate(expense.date);
      setDescription(expense.description || '');
    }
  }, [expense]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const payload = { amount, category, date, description };

    try {
      if (isEditing) {
        await api.put(`/expenses/${expense.id}`, payload);
      } else {
        await api.post('/expenses', payload);
      }
      onSuccess();
      onClose();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to save expense');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="glass-container w-full max-w-md shadow-2xl overflow-hidden border border-border bg-card">
        
        <div className="flex items-center justify-between p-5 border-b border-border bg-background/50">
          <h2 className="text-xl font-semibold text-text-main">{isEditing ? 'Edit Transaction' : 'Record Expense'}</h2>
          <button onClick={onClose} className="p-1.5 rounded-lg text-text-muted hover:bg-border hover:text-text-main transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5 flex flex-col">
          {error && <div className="p-3 text-sm text-danger bg-danger/10 border border-danger/20 rounded-lg">{error}</div>}

          <div>
            <label className="block text-sm font-medium text-text-muted mb-1">Amount (₹)</label>
            <input 
              type="number" step="0.01" required
              value={amount} onChange={(e) => setAmount(e.target.value)}
              className="auth-input text-lg font-medium" 
              placeholder="0.00"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-text-muted mb-1">Category</label>
              <input 
                type="text" list="catList" required
                value={category} onChange={(e) => setCategory(e.target.value)}
                className="auth-input" 
                placeholder="Select or Type"
              />
              <datalist id="catList">
                <option value="Food & Dining" />
                <option value="Transportation" />
                <option value="Rent & Utilities" />
                <option value="Shopping" />
                <option value="Entertainment" />
              </datalist>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-text-muted mb-1">Date</label>
              <input 
                type="date" required
                value={date} onChange={(e) => setDate(e.target.value)}
                className="auth-input dark:[color-scheme:dark]" 
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-text-muted mb-1">Notes / Description</label>
            <textarea 
              rows="2"
              value={description} onChange={(e) => setDescription(e.target.value)}
              className="auth-input resize-none" 
              placeholder="What was this expense for?"
            ></textarea>
          </div>

          <div className="pt-4 flex justify-end gap-3 mt-auto">
            <button type="button" onClick={onClose} className="px-5 py-2.5 rounded-lg font-medium text-text-main hover:bg-border transition-colors">
              Cancel
            </button>
            <button type="submit" disabled={loading} className="btn-primary sm:w-auto min-w-[120px]">
              {loading ? <Loader2 className="w-5 h-5 animate-spin mx-auto" /> : (isEditing ? 'Save Changes' : 'Confirm')}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
