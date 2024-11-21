import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">Farm Manager</h1>
      <div className="flex gap-4">
        <Link href="/inventory">
          <Button size="lg">
            Inventory Management
          </Button>
        </Link>
        {/* Add more navigation buttons as needed */}
        {/* Example:
        <Link href="/dashboard">
          <Button size="lg">
            Dashboard
          </Button>
        </Link>
        */}
      </div>
    </div>
  );
}
