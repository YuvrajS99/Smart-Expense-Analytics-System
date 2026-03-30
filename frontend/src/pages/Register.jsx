import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { Wallet, Loader2 } from 'lucide-react';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { registerContext } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      await registerContext({ username, email, password });
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center p-4 w-full h-full my-auto mt-12 pb-24">
      <div className="glass-container w-full max-w-md p-8">
        <div className="flex flex-col items-center mb-8">
          <Wallet className="w-12 h-12 text-primary mb-2" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-[#a371f7] bg-clip-text text-transparent">Create Account</h1>
          <p className="text-text-muted mt-2">Join FinTrack Pro today</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-danger/10 border border-danger/30 rounded-lg text-danger text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-text-muted mb-1">Username</label>
            <input 
              type="text" 
              className="auth-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Choose a username"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-muted mb-1">Email</label>
            <input 
              type="email" 
              className="auth-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
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
              placeholder="Create a password"
            />
          </div>
          <button type="submit" disabled={loading} className="btn-primary mt-6">
            {loading ? <Loader2 className="animate-spin w-5 h-5 mx-auto" /> : 'Sign Up'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-text-muted">
          Already have an account?{' '}
          <Link to="/login" className="text-primary hover:text-primary/80 transition-colors font-medium">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
