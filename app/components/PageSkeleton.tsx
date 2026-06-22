import Menu from "@/app/components/Menu";
import Footer from "@/app/components/Footer";

export default function PageSkeleton({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-7xl flex-col items-center pt-32 px-16 bg-white dark:bg-black sm:items-start">
        <Menu />
        {children}
        <Footer className="mt-auto" />
      </main>
    </div>
  );
}