"use client"; 

import { SignIn } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";

export default function SignInPage() {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.replace("/dashboard"); 
    }
  }, [isSignedIn, router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-950 to-black px-4">
      <div className="w-full max-w-md p-8 bg-gray-800 shadow-2xl rounded-2xl text-center">
        <h1 className="text-white text-4xl font-extrabold mb-8 tracking-tight">
          Sign In
        </h1>
        <SignIn routing="hash" />
      </div>
    </div>
  );
}
