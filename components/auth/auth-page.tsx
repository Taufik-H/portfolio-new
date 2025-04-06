import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Github, Mail } from "lucide-react";
import Link from "next/link";
import AuthButton from "@/components/auth/auth-button";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function AuthPage() {
  const session = await auth();
  if (session) return redirect(`/`);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F5F5F5] dark:bg-neutral-900 p-4">
      <div className="w-full max-w-md mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 w-16 h-16 sm:w-20 sm:h-20 bg-[#FF8A00] dark:bg-[#cc6e00] border-2 border-black dark:border-neutral-600 rounded-full"></div>
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-white dark:bg-neutral-800 border-2 border-black dark:border-neutral-600 rounded-full flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <span className="text-3xl sm:text-4xl font-bold text-black dark:text-white">
                P
              </span>
            </div>
          </div>
        </div>

        {/* Auth Card */}
        <div className="relative">
          <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 md:-top-4 md:-left-4 w-full h-full bg-[#E0F7FA] dark:bg-[#0d4b55] border-2 border-black dark:border-neutral-600 rounded-lg sm:rounded-xl"></div>
          <Card className="relative border-2 border-black dark:border-neutral-600 rounded-lg sm:rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <CardHeader className="space-y-1 text-center">
              <CardTitle className="text-2xl sm:text-3xl font-bold">
                Welcome Back
              </CardTitle>
              <CardDescription className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                Sign in to your Portolity account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Google Login Button */}
              <AuthButton
                action="signin"
                provider="google"
                className="w-full py-5 bg-white dark:bg-neutral-800 hover:bg-gray-50 dark:hover:bg-neutral-700 text-black dark:text-white"
                icon={
                  <div className="w-5 h-5 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                    >
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                  </div>
                }
              >
                Continue with Google
              </AuthButton>

              {/* GitHub Login Button */}
              <AuthButton
                action="signin"
                provider="github"
                className="w-full py-5 bg-white dark:bg-neutral-800 hover:bg-gray-50 dark:hover:bg-neutral-700 text-black dark:text-white"
                icon={<Github className="w-5 h-5" />}
              >
                Continue with GitHub
              </AuthButton>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-300 dark:border-gray-700" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white dark:bg-neutral-800 px-2 text-gray-500 dark:text-gray-400">
                    Or
                  </span>
                </div>
              </div>

              {/* Email Login Button */}
              <AuthButton
                disabled
                action="signin"
                provider="email"
                className="w-full py-5 bg-[#FF8A00] hover:bg-[#e67e00] text-white"
                icon={<Mail className="w-5 h-5" />}
              >
                Continue with Email
              </AuthButton>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="text-center text-sm text-gray-700 dark:text-gray-300">
                By continuing, you agree to our{" "}
                <Link href="/terms" className="underline hover:text-[#FF8A00]">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="underline hover:text-[#FF8A00]"
                >
                  Privacy Policy
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
