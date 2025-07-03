import { Github } from "lucide-react";
import { Button } from "../ui/button";
import { signIn } from "@/lib/auth";

export default async function GithubSignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}>
      <Button
        variant="outline"
        className="w-full sm:w-[324px] h-12 bg-transparent border-gray-600 text-white hover:bg-gray-800 rounded-full">
        <div className="flex items-center justify-center gap-3">
          <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
            <Github className=" text-black" />
          </div>
          Continue with Github
        </div>
      </Button>
    </form>
  );
}
