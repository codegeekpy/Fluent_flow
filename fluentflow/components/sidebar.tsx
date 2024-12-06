import { cn } from "@/lib/utils";

type props={
    className?:string;
}


export const SideBar=({className}:props)=>{
    return(
        <div className={cn("bg-blue-500 flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",className,)}>
            sidebar
        </div>
    );
};