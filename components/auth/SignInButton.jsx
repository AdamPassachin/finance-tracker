"use client"

import { signIn, useSession } from "next-auth/react"
import { SignOut } from "./SignOutButton"

export default function SignInButton() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <button 
        className="px-4 py-2 bg-gray-100 text-gray-400 rounded-lg"
        disabled
      >
        Loading...
      </button>
    );
  }

  if (session) {
    return <SignOut />;
  }

  return (
    <button 
      onClick={() => signIn('', {
        redirectTo: '/'
      })}
      className="px-4 py-2 bg-black text-white rounded-lg hover:bg-blue-700 transition-colors"
    >
      Login
    </button>
  );
}
