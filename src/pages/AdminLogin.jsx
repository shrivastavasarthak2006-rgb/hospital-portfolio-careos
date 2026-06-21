import { useState } from "react";
import axios from "axios";
import { Eye, EyeOff, ShieldCheck } from "lucide-react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/admin/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", res.data.token);

      window.location.href = "/admin/dashboard";
    } catch (error) {
      console.error(error);
      alert("Invalid Email or Password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-care-radial flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-xl backdrop-blur-xl">
        
        <div className="flex flex-col items-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-care-navy text-white">
            <ShieldCheck size={30} />
          </div>

          <h1 className="mt-4 text-3xl font-extrabold text-care-navy">
            CAREOS Admin
          </h1>

          <p className="mt-2 text-center text-sm text-slate-500">
            Secure login for Healthcare Operations Dashboard
          </p>
        </div>

        <form onSubmit={handleLogin} className="mt-8 space-y-5">
          
          <div>
            <label className="text-sm font-bold text-care-navy">
              Email Address
            </label>

            <input
              type="email"
              placeholder="admin@careos.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 h-12 w-full rounded-2xl border border-slate-200 px-4 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="text-sm font-bold text-care-navy">
              Password
            </label>

            <div className="relative mt-2">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 w-full rounded-2xl border border-slate-200 px-4 pr-12 outline-none focus:border-blue-500"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute right-4 top-3 text-slate-500"
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="h-12 w-full rounded-2xl bg-care-navy text-white font-bold transition hover:opacity-90"
          >
            {loading ? "Signing In..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}