"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignOutPage() {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/login" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1C1C1C] p-4">
      <div className="w-full max-w-md space-y-8 p-8 bg-[#2A2A2A] rounded-3xl">
        {/* Logo and Title */}
        <div className="flex items-center gap-3 justify-center mb-8">
          <div className="w-8 h-8 bg-[#E87D65] rounded-lg"></div>
          <span className="text-2xl font-medium text-white">GoMinimo</span>
        </div>

        {/* Sign Out Content */}
        <div className="text-center space-y-6">
          <h2 className="text-2xl font-semibold text-white">Are you sure you want to sign out?</h2>
          <p className="text-[#666666]">You can always sign back in later.</p>
          
          <div className="flex flex-col gap-4">
            <button
              onClick={handleSignOut}
              className="w-full py-3 bg-[#E87D65] text-white rounded-xl hover:bg-[#D66D55] transition-colors"
            >
              Yes, sign me out
            </button>
            
            <button
              onClick={() => router.back()}
              className="w-full py-3 bg-[#3A3A3A] text-white rounded-xl hover:bg-[#444444] transition-colors"
            >
              No, take me back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}