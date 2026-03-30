import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';

// Pages
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Settings from './pages/Settings';
import Home from './pages/Home';
import About from './pages/About';
import HowItWorks from './pages/HowItWorks';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import FutureRoadmap from './pages/FutureRoadmap';

// Layouts
import PublicLayout from './layouts/PublicLayout';
import DashboardLayout from './layouts/DashboardLayout';

function ProtectedRoute({ children }) {
  const { token, loading } = useAuth();
  
  if (loading) return null;
  if (!token) return <Navigate to="/login" replace />;
  return <DashboardLayout>{children}</DashboardLayout>;
}

function PublicAuthRoute({ children }) {
  const { token, loading } = useAuth();

  if (loading) return null;
  if (token) return <Navigate to="/dashboard" replace />;
  return <PublicLayout>{children}</PublicLayout>;
}

function PublicOnlyRoute({ children }) {
  return <PublicLayout>{children}</PublicLayout>;
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* Public Website Routes */}
          <Route path="/" element={<PublicOnlyRoute><Home /></PublicOnlyRoute>} />
          <Route path="/about" element={<PublicOnlyRoute><About /></PublicOnlyRoute>} />
          <Route path="/how-it-works" element={<PublicOnlyRoute><HowItWorks /></PublicOnlyRoute>} />
          <Route path="/contact" element={<PublicOnlyRoute><Contact /></PublicOnlyRoute>} />
          <Route path="/privacy" element={<PublicOnlyRoute><PrivacyPolicy /></PublicOnlyRoute>} />
          <Route path="/terms" element={<PublicOnlyRoute><TermsOfService /></PublicOnlyRoute>} />
          <Route path="/future-roadmap" element={<PublicOnlyRoute><FutureRoadmap /></PublicOnlyRoute>} />
          
          {/* Auth Routes */}
          <Route path="/login" element={<PublicAuthRoute><Login /></PublicAuthRoute>} />
          <Route path="/register" element={<PublicAuthRoute><Register /></PublicAuthRoute>} />
          
          {/* Protected Dashboard Routes */}
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/transactions" element={<ProtectedRoute><Transactions /></ProtectedRoute>} />
          <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
