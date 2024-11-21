'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();

  const routes = [
    {
      href: '/',
      label: 'Home',
      active: pathname === '/',
    },
    {
      href: '/(dashboard)/dashboard',
      label: 'Dashboard',
      active: pathname === '/(dashboard)/dashboard',
    },
    {
      href: '/inventory',
      label: 'Inventory',
      active: pathname === '/inventory',
    },
    {
      href: '/(dashboard)/batches',
      label: 'Batches',
      active: pathname === '/(dashboard)/batches',
    },
    {
      href: '/(dashboard)/feed',
      label: 'Feed',
      active: pathname === '/(dashboard)/feed',
    },
    {
      href: '/(dashboard)/health',
      label: 'Health',
      active: pathname === '/(dashboard)/health',
    },
  ];

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            route.active 
              ? "text-black dark:text-white" 
              : "text-muted-foreground"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
} 