"use client";

import React, { useState } from "react";
import { MailCheck, X } from "lucide-react";
import { useParams } from "next/navigation";

export default function VerifyEmailPage() {

  const { email } = useParams();
  const parsedemail = decodeURIComponent(email?.toString() || "" ); // Decode the email parameter




  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-4">

        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="relative w-[90%] max-w-md rounded-3xl border border-white/20 bg-white p-8 shadow-[0_20px_80px_rgba(0,0,0,0.15)]">
          
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
              <MailCheck className="h-10 w-10 text-blue-600" />
            </div>

            <h2 className="mt-6 text-center text-2xl font-bold text-gray-900">
              Email Sent
            </h2>

            <p className="mt-3 text-center text-sm leading-6 text-gray-500">
              A verification email has been sent to{" "}
              <span className="font-semibold text-blue-600">
                {parsedemail}
              </span>
              . Please confirm your email address to continue.  
            </p>

          </div>
        </div>
   
    </main>
  );
}