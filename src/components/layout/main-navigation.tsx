import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, House, Music, Search } from "lucide-react";
import Link from "next/link";
import { SpotifyLogo } from "../ui/logo";

export default function MainNav() {
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-black border-b border-gray-800">
      <div className="flex items-center gap-4">
        <SpotifyLogo />
      </div>

      <div className="flex items-center flex-1 max-w-md mx-8 gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:bg-gray-800">
          <House className="w-5 h-5" />
        </Button>
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="What do you want to play?"
            className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400 rounded-full w-full"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
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
      </div>
    </header>
  );
}
