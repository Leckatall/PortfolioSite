import Link from "next/link";
import { siteConfig } from "@/lib/config";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between px-4 max-w-7xl mx-auto">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold sm:inline-block">
              {siteConfig.name}
            </span>
          </Link>
          <nav className="flex gap-6">
            <Link
              href="/projects"
              className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
            >
              Projects
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
