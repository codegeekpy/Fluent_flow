"use client";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
type Props={
    Label:string,
    iconSrc:string,
    href:string;
};
import Link from "next/link";
import Image from "next/image";
export const SidebarItem=({
    Label,
    iconSrc,
    href,
}:Props)=>{
    const PathName = usePathname();
    const active = PathName === href;
  return (
    <Button
      variant={active ? "sidebarOutline" : "sidebar"}
      className="justify-start h-[52px]"
      asChild
    >
      <Link href={href}>
      <Image src={iconSrc} 
       alt={Label}
       className="mr-5"
       height={32}
       width={32}
      />
      {Label}</Link>
    </Button>
  );
};
