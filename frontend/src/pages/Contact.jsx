import { useState } from 'react';
import { Mail, Phone } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }
    
    // Placeholder submission
    console.log("Form Submitted:", formData);
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Contact Us</h1>
        <p className="text-xl text-text-muted max-w-2xl mx-auto">
          Have questions or feedback? We'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="glass-container p-8">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-text-main">Email Support</h3>
                  <p className="text-text-muted">rajsanap779@gmail.com</p>
                  <p className="text-sm text-text-muted mt-1">We usually respond within 24 hours.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center text-success shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-text-main">Phone</h3>
                  <p className="text-text-muted">+91 9373500779</p>
                  <p className="text-sm text-text-muted mt-1">Available for internship and job opportunities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass-container p-8">
          <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
          
          {status === 'success' && (
            <div className="mb-6 p-4 rounded-lg bg-success/10 border border-success/30 text-success">
              Your message has been sent successfully! We will get back to you soon.
            </div>
          )}
          
          {status === 'error' && (
            <div className="mb-6 p-4 rounded-lg bg-danger/10 border border-danger/30 text-danger">
              Please fill in all fields before submitting.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-text-muted mb-2">Name</label>
              <input 
                type="text" 
                className="auth-input"
                placeholder="John Doe"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-text-muted mb-2">Email Address</label>
              <input 
                type="email" 
                className="auth-input"
                placeholder="john@example.com"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-text-muted mb-2">Message</label>
              <textarea 
                className="auth-input min-h-[150px] resize-y"
                placeholder="How can we help you?"
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            
            <button type="submit" className="btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
