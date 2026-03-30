import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { User, Lock, Mail, Bell, Shield, Moon, Sun } from 'lucide-react';

export default function Settings() {
  const { user } = useAuth();
  const { theme, toggleTheme } = useTheme();
  
  const [profileData, setProfileData] = useState({
    username: user?.username || 'Current User',
    email: user?.email || 'user@example.com'
  });
  
  const [passwordData, setPasswordData] = useState({
    current: '',
    newPass: '',
    confirm: ''
  });

  const [message, setMessage] = useState({ type: '', text: '' });

  const showMessage = (text, type = 'success') => {
    setMessage({ text, type });
    setTimeout(() => setMessage({ type: '', text: '' }), 3000);
  };

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    showMessage('Profile updated successfully! (UI Only)');
  };

  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    if (passwordData.newPass !== passwordData.confirm) {
      showMessage('Passwords do not match.', 'error');
      return;
    }
    showMessage('Password changed successfully! (UI Only)');
    setPasswordData({ current: '', newPass: '', confirm: '' });
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300 max-w-4xl">
      
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-text-main">Account Settings</h1>
        <p className="text-sm text-text-muted mt-1">Manage your profile, preferences, and security settings.</p>
      </div>

      {message.text && (
        <div className={`p-4 rounded-lg flex items-center gap-3 border ${message.type === 'error' ? 'bg-danger/10 border-danger/30 text-danger' : 'bg-success/10 border-success/30 text-success'}`}>
          <Bell className="w-5 h-5 flex-shrink-0" />
          <p className="text-sm font-medium">{message.text}</p>
        </div>
      )}

      {/* Profile Section */}
      <div className="glass-container overflow-hidden">
        <div className="p-6 border-b border-border flex items-center gap-3">
          <User className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-semibold text-text-main">Public Profile</h2>
        </div>
        
        <form onSubmit={handleProfileUpdate} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-text-muted mb-2">Username</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-muted">
                  <User className="w-4 h-4" />
                </div>
                <input 
                  type="text" 
                  className="auth-input pl-10"
                  value={profileData.username}
                  onChange={e => setProfileData({...profileData, username: e.target.value})}
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-text-muted mb-2">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-muted">
                  <Mail className="w-4 h-4" />
                </div>
                <input 
                  type="email" 
                  className="auth-input pl-10"
                  value={profileData.email}
                  onChange={e => setProfileData({...profileData, email: e.target.value})}
                />
              </div>
            </div>
          </div>
          
          <div className="flex justify-end">
            <button type="submit" className="btn-primary sm:w-auto h-10 px-6 text-sm">Save Profile Updates</button>
          </div>
        </form>
      </div>

      {/* Security Section */}
      <div className="glass-container overflow-hidden">
        <div className="p-6 border-b border-border flex items-center gap-3">
          <Shield className="w-5 h-5 text-success" />
          <h2 className="text-lg font-semibold text-text-main">Security</h2>
        </div>
        
        <form onSubmit={handlePasswordUpdate} className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-text-muted mb-2">Current Password</label>
            <input 
              type="password" required
              className="auth-input max-w-md"
              value={passwordData.current}
              onChange={e => setPasswordData({...passwordData, current: e.target.value})}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div>
              <label className="block text-sm font-medium text-text-muted mb-2">New Password</label>
              <input 
                type="password" required
                className="auth-input"
                value={passwordData.newPass}
                onChange={e => setPasswordData({...passwordData, newPass: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-muted mb-2">Confirm New Password</label>
              <input 
                type="password" required
                className="auth-input"
                value={passwordData.confirm}
                onChange={e => setPasswordData({...passwordData, confirm: e.target.value})}
              />
            </div>
          </div>
          
          <div className="flex justify-end pt-2">
            <button type="submit" className="btn-primary sm:w-auto h-10 px-6 text-sm bg-gradient-to-br from-gray-700 to-gray-900 border border-white/10 shadow-none">
              <Lock className="w-4 h-4 mr-2" />
              Change Password
            </button>
          </div>
        </form>
      </div>

       {/* Preferences Section */}
       <div className="glass-container overflow-hidden mb-12">
        <div className="p-6 border-b border-border flex items-center gap-3">
          <Moon className="w-5 h-5 text-[#a371f7]" />
          <h2 className="text-lg font-semibold text-text-main">Preferences</h2>
        </div>
        
        <div className="p-6 flex items-center justify-between">
           <div>
             <h3 className="text-text-main font-medium">Appearance Theme</h3>
             <p className="text-sm text-text-muted">Customize how FinTrack Pro looks on your device.</p>
           </div>
           
           <button 
             onClick={toggleTheme}
             className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${theme === 'dark' ? 'bg-primary' : 'bg-gray-300'}`}
           >
             <span className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform flex items-center justify-center ${theme === 'dark' ? 'translate-x-7' : 'translate-x-1'}`}>
               {theme === 'dark' ? <Moon className="w-3 h-3 text-primary" /> : <Sun className="w-3 h-3 text-gray-400" />}
             </span>
           </button>
        </div>
      </div>

    </div>
  );
}
