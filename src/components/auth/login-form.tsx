"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authenticate } from "@/lib/actions";
import { useActionState } from "react";

export default function LoginForm() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );
  return (
    <form action={formAction}>
      <div className="space-y-6 flex flex-col items-center">
        <div className="w-full sm:w-[324px]">
          <label
            htmlFor="email"
            className="block text-white text-sm font-medium mb-2">
            Email or username
          </label>
          <Input
            id="email"
            name="email"
            type="text"
            placeholder="Email or username"
            className="w-full h-12 bg-gray-800 border-gray-600 text-white placeholder-gray-400 rounded-md focus:border-white"
          />
        </div>
        <div className="w-full sm:w-[324px]">
          <label
            htmlFor="password"
            className="block text-white text-sm font-medium mb-2">
            Password
          </label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            className="w-full h-12 bg-gray-800 border-gray-600 text-white placeholder-gray-400 rounded-md focus:border-white"
          />
        </div>

        <Button
          aria-disabled={isPending}
          className="w-full sm:w-[324px] h-12 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-full">
          Log In
        </Button>
        {errorMessage && (
          <>
            <p className="text-sm text-red-500">{errorMessage}</p>
          </>
        )}
      </div>
    </form>
  );
}
