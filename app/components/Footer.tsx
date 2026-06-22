export default function Footer({ className }: { className?: string }) {
  return (
    <footer className={`w-full flex items-center justify-center gap-6 px-6 py-4 text-sm text-black dark:text-zinc-50 border-t border-black/[.06] dark:border-white/[.06] ${className ?? ""}`}>
      <span>NAME NACHNAME</span>
      <span>·</span>
      <span>Musterstraße 1, 12345 Musterstadt</span>
      <span>·</span>
      <span>x@domainxyz.de</span>
    </footer>
  );
}