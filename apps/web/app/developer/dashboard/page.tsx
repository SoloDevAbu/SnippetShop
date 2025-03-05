import { StatusCard } from "@repo/ui/developer/dashboard/StatusCard";

export default function DashboardPage() {
    return (
        <div className="px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <StatusCard />
                <StatusCard />
                <StatusCard />
                <StatusCard />
            </div>
        </div>
    );
}
