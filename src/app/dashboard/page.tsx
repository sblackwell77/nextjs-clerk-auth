"use client"; 

import { useUser, useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { user, isLoaded } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();
  const [name, setName] = useState(user?.firstName || "");

  useEffect(() => {
    if (isLoaded && !user) {
      router.replace("/sign-in");
    }
  }, [isLoaded, user, router]);

  if (!isLoaded) return <div className="text-white text-2xl">Loading...</div>;

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 text-white p-6">
      <div className="w-full max-w-4xl flex justify-between items-center p-4 bg-gray-800 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button
          onClick={() => signOut(() => router.push("/"))}
          className="px-4 py-2 bg-red-600 rounded-md hover:bg-red-500 transition-all"
        >
          Sign Out
        </button>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-4xl font-extrabold">Welcome, {name || "User"}!</h2>
        <p className="text-gray-400 mt-2">Your email: {user?.primaryEmailAddress?.emailAddress}</p>
      </div>
    </div>
  );
}
