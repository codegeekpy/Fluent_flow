import { Button } from "@/components/ui/button";

const ButtonsPage=()=>{
    return (
      <div className="p-4 space-y-4 flex flex-col max-w-[200px]">
        <Button>default</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="primaryOutline">PrimaryOutline</Button>
        <Button variant="secondary">secondary</Button>
        <Button variant="secondaryOutline">secondaryOutline</Button>
        <Button variant="danger">danger</Button>
        <Button variant="dangerOutline">DangerOutline</Button>
        <Button variant="super">super</Button>
        <Button variant="superOutline">superoutline</Button>
        <Button variant="ghost">ghost</Button>
        <Button variant="sidebar">sidebar</Button>
        <Button variant="sidebarOutline">sidebaroutline</Button>
      </div>
    );
};
export default ButtonsPage;