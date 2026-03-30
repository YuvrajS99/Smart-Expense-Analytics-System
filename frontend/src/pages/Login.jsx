import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { Wallet, Loader2 } from 'lucide-react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { loginContext } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      await loginContext({ username, password });
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Failed to login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center p-4 w-full h-full my-auto mt-16 pb-32">
      <div className="glass-container w-full max-w-md p-8">
        <div className="flex flex-col items-center mb-8">
          <Wallet className="w-12 h-12 text-primary mb-2" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-[#a371f7] bg-clip-text text-transparent">FinTrack Pro</h1>
          <p className="text-text-muted mt-2">Sign in to your account</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-danger/10 border border-danger/30 rounded-lg text-danger text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-text-muted mb-1">Username</label>
            <input 
              type="text" 
              className="auth-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-muted mb-1">Password</label>
            <input 
              type="password" 
              className="auth-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
            />
          </div>
          <button type="submit" disabled={loading} className="btn-primary mt-6">
            {loading ? <Loader2 className="animate-spin w-5 h-5 mx-auto" /> : 'Sign In'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-text-muted">
          Don't have an account?{' '}
          <Link to="/register" className="text-primary hover:text-primary/80 transition-colors font-medium">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
