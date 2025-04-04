"use client"
import Link from "next/link"
 
export function SignOutButton() {
  return (
    <Link href="/signout">
      <button 
      className="px-4 py-2 bg-black text-white rounded-lg hover:bg-red-600 transition-colors"
    >
      Sign out
      </button>
    </Link>
  );
}