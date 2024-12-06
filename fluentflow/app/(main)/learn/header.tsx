import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
type Props={
    title:string;

};

export const Header=({title}:Props)=>{
    return(
        <div className="stciky top-0 bg-white pb-3 lg:pt-[28px] flex items-cente justify-between border-b-2 mb-5 text-neutral-500 lg:z-50">
            <Link href="/courses">
            <Button>
             <ArrowLeft  className="h-5 w-5 stroke-2 text-neutral-400"/>
            </Button>
            </Link>
            <h1 className="font-bold text-lg">
                {title}
            </h1>
            <div />
        </div>
    );
};
