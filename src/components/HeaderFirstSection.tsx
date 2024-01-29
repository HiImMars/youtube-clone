import { Menu } from "lucide-react";
import { useSidebarContext } from "../contexts/SidebarContext";
import { Button } from "./Button";
import logo from "../assets/logo.svg";

type HeaderFirstSectionProps = {
  hidden?: boolean;
};

export const HeaderFirstSection = ({
  hidden = false,
}: HeaderFirstSectionProps) => {
  const { toggle } = useSidebarContext();

  return (
    <div
      className={`gap-4 items-center flex-shrink-0 ${
        hidden ? "hidden" : "flex"
      }`}
    >
      <Button onClick={toggle} variant="ghost" size="icon">
        <Menu />
      </Button>
      <a href="/" className="flex items-center justify-center gap-1">
        <img src={logo} alt="logo" className="h-6" />
        <span>MyTube</span>
      </a>
    </div>
  );
};
