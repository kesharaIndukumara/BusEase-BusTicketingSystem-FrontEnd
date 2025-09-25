import React, { useState } from 'react';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import './ContactPage.css';

interface ContactFormData {
  fullName: string;
  company: string;
  email: string;
  countryCode: string;
  phone: string;
  address: string;
  message: string;
}

const initialForm: ContactFormData = {
  fullName: '',
  company: '',
  email: '',
  countryCode: 'US',
  phone: '',
  address: '',
  message: ''
};

const ContactPage: React.FC = () => {
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple client side validation
    if (!form.fullName || !form.email || !form.message) return;
    // In a real app this would go to an API endpoint
    console.log('Contact form submitted', form);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm(initialForm);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-24 pb-16">
        <div className="contact-wrapper mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-0 lg:gap-12">
            {/* Left Info Panel */}
            <aside className="lg:col-span-2 bg-primary-deep text-white rounded-t-2xl lg:rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden shadow-lg">
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                <p className="text-blue-100 leading-relaxed mb-8">
                  Not sure what you need? The BusEase team is happy to listen and help you craft better travel & fleet solutions.
                </p>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/10 border border-white/10">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"/></svg>
                    </span>
                    <div>
                      <p className="font-medium">Support</p>
                      <p className="text-blue-200">(+94) 11 234 5678</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/10 border border-white/10">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-6.706 4.024a2.25 2.25 0 01-2.248 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>
                    </span>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-blue-200">support@busease.com</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/10 border border-white/10">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657A8 8 0 016.343 5.343m11.314 11.314L15 13m2.657 3.657L13 15m4.657 1.657L15 11"/></svg>
                    </span>
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-blue-200">123 BusEase Way, Colombo, LK</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="pattern-circles" aria-hidden="true"></div>
            </aside>

            {/* Right Form Card */}
            <section className="lg:col-span-3 bg-white rounded-b-2xl lg:rounded-2xl shadow-xl p-8 relative">
              <div className="absolute top-0 right-0 decorative-corner" aria-hidden="true" />
              <header className="mb-8">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
                  We'd love to hear from you!<br />
                  <span className="text-primary-deep">Let's get in touch</span>
                </h1>
              </header>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label" htmlFor="fullName">Full Name</label>
                    <input id="fullName" name="fullName" value={form.fullName} onChange={handleChange} required className="form-input" placeholder="Jane Doe" />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="company">Company</label>
                    <input id="company" name="company" value={form.company} onChange={handleChange} className="form-input" placeholder="Acme Travels" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="form-label" htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required className="form-input" placeholder="you@example.com" />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="phone">Phone number</label>
                    <div className="flex">
                      <select name="countryCode" value={form.countryCode} onChange={handleChange} className="form-input w-24 rounded-r-none border-r-0">
                        <option value="US">US +1</option>
                        <option value="LK">LK +94</option>
                        <option value="UK">UK +44</option>
                      </select>
                      <input id="phone" name="phone" value={form.phone} onChange={handleChange} className="form-input rounded-l-none" placeholder="(555) 000-0000" />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="form-label" htmlFor="address">Address</label>
                  <input id="address" name="address" value={form.address} onChange={handleChange} className="form-input" placeholder="No. 123, Street, City" />
                </div>
                <div>
                  <label className="form-label" htmlFor="message">Your Message</label>
                  <textarea id="message" name="message" value={form.message} onChange={handleChange} required className="form-textarea" placeholder="Type your message here" rows={5} />
                </div>
                <div className="flex items-center justify-between">
                  {submitted && <p className="text-sm text-green-600">Message sent! We'll get back to you soon.</p>}
                  <button type="submit" className="ml-auto px-6 py-3 rounded-md bg-primary-deep text-white font-medium hover:bg-primary-deep/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-deep transition">
                    Send Message
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
