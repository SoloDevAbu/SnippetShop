import { JSX } from "react/jsx-runtime";
import { TopBar } from "../../../../packages/ui/src/category/topbar";

export default function Layout({
    children
}: {
    children: React.ReactNode;
}): JSX.Element {
    return (
        <>
            <TopBar />
            <div className="mt-24">
                {children}
            </div>
        </>
    )
}