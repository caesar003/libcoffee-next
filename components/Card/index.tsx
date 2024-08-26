import React from "react";

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden shadow-md w-72 m-4 bg-white flex flex-col">
      {children}
    </div>
  );
}

export function CardHeader({ title }: { title: string }) {
  return (
    <div className="bg-gray-100 p-4 text-lg font-bold border-b border-gray-200">
      {title}
    </div>
  );
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1 p-4 text-base text-gray-800">
      {children}
    </div>
  );
}

export function CardThumbnail({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-full">
      <img src={src} alt={alt} className="w-full h-auto block" />
    </div>
  );
}

export function CardAvatar({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex justify-center items-center p-4">
      <img src={src} alt={alt} className="w-24 h-24 rounded-full object-cover" />
    </div>
  );
}

export function CardFooter({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-100 p-4 border-t border-gray-200 text-right">
      {children}
    </div>
  );
}
