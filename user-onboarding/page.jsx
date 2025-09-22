"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const API = process.env.NEXT_PUBLIC_API_URL;

export default function OnboardingPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ 
    firstName: "", 
    lastName: "", 
    petsName: "" 
});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({...prev, [name]: value}));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`${API}/api/auth/onboarding`, formData, { 
        withCredentials: true 
    });
    router.push("/profile");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <h1 className="text-xl font-bold mb-4">Welcome! Complete Your Profile</h1>
        
        <input 
            name="firstName" 
            value={formData.firstName} 
            onChange={handleChange} 
            placeholder="First Name" 
            className="border p-2 mb-2 w-full" 
        />
        <input 
            name="lastName" 
            value={formData.lastName} 
            onChange={handleChange} 
            placeholder="Last Name" 
            className="border p-2 mb-2 w-full" 
        />
        <input 
            name="petsName" 
            value={formData.petsName} 
            onChange={handleChange} 
            placeholder="Pet's Name" 
            className="border p-2 mb-4 w-full" 
        />
        
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Save & Continue
        </button>
      </form>
    </div>
  );
}
