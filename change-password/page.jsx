"use client";
import { useState } from "react";
import Navbar from "../components/navbar";
import axios from "axios";

const API = process.env.NEXT_PUBLIC_API_URL;

export default function ChangePasswordPage() {
  const [formData, setFormData] = useState({
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: ""
  })
  console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  const handleChangePass = async (e) => {
    e.preventDefault();
    if (formData.newPassword != formData.confirmNewPassword) alert("Cannot proceed must be new password is equals to confirm new password");
    try {
      console.log(formData);
      axios.post(`${API}/api/auth/change-password`, { formData }, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-white pt-20">
        <div className="max-w-md w-full bg-gray-900 p-6 rounded-xl shadow">
          <h1 className="text-2xl font-bold mb-4 text-white" >Change Password</h1>

          <form onSubmit={handleChangePass} className="space-y-4">
            <div>
              <label className="block mb-1 text-gray-400 border-2px-white">Email</label>
              <input
                type="email"
                className="w-full p-2 rounded bg-gray-800 text-white border border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
                name="email"
                onChange={handleChange}
                value={formData.email}
                required
              />
              <label className="block mb-1 text-gray-400 ">Current Password</label>
              <input
                type="password"
                className="w-full p-2 rounded bg-gray-800 text-white border border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
                name="currentPassword"
                onChange={handleChange}
                value={formData.currentPassword}
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-400">New Password</label>
              <input
                type="password"
                className="w-full p-2 rounded bg-gray-800 text-white border border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
                name="newPassword"
                onChange={handleChange}
                value={formData.newPassword}
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-400">Confirm New Password</label>
              <input
                type="password"
                className="w-full p-2 rounded bg-gray-800 text-white border border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
                name="confirmNewPassword"
                value={formData.confirmNewPassword}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer">
              Change Password
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
