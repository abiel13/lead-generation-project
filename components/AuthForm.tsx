"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner"


export default function AuthForm({pathname}: {pathname: 'sign-in'| 'sign-up'}) {
  const [isLogin, setIsLogin] = useState(pathname === 'sign-in');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false)


  const handleSubmit = async  (e: React.FormEvent) => {
    e.preventDefault();

    if(isLogin) {
      try {
        setLoading(true);
       const response = await axios.post("/api/auth/sign-in", { email, password });
       toast(response.data.message);
        router.push("/dashboard");
      }
      catch (error) {
        toast.error("Login failed: " + (error as Error).message);
        console.error("Login failed:", error);
      }
      finally {
        setLoading(false);
      }
    } else {
      // Handle signup logic here
      try {
        setLoading(true);
        const response = await axios.post("/api/auth/sign-up", { email, password });
        toast(response.data.message);
          router.push("/verify-email/" + encodeURIComponent(email));
      }
      catch (error) {
        toast.error("Signup failed: " + (error as Error).message);
        console.error("Signup failed:", error);
      }
      finally {
        setLoading(false);
      }
    }

  }

  return (
    <div className="w-full max-w-5xl grid md:grid-cols-2 rounded-3xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl">

      {/* LEFT SIDE */}
      <div className="hidden md:flex flex-col justify-between p-10 bg-gradient-to-br from-blue-400/30 ">
        <div>
          <h1 className="text-3xl font-bold text-white">Welcome Back 🚀</h1>
          <p className="text-white/70 mt-4">
            Build, connect and scale your ideas with a modern platform.
          </p>
        </div>

        <div className="text-white/50 text-sm">
          © 2026 LeadFlow. All rights reserved.
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="p-8 md:p-12 text-white">
        <h2 className="text-2xl font-semibold mb-2">
          {isLogin ? "Sign In" : "Create Account"}
        </h2>

        <p className="text-white/60 mb-6">
          {isLogin
            ? "Welcome back! Please enter your details."
            : "Join us and start building something amazing."}
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
      
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-xl bg-white/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-xl bg-white/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />

       

          <button className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition font-medium">
            {isLogin ? "Sign In" : "Sign Up"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-white/10" />
          <span className="px-3 text-white/50 text-sm">or</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

     
        {/* Toggle */}
        <p className="mt-6 text-sm text-white/60 text-center">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2 text-purple-400 hover:underline"
          >
            {isLogin ? "Sign Up" : "Sign In"}
            {loading && " ..."}
          </button>
        </p>
      </div>
    </div>
  );
}