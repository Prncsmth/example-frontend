"use client";
import Navbar from "../components/navbar";
import { useState, useEffect } from "react";
import axios from "axios";

const API = process.env.NEXT_PUBLIC_API_URL;

export default function ProfilePage() {
  const [decoded, setDecoded] = useState(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    petsName: ""
  });
  console.log(formData);

  useEffect(() => {
    axios.get(`${API}/api/auth/me`, { withCredentials: true })
      .then((res) => {
        setDecoded(res.data);
        console.log(res.data);
        setFormData({
          ...formData,
          firstName: res.data.firstName || "",  
          lastName: res.data.lastName || "",
          petsName: res.data.petsName || ""
        });
      })
      .catch(() => {
        alert("You must be logged in to view this page.");
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${API}/api/auth/profile`, formData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true
      });
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-white pt-20">
        <div className="max-w-2xl w-full bg-gray-900 p-6 rounded-xl shadow">
          <h1 className="text-2xl font-bold mb-4 text-white">Manage Profile</h1>
          <form onSubmit={handleSave} className="space-y-4">

            <div>
              <label className="block mb-1 text-gray-400">Email</label>
              <input
                type="email"
                className="w-full p-2 rounded bg-gray-800 text-white border border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
                value={decoded?.email || ""}
                disabled
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-400">First Name</label>
              <input
                type="text"
                className="w-full p-2 rounded bg-gray-800 text-white border border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-400">Last Name</label>
              <input
                type="text"
                className="w-full p-2 rounded bg-gray-800 text-white border border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-400">Pet's Name</label>
              <input
                type="text"
                className="w-full p-2 rounded bg-gray-800 text-white border border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
                name="petsName"
                value={formData.petsName}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
            >
              Save Changes
            </button>

          </form>
        </div>
      </div>
    </>
  );
}
