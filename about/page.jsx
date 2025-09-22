"use client";
import Navbar from "../components/navbar";

export default function AboutPage() {
  return (
    <div className="min-h-screen relative flex">
      {/* Navbar outside so it's always visible */}
      <Navbar />

      {/* Left Side - White */}
      <div
        className="w-1/2 flex flex-col items-center justify-center bg-black p-10"
        style={{
          clipPath: "polygon(0 0, 85% 0, 100% 100%, 0% 100%)",
        }}
      >
        <p className="text-gray-500 max-w-md text-center text-lg">
          “In completion of our Midterm Project IM2, this project demonstrates a simple authentication system built using Next.js. It showcases user login, registration, and secure session management, highlighting the fundamentals of modern web authentication.”
        </p>
      </div>

      {/* Right Side - Black */}
      <div
        className="w-1/2 flex items-center justify-center bg-white"
        style={{
          clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      >
        <h1 className="text-3xl font-bold mb-4 text-gray-900">ABOUT US</h1>
      </div>
    </div>
  );
}
