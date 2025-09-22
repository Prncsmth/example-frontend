"use client";
import Navbar from "../components/navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen relative">
      {/* Navbar stays on top */}
      <Navbar />

      <div className="flex min-h-screen">
        {/* Left Side - White */}
        <div
          className="w-1/2 flex flex-col items-center justify-center bg-white p-10"
          style={{
            clipPath: "polygon(0 0, 85% 0, 100% 100%, 0% 100%)",
          }}
        >
          <h1 className="text-3xl font-bold mb-4 text-gray-900">
            WELCOME LOSTCREEPER
          </h1>
          <p className="text-gray-700 max-w-md text-center">
            This is the introduction of our website. You can explore different
            pages using the navigation bar above. Go to <strong>About Us</strong> to learn how we built this, or use <strong>Contact Us</strong> to reach out.
          </p>
        </div>

        {/* Right Side - Black */}
        <div
          className="w-1/2 flex items-center justify-center bg-black"
          style={{
            clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        >
          <img src="/logo.png" alt="Logo" className="w-96 h-96 object-contain" />
        </div>
      </div>
    </div>
  );
}
