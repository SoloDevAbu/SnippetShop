import { SidebarItem } from "@repo/ui/developer/dashboard/sidebarItem";
import { checkDeveloperAccess } from "@/utils/auth";
import { HomeIcon, FileCode, FileUp } from "lucide-react";
import { Topbar } from "@repo/ui/developer/dashboard/topbar";
import { SidebarTop } from "@repo/ui/developer/dashboard/sidebarTop";
import { MetadataProvider } from "@repo/ui/developer/new-upload/MetadataContext";
import { MobileMenu, MobileMenuProvider } from "@repo/ui/developer/dashboard/mobileMenu";

export default async function Layout({
  children
}: {
  children: React.ReactNode;
}) {
  const session = await checkDeveloperAccess()
  const sidebarContent = (
    <div className="flex flex-col gap-2 mx-2">
      <SidebarItem href="/developer/dashboard" icon={<HomeIcon />} title="Home" />
      <SidebarItem href="/developer/all-uploads" icon={<FileCode />} title="All Uploads" />
      <SidebarItem href="/developer/new-upload" icon={<FileUp />} title="New Upload" />
    </div>
  );

  return (
    <MobileMenuProvider>
      <div className="flex min-h-screen">
        <MobileMenu>
          {sidebarContent}
        </MobileMenu>

        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-52 md:w-72 border-r border-gray-800">
          <SidebarTop />
          {sidebarContent}
        </aside>

        {/* Main content area */}
        <main className="flex flex-col flex-grow">
          <Topbar title="Dashboard" showMenuButton />
          <div className="flex-grow">
            <MetadataProvider>
              {children}
            </MetadataProvider>
          </div>
        </main>
      </div>
    </MobileMenuProvider>
  );
}
