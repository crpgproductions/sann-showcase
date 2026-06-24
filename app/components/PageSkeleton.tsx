import { AuroraBackground } from "@/app/components/ui/aurora-background";
import Menu from "@/app/components/Menu";
import Footer from "@/app/components/Footer";

export default function PageSkeleton({ children }: { children: React.ReactNode }) {
  return (
    <AuroraBackground className="flex flex-col flex-1 items-center justify-center font-sans min-h-screen">
      <main className="relative flex flex-1 w-full max-w-7xl flex-col items-center pt-32 px-16 sm:items-start bg-white/80 dark:bg-black/60
before:absolute before:inset-0 before:backdrop-blur-sm before:-z-10">
        <Menu />
        {children}
        <Footer className="mt-auto" />
      </main>
    </AuroraBackground>
  );
}