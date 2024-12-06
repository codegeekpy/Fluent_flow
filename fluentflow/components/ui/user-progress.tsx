import Link from "next/link";
import { Button } from "./button";
import Image from "next/image";
type Props={
    activeCourse:{imageSrc:string, title:string};
    hearts:number;
    points:number;
    hasActiveSubscription:boolean;
}
import { InfinityIcon } from "lucide-react";
export const UserProgress=({
    activeCourse,
    points,
    hearts,
    hasActiveSubscription
}:Props)=>{
    return (
      <div className="flex items-center justify-between gap-x-2">
        <Link href="/courses">
          <Button variant="ghost">
            <Image
              src={activeCourse.imageSrc}
              alt={activeCourse.title}
              className="rounded-md border"
              width={32}
              height={32}
            />
          </Button>
        </Link>
        <Link href="/shop">
          <Button variant="ghost" className="text-orange-500">
            <Image
              src="./icons/Points.svg"
              height={28}
              width={28}
              alt="Points"
              className="mr-2"
            />
            {points}
          </Button>
        </Link>
        <Link href="/Heart">
          <Button variant="ghost" className="text-rose-500">
            <Image
              src="./icons/Hearts.svg"
              height={28}
              width={28}
              alt="Hearts"
              className="mr-2"
            />
            {hasActiveSubscription?<InfinityIcon className="h-4 w-4 stroke-[3]"/> : hearts}
          </Button>
        </Link>
      </div>
    );
};