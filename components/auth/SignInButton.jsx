"use client"

import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { SignOutButton } from "./SignOutButton"

export default function SignInButton() {
  const router = useRouter();
  const { data: session } = useSession();

  if (session) {
    return <SignOutButton />;
  }

  return (
    <button 
      onClick={() => router.push('/login')}
      className="px-4 py-2 bg-black text-white rounded-lg hover:bg-blue-700 transition-colors"
    >
      Login
    </button>
  );
}
