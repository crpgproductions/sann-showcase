'use client'
import { useState } from "react";
import Image from "next/image";
import ImageModal from "@/app/components/ImageModal";
import PageSkeleton from "@/app/components/PageSkeleton";
import Headline from "../components/Headline";
import SectionBlock from "../components/SectionBlock";

const projects = [
  {
    name: "Firmenhomepage",
    description: "Kurze Beschreibung was das Projekt macht.",
    tags: ["Wordpress", "PHP", "Javascript", "HTML", "SCSS"],
    thumbnail: "/images/project1.jpg",
  },
  {
    name: "Shopware 6 Shop", 
    description: "Themeerstellung für einen SW6 Store",
    tags: ["Shopware 6", "Twig", "Javascript", "HTML", "SCSS"],
    thumbnail: "/images/project2.jpg",
  },
  {
    name: "Videoproduktion",
    description: "Hobby Videoprojekt, Erstelleung einiger Videos auf Youtube",
    tags: ["Clipchamp", "Shotcut", "Paintshop Pro", "Nvidia"],
    thumbnail: "/images/project3.jpg",
  }
];


export default function Projects() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  return (
    <PageSkeleton>

      <Headline title={"Projekte"} />

      <section /*style={{ borderBottom: "var(--border-subtle)" }}*/ className="w-full py-16">
        <p className="text-sm uppercase tracking-widest text-zinc-800 dark:text-zinc-200 mb-8">Quellcode</p>

        <a
          href="https://github.com/crpgproductions/sann-showcase"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 w-fit"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-black dark:text-white shrink-0">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.165c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.625-5.48 5.92.43.372.824 1.102.824 2.222v3.293c0 .322.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
          <div>
            <h2 className="text-3xl font-light tracking-tight text-black dark:text-white group-hover:underline underline-offset-4">
              github.com/crpgproductions/sann-showcase
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 mt-1">Ein richtiger Showcase erlaubt natürlich auch einen Einblick hinter die Kulissen.</p>
          </div>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-zinc-400 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15M19.5 4.5H8.25M19.5 4.5v11.25" />
          </svg>
        </a>
      </section>

      {/* Section 2 — Legacy portals */}
      <section /*style={{ borderBottom: "var(--border-subtle)" }}*/ className="w-full py-16">
        <SectionBlock title={"Showcase-ception"} children={<>Es gab schon ältere Showcases vor diesem hier, und diese beinhalteten wiederum einige Projekte, die ich in der Vergangenheit umgesetzt habe. Viel Spaß beim stöbern in der Vergangenheit!</>} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              href: "https://c-sann.de/legacy",
              label: "Legacy",
              screenshot: "./images/legacy.jpg"
            },
            {
              href: "https://c-sann.de/redux",
              label: "Redux",
              screenshot: "./images/redux.jpg"
            },
          ].map((portal) => (
            <a
              key={portal.label}
              href={portal.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-4"
            >
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                <Image
                  src={portal.screenshot}
                  alt={portal.label}
                  title="Link öffnet in neuem Tab"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="eager"
                  className="object-cover grayscale opacity-60 group-hover:opacity-90 group-hover:grayscale-0"
                />
              </div>
              <div>
                <h3 className="font-medium text-black dark:text-white group-hover:underline underline-offset-4">
                  {portal.label}
                </h3>
                {/*
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                  {portal.description}
                </p>
                */}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Section 3 — Other projects */}
      <section className="w-full py-16">
        <SectionBlock title={"Weitere Projekte"} children={<>Folgende Projekte können aus verschiedenen Gründen nicht in voller Pracht gezeigt werden, aber ein kleiner Einblick hinein ist allemal möglich.</>} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group flex flex-col rounded-2xl border border-black/[.08] dark:border-white/[.08] overflow-hidden transition-all hover:border-black/20 dark:hover:border-white/20"
            >
              {/* Thumbnail */}
              <button
                onClick={() => setModalImage(project.thumbnail)}
                className="relative w-full aspect-video bg-zinc-100 dark:bg-zinc-900 overflow-hidden cursor-pointer"
              >
                <Image
                  src={project.thumbnail}
                  alt={project.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </button>

              {/* Card body */}
              <div className="flex flex-col gap-3 p-6 flex-1">
                <h3 className="font-semibold text-black dark:text-white">
                  {project.name}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full border border-black/[.08] dark:border-white/[.08] text-zinc-500 dark:text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal — full size images! */}
      {modalImage && (
        <ImageModal src={modalImage} onClose={() => setModalImage(null)} />
      )}

    </PageSkeleton>
  );
}