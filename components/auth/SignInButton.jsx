"use client"

import Link from "next/link"
import { useSession } from "next-auth/react"
import { SignOutButton } from "./SignOutButton"

export default function SignInButton() {
  const { data: session } = useSession();

  if (session) {
    return <SignOutButton />;
  }

  return (
    <Link href="/login">
      <button 
        className="px-4 py-2 bg-black text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Login
      </button>
    </Link>
  );
}
