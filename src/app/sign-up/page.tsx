import { SignUp } from "@clerk/nextjs";


export const metadata = {
  title: "Create an Account | ClerkApp",
  description: "Sign up for an account and get started!",
};

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-700 via-gray-900 to-black px-4">
      <div className="w-full max-w-md p-8 bg-gray-800 shadow-2xl rounded-2xl text-center border border-gray-700">
        <h1 className="text-white text-4xl font-extrabold mb-8 tracking-tight">
          Create an Account
        </h1>
        <SignUp routing="hash" />
      </div>
    </div>
  );
}
