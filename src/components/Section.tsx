import { cn } from "@/lib/cn";

export function Section({
  className,
  innerClassName,
  children,
  id,
}: {
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-14 md:py-20", className)}>
      <div className={cn("container-x", innerClassName)}>{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center rounded-full bg-brand-50 text-brand-700 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
      {children}
    </div>
  );
}

export function H2({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={cn("text-3xl md:text-4xl font-extrabold leading-tight", className)}>
      {children}
    </h2>
  );
}
