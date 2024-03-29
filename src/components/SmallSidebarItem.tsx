import { ElementType } from "react";
import { buttonStyles } from "../utils/buttonStyles";

type SmallSidebarItemProps = {
  Icon: ElementType;
  title: string;
  url: string;
};

export function SmallSidebarItem({ Icon, title, url }: SmallSidebarItemProps) {
  return (
    <a
      href={url}
      className={
        (buttonStyles({ variant: "ghost" }),
        "py-4 px-1 flex flex-col items-center rounded-lg gap-1")
      }
    >
      <Icon className="w-6 h-6" />
      <div className="text-sm">{title}</div>
    </a>
  );
}
