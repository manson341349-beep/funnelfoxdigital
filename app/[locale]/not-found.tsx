import React from "react";
import Link from "next/link";

export default function NotFound(){
  return (
    <main className="container-max py-24 text-center">
      <h1 className="text-4xl font-bold">Page not found</h1>
      <p className="mt-2 text-neutral-600">The page you're looking for doesn't exist.</p>
      <div className="mt-6"><Link href="/" className="btn-primary">Back to Home</Link></div>
    </main>
  );
}