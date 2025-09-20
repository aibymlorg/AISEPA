import React, { useState } from 'react';
import { MembershipTier } from '../types';

const Membership: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tier, setTier] = useState<MembershipTier>(MembershipTier.PROFESSIONAL);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const validateForm = (): boolean => {
    const newErrors: { name?: string; email?: string } = {};
    let isValid = true;

    if (!name.trim()) {
      newErrors.name = 'Name is required.';
      isValid = false;
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email address is invalid.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log({ name, email, tier });
      setSubmitted(true);
    }
  };

  return (
    <section id="membership" className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Join Our Growing Community
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-blue-100">
            Become a member of the AI Service Enabler Professional Association and lead the future of intelligent systems.
          </p>
        </div>
        
        <div className="max-w-xl mx-auto bg-white text-slate-800 rounded-xl shadow-2xl p-8">
          {submitted ? (
            <div className="text-center">
              <h3 className="text-2xl font-bold text-green-600 mb-4">Thank you for your interest!</h3>
              <p>We've received your information and will be in touch shortly. Welcome to the forefront of AI innovation.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors({...errors, name: undefined});
                  }}
                  aria-invalid={!!errors.name}
                  aria-describedby="name-error"
                  className={`mt-1 block w-full px-3 py-2 bg-white border rounded-md shadow-sm placeholder-slate-400 focus:outline-none sm:text-sm ${
                    errors.name 
                      ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                      : 'border-slate-300 focus:ring-blue-500 focus:border-blue-500'
                  }`}
                />
                {errors.name && <p id="name-error" className="mt-2 text-sm text-red-600">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                   onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors({...errors, email: undefined});
                  }}
                  aria-invalid={!!errors.email}
                  aria-describedby="email-error"
                  className={`mt-1 block w-full px-3 py-2 bg-white border rounded-md shadow-sm placeholder-slate-400 focus:outline-none sm:text-sm ${
                    errors.email 
                      ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                      : 'border-slate-300 focus:ring-blue-500 focus:border-blue-500'
                  }`}
                />
                 {errors.email && <p id="email-error" className="mt-2 text-sm text-red-600">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="tier" className="block text-sm font-medium text-slate-700">Membership Tier</label>
                <select
                  id="tier"
                  value={tier}
                  onChange={(e) => setTier(e.target.value as MembershipTier)}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-slate-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                >
                  {Object.values(MembershipTier).map((tierValue) => (
                    <option key={tierValue} value={tierValue}>{tierValue}</option>
                  ))}
                </select>
              </div>
              <div>
                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Sign Up
                </button>
              </div>
              <p className="text-xs text-slate-500 text-center">
                By signing up, you agree to our <a href="#" className="underline hover:text-blue-600">Terms & Conditions</a> and <a href="#" className="underline hover:text-blue-600">Privacy Policy</a>.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Membership;