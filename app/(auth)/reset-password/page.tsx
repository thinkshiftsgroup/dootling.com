'use client';

import { useState, FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateEmail = (email: string) => {
    return emailRegex.test(email.trim());
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleBlur = () => {
    setEmailError(!validateEmail(email));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isEmailValid = validateEmail(email);
    setEmailError(!isEmailValid);

    if (isEmailValid) {
      setIsSubmitting(true);

      // Simulate API call
      setTimeout(() => {
        console.log('Password reset email sent to:', email);
        alert('Password reset instructions have been sent to your email address.');
        
        setEmail('');
        setIsSubmitting(false);
      }, 1500);
    }
  };

  return (
    <>
      <Head>
        <title>Forgot Password - Dootling</title>
        <meta name="description" content="Reset your password to regain access to your Dootling account." />
        <link rel="shortcut icon" href="/images/dootling-icon.svg" />
      </Head>

      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* Left Panel - Form */}
        <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-8 lg:p-16">
          <div className="max-w-md w-full space-y-8 form-container">
            {/* Logo Section */}
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-3">
                <Image 
                  src="/images/dootling.svg" 
                  alt="Dootling Logo" 
                  width={200} 
                  height={50}
                  priority
                />
              </div>
              <p className="text-gray-600 text-sm lg:text-base">
                Enter your email address and we&apos;ll send you an email with instructions to reset your password.
              </p>
            </div>

            {/* Forgot Password Form */}
            <form onSubmit={handleSubmit} className="space-y-6 w-full" noValidate>
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-gray-900 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  onBlur={handleBlur}
                  placeholder="marvin@example.com"
                  className={`w-full h-12 px-4 rounded-lg border bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    emailError ? 'border-red-500' : 'border-gray-300'
                  }`}
                  required
                  maxLength={255}
                />
                {emailError && (
                  <span className="text-red-500 text-sm mt-1 block">
                    Please enter a valid email address
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'SENDING...' : 'RESET PASSWORD'}
              </button>

              {/* Back to Login Link */}
              <p className="text-center text-gray-900">
                Remember your password?{' '}
                <Link href="/login" className="text-blue-600 hover:underline font-medium">
                  Back to Login
                </Link>
              </p>
            </form>
          </div>
        </div>

        {/* Right Panel - Blue Gradient */}
        <div className="w-full lg:w-1/2 bg-gradient-to-br from-blue-600 via-sky-400 to-blue-600 flex items-center justify-center p-8 lg:p-16">
          <div className="max-w-md w-full text-center space-y-6">
            <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-8 lg:p-12 shadow-2xl">
              <Image
                src="/images/people.png"
                alt="Connect with Confidence illustration"
                width={1024}
                height={683}
                className="w-full h-auto rounded-lg"
                loading="lazy"
              />
            </div>
            <div className="text-white space-y-4">
              <h1 className="text-3xl lg:text-4xl font-bold">
                Connect with Confidence
              </h1>
              <p className="text-white/90 text-base lg:text-lg leading-relaxed">
                Where People and Work Connect with Confidence
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .form-container {
          animation: fadeIn 0.5s ease-in;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .logo-icon {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}