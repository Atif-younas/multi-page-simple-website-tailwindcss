"use client";
export default function Button() {
  return (
    <button onClick={() => window.location.href = "/"} className="bg-blue-400 text-white 
    font-bold py-2 px-4 rounded transition duration-300 ease-in-out 
    transform hover:bg-blue-800 hover:scale-105 ml-9 ">
      Go Back To Your Home Page
    </button>
  );
}
