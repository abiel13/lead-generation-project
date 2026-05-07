import React from 'react';


export default function AuthLayout ({ children}: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#326188] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-white/30 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[500px] h-[500px] bg-white/30 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />
        {children}
     
    </div>
  );
}