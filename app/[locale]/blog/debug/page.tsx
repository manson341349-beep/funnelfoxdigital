/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

export default function DebugImages(){
  return (
    <main className="container-max py-10">
      <h1 className="text-2xl font-bold mb-4">Image Debug</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="font-medium mb-2">{`<img>`} from /public</h2>
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-neutral-100">
            <img src="/media/blog/ai-cwv.svg" alt="test" className="w-full h-full object-cover" />
          </div>
        </div>
        <div>
          <h2 className="font-medium mb-2">Next/Image (string path)</h2>
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-neutral-100">
            <Image src="/media/blog/ai-cwv.svg" alt="test" fill className="object-cover" />
          </div>
        </div>
      </div>
    </main>
  );
}