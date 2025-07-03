import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logout } from "@/lib/actions";
import { Bell } from "lucide-react";

export default async function UserMenu() {
  return (
    <>
      <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-4 py-1 text-sm font-semibold">
        Explore Premium
      </Button>
      <Button
        variant="ghost"
        className="text-gray-300 hover:text-white text-sm">
        Install App
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="text-white hover:bg-gray-800">
        <Bell className="w-4 h-4" />
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="w-8 h-8 bg-red-500 cursor-pointer">
            <AvatarFallback className="bg-red-500 text-white text-sm font-semibold">
              N
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuSeparator />
          <form action={logout}>
            <button type="submit" className="w-full text-left">
              <DropdownMenuItem variant="destructive">Log out</DropdownMenuItem>
            </button>
          </form>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
