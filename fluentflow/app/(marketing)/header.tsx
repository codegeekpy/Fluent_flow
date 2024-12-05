
import Image from "next/image"; // Ensure this is correctly imported
import { ClerkLoading,
    ClerkLoaded,
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton
 } from "@clerk/nextjs";
import {Loader} from "lucide-react";
import { Sign } from "crypto";
export const Header = () => {
  return (
    <header className="h-20 w-full border-b-2 border-slate-200 px-4">
      <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full bg-slate-200">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image alt="logo" src="/logo.svg" height={40} width={40} />
          <h1 className="text-2xl font-extrabold text-orange-600 tracking-wide">FluentFlow</h1>
        </div>
        <ClerkLoading>
 <Loader className="h-5 w-5 text-muted-foreground animate-spin"/>
        </ClerkLoading>
        <ClerkLoaded>
            <SignedIn>
              <UserButton></UserButton>
            </SignedIn>
            <SignedOut>
                <SignInButton>
                </SignInButton>
            </SignedOut>
        </ClerkLoaded>
      </div>
    </header>
  );
};
