import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SpotifyLogo } from "@/components/ui/logo";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function SpotifySignup() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Spotify Logo */}
        <SpotifyLogo url="/" className="mb-8" />

        {/* Title */}
        <h1 className="text-white text-4xl font-bold text-center mb-12">
          Sign up to <br className="hidden sm:block" />
          start listening
        </h1>

        {/* Email Form */}
        <div className="space-y-6 mb-8 flex flex-col items-center">
          <div className="w-full sm:w-[324px]">
            <label
              htmlFor="email"
              className="block text-white text-sm font-medium mb-3">
              Email address
            </label>
            <Input
              id="email"
              type="email"
              placeholder="name@domain.com"
              className="w-full bg-gray-800 border-gray-600 text-white placeholder-gray-400 h-12 rounded-md focus:border-white"
            />
            <Link
              href="#"
              className="inline-block mt-2 text-green-500 text-sm underline hover:text-green-400">
              Use phone number instead.
            </Link>
          </div>

          <div className="w-full sm:w-[324px]">
            <label
              htmlFor="password"
              className="block text-white text-sm font-medium mb-3">
              Password
            </label>
            <Input
              id="password"
              type="password"
              placeholder="Password"
              className="w-full bg-gray-800 border-gray-600 text-white placeholder-gray-400 h-12 rounded-md focus:border-white"
            />
          </div>

          <div className="w-full sm:w-[324px]">
            <label
              htmlFor="confirmPassword"
              className="block text-white text-sm font-medium mb-3">
              Confirm password
            </label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Enter your password again"
              className="w-full bg-gray-800 border-gray-600 text-white placeholder-gray-400 h-12 rounded-md focus:border-white"
            />
          </div>

          <Button className="w-full sm:w-[324px] bg-green-500 hover:bg-green-600 text-black font-semibold h-12 rounded-full">
            Next
          </Button>
        </div>

        {/* Divider */}
        <div className="relative mb-8 flex justify-center items-center">
          <Separator className="bg-gray-600 w-full sm:!w-[324px]" />
          <div className="absolute inset-0 flex justify-center items-center">
            <span className="bg-black px-4 text-gray-400 text-sm">or</span>
          </div>
        </div>

        {/* Social Signup Buttons */}
        <div className="space-y-4 mb-8 flex flex-col items-center">
          <Button
            variant="outline"
            className="w-full sm:w-[324px] bg-transparent border-gray-600 text-white hover:bg-gray-800 h-12 rounded-full">
            <div className="flex items-center justify-center gap-3">
              <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                <span className="text-black text-sm font-bold">G</span>
              </div>
              Sign up with Google
            </div>
          </Button>

          <Button
            variant="outline"
            className="w-full sm:w-[324px] bg-transparent border-gray-600 text-white hover:bg-gray-800 h-12 rounded-full">
            <div className="flex items-center justify-center gap-3">
              <div className="w-5 h-5 text-white">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                </svg>
              </div>
              Sign up with Apple
            </div>
          </Button>
        </div>

        {/* Login link */}
        <div className="text-center mb-8">
          <p className="text-gray-400">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-white underline hover:text-green-500">
              Log in here
            </Link>
          </p>
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-gray-500 text-xs">
            This site is protected by reCAPTCHA and the Google{" "}
            <Link href="#" className="underline hover:text-gray-400">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="#" className="underline hover:text-gray-400">
              Terms of Service
            </Link>{" "}
            apply.
          </p>
        </div>
      </div>
    </div>
  );
}
