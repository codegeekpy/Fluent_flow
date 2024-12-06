import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ClerkLoading,
  ClerkLoaded,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import {SignInButton} from "@clerk/nextjs";

import { UserButtonProps } from "@clerk/types";
const SignInButtonProps = {
  mode: "modal",
  afterSignInUrl: "/learn",
  afterSignUpUrl: "/learn",
};

 

export const Header = () => {
  return (
    <header className="h-20 w-full border-b-2 border-slate-100 bg-slate-200 px-4">
      <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full bg-slate-200">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image alt="logo" src="/logo.svg" height={40} width={40} />
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            FluentFlow
          </h1>
        </div>
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton afterSwitchSessionUrl="/"
            />
          </SignedIn>
          <SignedOut>
            <SignInButton forceRedirectUrl="/learn">
              <Button size="lg" variant="ghost">
               LOGIN
              </Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </header>
  );
};
