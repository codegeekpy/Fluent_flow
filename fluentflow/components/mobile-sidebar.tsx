import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SideBar } from "./sidebar";
import { Menu, Sidebar } from "lucide-react";
export const MobileSidebar=()=>{
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-white"/>
            </SheetTrigger>
            <SheetContent className="p-0 z-[100px] " side="left">
                <Sidebar/>
            </SheetContent>
        </Sheet>
    );
};
