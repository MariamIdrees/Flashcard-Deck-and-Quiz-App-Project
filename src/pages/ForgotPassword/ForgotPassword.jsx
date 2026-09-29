import { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    
    const strictEmailRegex = /^[^\s@]+@[^\s@]+\.(com|net|org|edu|gov|co|io)$/i;
    if (!strictEmailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    console.log("Sending reset link to:", email);
    // This is where Supabase password reset logic will go later
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col items-center justify-center p-6 font-sans text-gray-800">
      <div className="w-full max-w-[400px] mx-auto text-center">
        
        {/* Logo */}
        <Link to="/" className="inline-block mb-8">
          <img src="/recallicon6.jpeg" alt="Recall" className="h-10 mx-auto object-contain" />
        </Link>

        {!isSubmitted ? (
          <>
            <h1 className="text-3xl font-bold text-gray-900 mb-3" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
              Reset Password
            </h1>
            <p className="text-gray-500 mb-8 text-[15px] leading-relaxed">
              Enter the email address associated with your account and we'll send you a link to reset your password.
            </p>

            <form onSubmit={handleReset} className="space-y-4 text-left animate-in fade-in slide-in-from-top-4 duration-300">
              {error && (
                <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg text-center">
                  {error}
                </div>
              )}
              
              <div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 outline-none transition text-sm"
                  placeholder="Email Address"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#10a342] text-white rounded-full py-3.5 text-xs font-bold tracking-widest hover:bg-green-700 transition shadow-md mt-2"
              >
                SEND RESET LINK
              </button>
            </form>
          </>
        ) : (
          <div className="animate-in fade-in duration-500 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-green-100 text-[#10a342] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Check your email</h2>
            <p className="text-sm text-gray-600 mb-6">
              We've sent password reset instructions to <span className="font-medium text-gray-900">{email}</span>.
            </p>
          </div>
        )}

        {/* Back to Login Link */}
        <div className="mt-10">
          <Link 
            to="/" 
            state={{ openLogin: true }} 
            className="text-[13px] font-medium text-[#2b7bc4] hover:underline flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to login
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ForgotPassword;