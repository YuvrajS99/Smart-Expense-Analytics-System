import { Edit2, Trash2, CalendarDays } from 'lucide-react';
import api from '../services/api';

export default function ExpenseTable({ expenses, onEdit, onRefresh }) {
  
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this specific expense permanently?")) return;
    
    try {
      await api.delete(`/expenses/${id}`);
      onRefresh(); // Trigger parent dashboard refresh
    } catch (error) {
      console.error("Deletion failed", error);
      alert("Failed to delete record.");
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-border text-text-muted text-sm font-medium">
            <th className="pb-3 px-2 font-medium">Date</th>
            <th className="pb-3 px-2 font-medium">Description</th>
            <th className="pb-3 px-2 font-medium">Category</th>
            <th className="pb-3 px-2 font-medium text-right">Amount</th>
            <th className="pb-3 px-2 font-medium text-right w-24">Actions</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {expenses.length === 0 ? (
            <tr>
              <td colSpan="5" className="py-8 text-center text-text-muted">
                <CalendarDays className="w-10 h-10 mx-auto mb-2 opacity-50" />
                No expenses recorded yet.
              </td>
            </tr>
          ) : (
            expenses.map((expense) => (
              <tr key={expense.id} className="border-b border-border/50 hover:bg-black/5 dark:hover:bg-white/5 transition-colors group">
                <td className="py-4 px-2 text-text-main">{expense.date}</td>
                <td className="py-4 px-2 text-text-main">{expense.description || <span className="text-text-muted italic">No description</span>}</td>
                <td className="py-4 px-2">
                  <span className="bg-background px-3 py-1 rounded-full text-xs border border-border text-text-main">
                    {expense.category}
                  </span>
                </td>
                <td className="py-4 px-2 text-right text-danger font-semibold">
                  -₹{parseFloat(expense.amount).toFixed(2)}
                </td>
                <td className="py-4 px-2 text-right">
                  <div className="flex items-center justify-end gap-3 md:opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={() => onEdit(expense)} 
                      className="text-text-muted hover:text-primary transition-colors"
                      title="Edit"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => handleDelete(expense.id)} 
                      className="text-text-muted hover:text-danger transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
