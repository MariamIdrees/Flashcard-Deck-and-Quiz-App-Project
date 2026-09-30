import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import { Eye, EyeOff } from 'lucide-react';

const Register = () => {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    
    if (!name.trim()) {
      setError("Please enter your full name.");
      return;
    }

    const strictEmailRegex = /^[^\s@]+@[^\s@]+\.(com|net|org|edu|gov|co|io)$/i;
    if (!strictEmailRegex.test(email)) {
      setError("Please enter a valid email address (e.g., ending in .com or .org).");
      return;
    }

    // New strong password requirement added here
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
    if (!strongPasswordRegex.test(password)) {
      setError("Password must contain at least 6 characters, including uppercase and lowercase letters, a number, and a symbol.");
      return;
    }

    setError("");
    setLoading(true);

    const { data, error: signUpError } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          full_name: name,
        }
      }
    });

    setLoading(false);

    if (signUpError) {
      setError(signUpError.message);
      return;
    }

    console.log("User created:", data);
    navigate("/dashboard"); 
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col items-center justify-center p-6 font-sans text-gray-800">
      <div className="w-full max-w-100 mx-auto text-center">
        
        {/* Logo */}
        <Link to="/" className="inline-block mb-8">
          <img src="/recallicon3.jpeg" alt="Recall" className="h-10 mx-auto object-contain" />
        </Link>

        {/* Headings */}
        <h1 className="text-3xl font-bold text-gray-900 mb-3" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
          Start Learning Faster
        </h1>
        <p className="text-gray-500 mb-8 text-[15px] leading-relaxed">
          Study adaptive web & mobile flashcards, or make your own flashcards for FREE.
        </p>

        {/* Social Buttons */}
        <div className="space-y-4">
          <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 rounded-full py-3.5 text-xs font-bold tracking-widest text-gray-700 hover:bg-gray-50 transition shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-4 h-4 fill-current">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
            </svg>
            CONTINUE WITH APPLE
          </button>
          
          <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 rounded-full py-3.5 text-xs font-bold tracking-widest text-gray-700 hover:bg-gray-50 transition shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" className="w-4 h-4">
              <path fill="#4285F4" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/>
              <path fill="#34A853" d="M248 504c66.8 0 123-24.5 166.3-64.9l-67.5-64.9c-25.8 17.3-58.9 27.6-98.8 27.6-76.3 0-141.1-51.5-164.2-120.6L12.5 334.8C54 417.1 143.5 504 248 504z"/>
              <path fill="#FBBC05" d="M83.8 301.2c-5.8-17.3-9.1-35.8-9.1-55.2s3.3-37.9 9.1-55.2L12.5 137.2C4.6 154 0 173.8 0 196s4.6 42 12.5 58.8l71.3-53.6z"/>
              <path fill="#EA4335" d="M248 102.2c36.4 0 69.1 12.5 94.8 37l71.1-71.1C370.9 24.5 314.8 0 248 0 143.5 0 54 86.9 12.5 169.2l71.3 55.2C106.9 153.7 171.7 102.2 248 102.2z"/>
            </svg>
            CONTINUE WITH GOOGLE
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center my-8">
          <div className="grow border-t border-gray-300"></div>
          <span className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">OR</span>
          <div className="grow border-t border-gray-300"></div>
        </div>

        {/* Dynamic Email Section */}
        {!showEmailForm ? (
          <button
            onClick={() => setShowEmailForm(true)}
            className="w-full bg-[#10a342] text-white rounded-full py-3.5 text-xs font-bold tracking-widest hover:bg-green-700 transition shadow-md"
          >
            CONTINUE WITH E-MAIL
          </button>
        ) : (
          <form onSubmit={handleRegister} className="space-y-4 text-left animate-in fade-in slide-in-from-top-4 duration-300">
            {error && (
              <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg text-center">
                {error}
              </div>
            )}
            
            <div>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 outline-none transition text-sm"
                placeholder="Full Name"
                disabled={loading}
              />
            </div>

            <div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 outline-none transition text-sm"
                placeholder="Email Address"
                disabled={loading}
              />
            </div>

            <div style={{ position: 'relative', width: '100%' }}>
  <input
    type={showPassword ? 'text' : 'password'}
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    style={{
      width: '100%',
      padding: '10px 40px 13px 12px',
      borderRadius: '6px',
      border: '1px solid #ccc',
      backgroundColor: '#fff',
      color: '#202124',
      boxSizing: 'border-box'
    }}
  />
  <button
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    style={{
      position: 'absolute',
      right: '12px',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: '#9aa0a6',
      display: 'flex',
      alignItems: 'center',
      padding: '0'
    }}
  >
    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
  </button>
</div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full text-white rounded-full py-3.5 text-xs font-bold tracking-widest transition shadow-md mt-2 ${
                loading ? "bg-green-400 cursor-not-allowed" : "bg-[#10a342] hover:bg-green-700"
              }`}
            >
              {loading ? "CREATING ACCOUNT..." : "CREATE ACCOUNT"}
            </button>
          </form>
        )}

        {/* Footer Links */}
        <div className="mt-10 space-y-6">
          <Link 
            to="/" 
            state={{ openLogin: true }} 
            className="text-[13px] text-[#2b7bc4] hover:underline"
          >
            Already have an account?
          </Link>

          <p className="text-xs text-gray-500 leading-relaxed max-w-[320px] mx-auto">
            By clicking "Continue with Google", "Continue with Apple", or "Create account" you agree to Recall's <a href="#" className="text-[#2b7bc4] hover:underline">terms.</a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Register;