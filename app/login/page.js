"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1C1C1C] p-4">
      <div className="w-full max-w-md space-y-8 p-8 bg-[#2A2A2A] rounded-3xl">
        {/* Logo and Title */}
        <div className="flex items-center gap-3 justify-center mb-8">
          <div className="w-8 h-8 bg-[#E87D65] rounded-lg"></div>
          <span className="text-2xl font-medium text-white">GoMinimo</span>
        </div>

        {/* Google Sign In Button */}
        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-[#3A3A3A] text-white rounded-xl hover:bg-[#444444] transition-colors"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="currentColor"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="currentColor"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="currentColor"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Sign up with Google
        </button>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#3A3A3A]"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-[#2A2A2A] text-[#666666]">or</span>
          </div>
        </div>

        {/* Email Sign In Form */}
        <div className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-[#3A3A3A] text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E87D65] placeholder-[#666666]"
              placeholder="Enter your email"
            />
          </div>

          <button
            onClick={() => signIn("email", { email, callbackUrl: "/" })}
            className="w-full py-3 bg-[#E87D65] text-white rounded-xl hover:bg-[#D66D55] transition-colors"
          >
            Sign up with email
          </button>
        </div>

        <p className="mt-8 text-center text-sm text-[#666666]">
          By signing up, you agree to our{" "}
          <a href="/terms" className="text-[#E87D65] hover:text-[#D66D55]">
            Terms of Service
          </a>
          .
        </p>
      </div>
    </div>
  );
}