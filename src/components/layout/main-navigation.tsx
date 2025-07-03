import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { auth } from "@/lib/auth";
import { House, Search } from "lucide-react";
import GuestMenu from "../auth/guest-menu";
import UserMenu from "../auth/user-menu";
import { SpotifyLogo } from "../ui/logo";

export default async function MainNav() {
  const session = await auth();
  console.log("Session:", session);

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
        {session ? <UserMenu /> : <GuestMenu />}
      </div>
    </header>
  );
}
