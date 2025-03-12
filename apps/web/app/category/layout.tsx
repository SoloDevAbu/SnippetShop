"use client"

import { JSX } from "react/jsx-runtime";
import { TopBar } from "../../../../packages/ui/src/category/topbar";
import { usePathname } from "next/navigation";
import { MetadataProvider } from "@repo/ui/developer/new-upload/MetadataContext";

export default function Layout({
    children
}: {
    children: React.ReactNode;
}): JSX.Element {
    const pathname = usePathname();
    const isSnippetPage = pathname.split('/').length > 3;
    return (
        <>
            {!isSnippetPage && <TopBar />}
            <div className={!isSnippetPage ? "mt-24" : ""}>
                <MetadataProvider>
                    {children}
                </MetadataProvider>
            </div>
        </>
    )
}