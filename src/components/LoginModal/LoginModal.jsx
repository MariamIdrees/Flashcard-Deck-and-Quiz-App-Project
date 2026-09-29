import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    
    const strictEmailRegex = /^[^\s@]+@[^\s@]+\.(com|net|org|edu|gov|co|io)$/i;
    
    if (!strictEmailRegex.test(email)) {
      setError("Please enter a valid email address (e.g., ending in .com or .org).");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setError("");
    console.log("Logging in:", email, password);
    onClose(); 
    navigate("/dashboard"); 
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1920&q=80")' 
        }}
      ></div>
      
      <div className="absolute inset-0 bg-black/30 backdrop-blur-md"></div>

      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl flex flex-col md:flex-row relative overflow-hidden z-10">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-5 z-20 text-gray-400 hover:text-gray-900 text-xl font-bold bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-sm cursor-pointer"
        >
          ✕
        </button>

        <div className="hidden md:block md:w-1/2 relative bg-gray-100">
          <img 
            src="https://images.unsplash.com/photo-1611348586755-53860f7ae57a?auto=format&fit=crop&w=1920&q=80" 
            alt="Students collaborating" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent"></div>
          
          <div className="absolute bottom-10 left-10 text-white p-4 z-10">
            <h3 className="text-3xl font-semibold mb-2" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
              Welcome back
            </h3>
            <p className="text-sm opacity-90 font-medium">
              Pick up right where you left off.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-10 lg:p-14 flex flex-col justify-center">
          <div className="mb-8 text-center md:text-left">
            <h2 className="text-2xl font-semibold text-gray-900" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
              Log In to Recall
            </h2>
            {error && (
              <div className="mt-4 p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg">
                {error}
              </div>
            )}
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="username"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-600 outline-none transition"
                placeholder="name@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-600 outline-none transition"
                placeholder="••••••••"
              />
              
              <div className="flex justify-end mt-2">
                <button 
                  type="button"
                  onClick={() => {
                    onClose();
                    navigate("/forgot-password");
                  }}
                  className="text-sm font-medium text-[#10a342] hover:underline cursor-pointer"
                >
                  Forgot password?
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#10a342] text-white font-medium py-3.5 rounded-full hover:bg-green-700 transition mt-6 cursor-pointer"
            >
              Log In
            </button>

            <p className="text-center text-sm text-gray-600 mt-6">
              Don't have an account?{" "}
              <button 
                type="button" 
                onClick={() => {
                  onClose();
                  navigate("/register");
                }}
                className="font-medium text-[#10a342] hover:underline cursor-pointer"
              >
                Sign up
              </button>
            </p>
          </form>
        </div>

      </div>
    </div>
  );
};

export default LoginModal;