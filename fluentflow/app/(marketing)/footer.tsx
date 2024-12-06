import Image from "next/image";

import { Button } from "@/components/ui/button";
export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/lang/Telugu.svg"
            alt="telugu"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Telugu
        </Button>

        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/lang/hindi.svg"
            alt="Hindi"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          HINDI
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/lang/tamil.svg"
            alt="tamil"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          tamil
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/lang/kannada.svg"
            alt="kannada"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          kannada
        </Button>

        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/lang/malayalam.svg"
            alt="malayalam"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          malayalam
        </Button>
      </div>
    </footer>
  );
};
