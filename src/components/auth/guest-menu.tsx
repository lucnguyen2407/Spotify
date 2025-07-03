import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

export default async function GuestMenu() {
  return (
    <>
      <div className="hidden md:flex items-center gap-4 text-sm text-gray-300">
        <Button
          variant="link"
          className="text-gray-300 hover:text-white p-0 h-auto">
          Premium
        </Button>
        <Button
          variant="link"
          className="text-gray-300 hover:text-white p-0 h-auto">
          Support
        </Button>
        <Button
          variant="link"
          className="text-gray-300 hover:text-white p-0 h-auto">
          Download
        </Button>
        <span className="text-gray-500">|</span>
        <Button
          variant="link"
          className="text-gray-300 hover:text-white p-0 h-auto">
          <Download className="w-4 h-4" />
          Install App
        </Button>
        <Button
          variant="link"
          className="text-gray-300 hover:text-white p-0 h-auto"
          asChild>
          <Link href="/signup">Sign up</Link>
        </Button>
      </div>
      <Button
        asChild
        className="bg-white text-black hover:bg-gray-200 rounded-full px-6">
        <Link href="/login">Log in</Link>
      </Button>
    </>
  );
}
