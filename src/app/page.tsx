"use client";

import { useAuth } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

export default function Home() {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.replace("/dashboard");
    }
  }, [isSignedIn, router]);

  return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-700 via-gray-900 to-black px-6">
        <div className="w-full max-w-lg p-8 bg-gray-900 shadow-2xl rounded-3xl text-center border border-gray-700">
          {!isSignedIn ? (
            <>
              <h1 className="text-white text-5xl font-extrabold mb-4 tracking-tight">
                Please Sign In
              </h1>

              <SignInButton>
                <button className="mt-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-semibold text-lg rounded-lg shadow-md hover:from-cyan-400 hover:to-indigo-400 transition-all duration-300 transform hover:scale-105">
                  Sign In
                </button>
              </SignInButton>

              <p className="text-gray-400 mt-3 text-lg">Don't have an account?</p>

              <SignUpButton>
                <button className="mt-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-violet-500 text-white font-semibold text-lg rounded-lg shadow-md hover:from-pink-400 hover:to-violet-400 transition-all duration-300 transform hover:scale-105">
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
