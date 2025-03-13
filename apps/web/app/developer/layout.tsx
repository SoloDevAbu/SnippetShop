import { SidebarItem } from "@repo/ui/developer/dashboard/sidebarItem";
import { checkDeveloperAccess } from "@/utils/auth";

import { HomeIcon } from "lucide-react";
import { FileCode } from "lucide-react";
import { FileUp } from "lucide-react";
import { Topbar } from "@repo/ui/developer/dashboard/topbar";
import { SidebarTop } from "@repo/ui/developer/dashboard/sidebarTop";
import { MetadataProvider } from "@repo/ui/developer/new-upload/MetadataContext";

export default async function Layout({
  children
}: {
  children: React.ReactNode;
}) {
  const session = await checkDeveloperAccess()
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="hidden sm:block w-52 md:w-72 border-r border-gray-800">
        <SidebarTop />
        <div className="flex flex-col gap-2 mx-2">
          <SidebarItem href="/developer/dashboard" icon={<HomeIcon />} title="Home" />
          <SidebarItem href="/developer/all-uploads" icon={<FileCode />} title="All Uploads" />
          <SidebarItem href="/developer/new-upload" icon={<FileUp />} title="New Upload" />
        </div>
      </aside>

      {/* Main content area */}
      <main className="flex flex-col flex-grow">
        <Topbar title="Dashboard" />
        <div className="flex-grow">
          <MetadataProvider>
            {children}
          </MetadataProvider>
        </div>
      </main>
    </div>
  );
}
