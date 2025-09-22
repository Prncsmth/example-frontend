"use client";
import Navbar from "../components/navbar";

export default function ContactPage() {
  return (
    <>
      <Navbar />
        <h1 className="text-2xl font-bold">Contact</h1>
        <p className="mt-2 text-gray-600">
          For questions about this project, reach out to the instructor or check the documentation.
        </p>

        {/* Social Media Links */}
        <div className="mt-6 flex gap-6 position: fixed bottom-100 left-140">
          <a
            href="https://www.facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 text-2xl"
          >
            <i className="fab fa-facebook"></i> <img src="/facebook.png" alt="Facebook" className="w-15 h-15 inline" />
          </a>
        
          <a
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-700 text-2xl"
          >
            <i className="fab fa-instagram"></i> <img src="/instagram.png" alt="Instagram" className="w-15 h-15 inline" />
          </a>

          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-900 text-2xl"
          >
            <i className="fab fa-github"></i> <img src="/github.png" alt="GitHub" className="w-15 h-15 inline" />
    
          </a>
        
          <a
            href="https://www.X.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 text-2xl"
          >
            <i className="fab fa-github"></i> <img src="/x.png" alt="Twitter" className="w-15 h-15 inline" />

          </a>

          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 text-2xl"
          >
             <i className="fab fa-github"></i> <img src="/linkedin.png" alt="Twitter" className="w-15 h-15 inline" />
          </a>
        </div>
    </>
  );
}
