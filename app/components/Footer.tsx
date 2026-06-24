"use client";

import dynamic from "next/dynamic";

const EncryptedText = dynamic(
  () =>
    import("@/components/ui/encrypted-text").then(
      (mod) => mod.EncryptedText
    ),
  {
    ssr: false,
  }
);

export default function Footer({
  className,
}: {
  className?: string;
}) {
  return (
    <footer
      className={`w-full flex items-center justify-center gap-6 px-6 py-4 text-sm text-black dark:text-zinc-50 border-t border-black/[.06] dark:border-white/[.06] ${className ?? ""}`}
    >
      <EncryptedText
        text="Christopher Sann"
        encryptedClassName="text-neutral-500"
        revealedClassName="dark:text-white text-black"
        revealDelayMs={50}
      />
      <span>·</span>
      <span>
        <EncryptedText
          text="Taunusstr. 61, 35415 Pohlheim"
          encryptedClassName="text-neutral-500"
          revealedClassName="dark:text-white text-black"
          revealDelayMs={50}
        />
      </span>
      <span>·</span>
      <span>
        <EncryptedText
          text="c.sann &laquo;&nbsp;at&nbsp;&raquo; gmx.de"
          encryptedClassName="text-neutral-500"
          revealedClassName="dark:text-white text-black"
          revealDelayMs={50}
        />
      </span>
    </footer>
  );
}