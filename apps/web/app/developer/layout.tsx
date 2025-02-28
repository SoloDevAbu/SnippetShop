import { SidebarItem } from "@repo/ui/developer/dashboard/sidebarItem";
import { JSX } from "react/jsx-runtime";

import { HomeIcon } from "lucide-react";
import { FileCode } from "lucide-react";
import { FileUp } from "lucide-react";

export default function Layout({
  children
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="flex">
      <div className="hidden sm:block w-52 md:w-72 border-r border-slate-300 min-h-screen mr-4 pt-6">
        <div className="flex flex-col gap-2 mx-2">
          <SidebarItem href={"/developer/dashboard"} icon={<HomeIcon />} title="Home" />
          <SidebarItem href={"/developer/all-uploads"} icon={<FileCode />} title="All Uploads" />
          <SidebarItem href={"/developer/new-upload"} icon={<FileUp />} title="New Upload" />
        </div>
      </div>
      {children}
    </div>
  );
}
