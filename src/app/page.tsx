"use client"; 

import { useAuth } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.replace("/dashboard"); 
    }
  }, [isSignedIn, router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-950 to-gray-900 px-6">
      <div className="w-full max-w-lg p-10 bg-gray-800 shadow-2xl rounded-3xl text-center border border-gray-700">
        {!isSignedIn ? (
          <>
            <h1 className="text-white text-4xl font-extrabold mb-6 tracking-tight">
              Please Sign In
            </h1>
            <SignInButton>
              <button className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-blue-500 transition-all duration-300 transform hover:scale-105">
                Sign In Now
              </button>
            </SignInButton>

            <p className="text-gray-400 mt-4">Don't have an account?</p>
            <SignUpButton>
              <button className="mt-2 px-6 py-3 bg-green-600 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-green-500 transition-all duration-300 transform hover:scale-105">
                Create an Account
              </button>
            </SignUpButton>
          </>
        ) : (
          <h1 className="text-white text-4xl font-extrabold mb-6 tracking-tight">
            Redirecting to Dashboard...
          </h1>
        )}
      </div>
    </div>
  );
}
