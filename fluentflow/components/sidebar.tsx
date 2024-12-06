import { cn } from "@/lib/utils";
import Image from "next/image";
type props={
    className?:string;
}
import Link from "next/link";
import { SidebarItem } from "./sidebar-items";
import { ClerkLoading,
    ClerkLoaded,
    UserButton,
 } from "@clerk/nextjs";
import { Loader } from "lucide-react";
export const SideBar=({className}:props)=>{
    return (
      <div
        className={cn(
          "bg-white flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
          className
        )}
      >
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image alt="logo" src="/logo.svg" height={40} width={40} />
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            FluentFlow
          </h1>
        </div>
        <div className="flex flex-col gap-y-2 flex-1">
          <SidebarItem
            Label="learn"
            href="/learn"
            iconSrc="./icons/Learn.svg"
          />
          <SidebarItem
            Label="Leaderboard"
            href="/Leaderboard"
            iconSrc="./icons/Leaderboard.svg"
          />
          <SidebarItem
            Label="quests"
            href="/quests"
            iconSrc="./icons/quest.svg"
          />
          <SidebarItem Label="Shop" href="/Shop" iconSrc="./icons/Shop.svg" />
        </div>
        <div className="p-4">
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <UserButton afterSwitchSessionUrl="/" />
          </ClerkLoaded>
        </div>
      </div>
    );
};