 import { StickyWrapper } from "@/components/ui/sticky-wrapper";
 import { FeedWrapper } from "@/components/ui/feed-wrapper";
import { Header } from "./header";
import { UserProgress } from "@/components/ui/user-progress";
 const LearnPage=()=>{
    return (
      <div className="flex flex-row-reverse gap-12 px-6">
        <StickyWrapper ><UserProgress
           activeCourse={{title:"Telugu",imageSrc:"./lang/telugu.svg"}}
           hearts={5}
           points={100}
           hasActiveSubscription={false}/></StickyWrapper>
        
        <FeedWrapper>
           <Header title="Telugu"/>
</FeedWrapper>
      </div>
    );
}

export default LearnPage;