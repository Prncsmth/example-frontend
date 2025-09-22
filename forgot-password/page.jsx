"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const API = process.env.NEXT_PUBLIC_API_URL;

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    petsName: "",
    newPass: "",
    confirmNewPass: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.newPass !== formData.confirmNewPass) {
      alert("New password must match Confirm password");
      return;
    }
    try {
      const res = await axios.post(`${API}/api/auth/forgot-password`, formData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true
      });
      if (res.data.status) router.push("/home");
      else alert(res.data.message);
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
        <img
          src="/logo.png"
          alt="Logo"
          className="w-94 h-94 object-contain"
        />
      </div>

      {/* Right Side - Forgot Password Form */}
      <div
        className="w-1/2 flex items-center justify-center bg-white relative"
        style={{
          clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      >
        <div className="w-full max-w-md bg-gray-900 rounded-3xl shadow-2xl p-10">
          <h1 className="text-4xl font-bold text-white text-center mb-8">
            Forgot Password
          </h1>

          <form className="flex flex-col gap-4 items-center" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-[300px] h-[50px] p-4 rounded-[50px] bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />

            <input
              type="text"
              name="petsName"
              placeholder="Enter your pet's name"
              value={formData.petsName}
              onChange={handleChange}
              className="w-[300px] h-[50px] p-4 rounded-[50px] bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />

            <input
              type="password"
              name="newPass"
              placeholder="Enter new password"
              value={formData.newPass}
              onChange={handleChange}
              className="w-[300px] h-[50px] p-4 rounded-[50px] bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />

            <input
              type="password"
              name="confirmNewPass"
              placeholder="Confirm new password"
              value={formData.confirmNewPass}
              onChange={handleChange}
              className="w-[300px] h-[50px] p-4 rounded-[50px] bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />

            <button
              type="submit"
              className="w-[300px] h-[50px] bg-indigo-600 hover:bg-indigo-700 text-white rounded-[50px] mt-4 transition duration-300"
            >
              Next
            </button>
          </form>

          {/* Return to Login Link */}
          <div className="mt-4 text-center">
            <a
              href="/login"
              className="text-indigo-400 hover:underline"
            >
              Return to Login
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
