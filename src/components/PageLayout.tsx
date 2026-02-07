import React from "react";
import { cn } from "@/lib/utils";

type PageLayoutProps = {
  children: React.ReactNode;
  className?: string;
  showParticles?: boolean;
};

const PageLayout = ({
  children,
  className,
}: PageLayoutProps) => {
  return (
    <div
      className={cn(
        "relative min-h-[100dvh] overflow-hidden bg-background text-foreground",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at top, hsl(0 0% 100% / 0.02), transparent 65%), radial-gradient(circle at bottom, hsl(0 0% 100% / 0.03), transparent 70%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default PageLayout;
