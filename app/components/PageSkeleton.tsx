import { AuroraBackground } from "@/app/components/ui/aurora-background";
import Menu from "@/app/components/Menu";
import Footer from "@/app/components/Footer";
import Logo from "./Logo";

interface PageSkeletonProps {
  children: React.ReactNode;
  showLogo?: boolean;
}

export default function PageSkeleton({ children, showLogo = true }: PageSkeletonProps) {
  return (
    <AuroraBackground className="flex flex-col flex-1 items-center justify-center font-sans min-h-screen">
      <main className="relative flex flex-1 w-full max-w-7xl flex-col items-center pt-8 px-6 sm:px-16 sm:items-start bg-white/70 dark:bg-black/60
        before:absolute before:inset-0 before:backdrop-blur-sm before:-z-10">
        <Menu />
        {showLogo && (
          <div className="mb-12 w-full">
            <Logo width={120} href="/" />
            <hr style={{ border: "none", borderTop: "var(--border-subtle)" }} className="mt-4 w-full" />
          </div>
        )}
        {showLogo ? children : (
          <div className="mt-24 w-full">
            {children}
          </div>
        )}
        <Footer className="mt-auto" />
      </main>
    </AuroraBackground>
  );
}