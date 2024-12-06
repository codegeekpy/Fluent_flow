import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignUpButton,
} from "@clerk/nextjs";
import { SignInButton} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import type { AppProps } from "next/app";

const SignInButtonProps = {
  mode: "modal",
  afterSignInUrl: "/learn",
  afterSignUpUrl: "/learn",
};
export default function Home() {
  return (
    <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-collg:flex-row items-center justify-center p-4 gap-2">
      <div className="relative w-[240px] h-[240px] lg-[424px] lg:h-[424px] mb-8 lg:mb-0">
        <Image src="/panda.svg" fill alt="first" />
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">
          Learn, play, practice and master new languages with FluentFlow, your
          buddy!
        </h1>
        <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignUpButton forceRedirectUrl="/learn">
                <Button size="lg" variant="secondary">
                  Get started
                </Button>
              </SignUpButton>
            </SignedOut>
            <SignedOut>
              <SignInButton forceRedirectUrl="/learn">
                <Button size="lg" variant="primaryOutline">
                  Already have an account?
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Button size="lg" variant="secondary">
                Continue Learning
                <link href="/learn"></link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}
