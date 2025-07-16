import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';   

function Back() {
  return (
    <div className="flex justify-center items-center  bg-gradient-to-br py-9 transition-all duration-300 hover:active:scale-75">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-black font-bold bg-gradient-to-r from-red-500 to-red-500 hover:from-pink-600 hover:to-indigo-600 transition-all hover:text-white duration-300 px-6 py-3 rounded-full shadow-xl transform hover:scale-105"
      >
        <ArrowLeft className="w-5 h-5 " />
        <span className="text-base font-semibold tracking-wide transition-all duration-300 hover:active:scale-75">Back to Home</span>
      </Link>
    </div>
  );
}

export default Back;
