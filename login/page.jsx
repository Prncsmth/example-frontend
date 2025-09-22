"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import { signIn } from "next-auth/react";

const API = process.env.NEXT_PUBLIC_API_URL;

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API}/api/auth/login`, formData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      if (res.data.status && res.data.isOnboarded) router.push("/home");
      else router.push("/user-onboarding");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-900 relative">
      {/* Left Side - Logo with curved edge */}
      <div
        className="w-1/2 flex items-center justify-center bg-black relative"
        style={{
          clipPath: "polygon(0 0, 85% 0, 100% 100%, 0% 100%)",
        }}
      >
        <img src="/logo.png" alt="Logo" className="w-94 h-94 object-contain" />
      </div>

      {/* Right Side - Login Form with matching curve */}
      <div
        className="w-1/2 flex items-center justify-center bg-white relative"
        style={{
          clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      >
        <div className="w-full max-w-md bg-gray-900 rounded-3xl shadow-2xl p-10">
          <h1 className="text-4xl font-bold text-white text-center mb-8">Login</h1>

          {/* Email / Password Form */}
          <form className="flex flex-col gap-4 items-center" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              className="w-[300px] h-[50px] p-4 rounded-[50px] bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="w-[300px] h-[50px] p-4 rounded-[50px] bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              className="w-[300px] h-[50px] bg-indigo-600 hover:bg-indigo-700 text-white rounded-[50px] mt-4 transition duration-300 cursor-pointer"
            >
              Login
            </button>
          </form>

          {/* Forgot Password Link */}
          <div className="mt-4 text-center">
            <a href="/forgot-password" className="text-indigo-400 hover:underline">
              Forgot password?
            </a>
          </div>

          <div className="my-6 text-gray-400 text-center">or</div>

          {/* Google Login Button */}
          <div className="flex justify-center">
            <button
              onClick={() => signIn("google")}
              className="w-[300px] h-[50px] flex items-center justify-center bg-white hover:bg-gray-200 text-black rounded-[50px] mt-4 transition duration-300 cursor-pointer border border-gray-300"
            >
              <img src="/google.png" alt="Google" className="w-6 h-6 mr-2" />
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
