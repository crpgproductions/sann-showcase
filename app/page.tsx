import Image from "next/image";
import PageSkeleton from "@/app/components/PageSkeleton";
import { FolderOpen, User } from "lucide-react";
import Logo from "./components/Logo";

export default function Home() {
  const portals = [
    {
      href: "./about",
      label: "Über mich",
      icon: User,
    },
    {
      href: "./projects",
      label: "Projekte",
      icon: FolderOpen,
    },
  ];

  return (
    <PageSkeleton showLogo={false}>

      <div className="flex flex-col w-full">
        <h1 className="font-light text-5xl tracking-tight text-black dark:text-zinc-50">Zeigen!</h1>
        <Logo width={350} />
        <h2 className="font-light text-3xl tracking-tight text-black dark:text-zinc-50 mt-6">Frontend bauen. Testen. Optimieren.</h2>
      </div>

      <section className="w-full py-16 border-b border-black/[.06] dark:border-white/[.06]">
        <p className="my-6 w-full text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Willkommen auf meinem kleinen Showcase. Hier zeige ich etwas über mich, sowie einige der Projekte, die ich umgesetzt habe. Bitte wählen Sie aus einer der beiden Kategorien.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {portals.map((portal) => {
            const Icon = portal.icon;

            return (
              <a
                key={portal.label}
                href={portal.href}
                className="group flex flex-col gap-4"
              >
                <div className="relative flex items-center justify-center w-full aspect-video rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900">

                  <Icon
                    size={80}
                    className="text-zinc-400 transition-all duration-300 group-hover:scale-110 group-hover:text-white"
                  />

                </div>

                <div>
                  <h3 className="font-medium text-black dark:text-white group-hover:underline underline-offset-4">
                    {portal.label}
                  </h3>
                </div>
              </a>
            );
          })}
        </div>
      </section>

    </PageSkeleton>
  );
}