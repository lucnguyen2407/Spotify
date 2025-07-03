import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CardContent, CardNoBorder } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { SpotifyLogo } from "@/components/ui/logo";
import LoginForm from "@/components/auth/login-form";

export default function SpotifyLogin() {
  return (
    <div className="min-h-screen bg-[#121212] sm:bg-gradient-to-b sm:from-gray-800 sm:to-black flex items-start justify-center p-4 sm:p-8">
      <CardNoBorder className="w-full max-w-none sm:max-w-[734px] bg-[#121212] rounded-none sm:rounded-xl">
        <CardContent className="p-4 sm:p-8">
          {/* Spotify Logo */}
          <SpotifyLogo url="/" className="mb-8" />
          {/* Title */}
          <h1 className="text-white text-2xl sm:text-3xl font-bold text-center mb-8">
            Log in to Spotify
          </h1>
          {/* Social Login Buttons */}
          <div className="space-y-4 mb-8 flex flex-col items-center">
            <Button
              variant="outline"
              className="w-full sm:w-[324px] h-12 bg-transparent border-gray-600 text-white hover:bg-gray-800 rounded-full">
              <div className="flex items-center justify-center gap-3">
                <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                  <span className="text-black text-sm font-bold">G</span>
                </div>
                Continue with Google
              </div>
            </Button>

            <Button
              variant="outline"
              className="w-full sm:w-[324px] h-12 bg-transparent border-gray-600 text-white hover:bg-gray-800 rounded-full">
              <div className="flex items-center justify-center gap-3">
                <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-sm font-bold">f</span>
                </div>
                Continue with Facebook
              </div>
            </Button>
          </div>
          {/* Divider */}
          <div className="relative mb-8 flex justify-center">
            <Separator className="bg-gray-600 w-full sm:!w-[534px]" />
          </div>
          {/* Email Form */}
          <LoginForm />
          {/* Sign up link */}
          <div className="text-center mt-8">
            <p className="text-gray-400">
              {"Don't have an account?"}{" "}
              <Link
                href="/signup"
                className="text-white underline hover:text-green-500">
                Sign up for Spotify
              </Link>
            </p>
          </div>
        </CardContent>
      </CardNoBorder>

      {/* Footer */}
      <div className="fixed bg-[#121212] bottom-0 left-0 right-0 p-8 text-center">
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
  );
}
