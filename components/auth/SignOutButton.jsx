"use client"
import { signOut } from "next-auth/react"
 
export function SignOutButton() {
  return (
    <button 
      onClick={() => signOut()}
      className="px-4 py-2 bg-black text-white rounded-lg hover:bg-red-600 transition-colors"
    >
      Sign out
    </button>
  );
}