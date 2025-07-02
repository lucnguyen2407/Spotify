import Link from "next/link";
import React from "react";

export function SpotifyLogo({
  url = "/",
  className = "",
}: {
  url?: string;
  className?: string;
}) {
  return (
    <Link href={url} className={`flex justify-center ${className}`}>
      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-black rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
