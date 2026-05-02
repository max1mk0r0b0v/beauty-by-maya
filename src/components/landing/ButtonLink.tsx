import Link from "next/link";
import { type AnchorHTMLAttributes, type ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const variants = {
  primary:
    "bg-[linear-gradient(135deg,#ff7f9d,#f01857)] text-white shadow-[0_18px_45px_rgba(240,24,87,0.34)] hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(240,24,87,0.46)]",
  secondary:
    "border border-white/15 bg-white/8 text-rose-50 shadow-[0_14px_35px_rgba(0,0,0,0.18)] backdrop-blur hover:-translate-y-1 hover:border-rose-200/35 hover:bg-white/14",
  ghost:
    "text-rose-100/80 underline-offset-8 hover:text-white hover:underline",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonLinkProps) {
  const baseClass =
    variant === "ghost"
      ? "group inline-flex items-center justify-center rounded-full px-2 py-2 text-sm font-semibold transition duration-300"
      : "group inline-flex min-h-12 items-center justify-center rounded-sm px-8 py-3.5 text-sm font-bold tracking-wide transition duration-300 ease-out focus:outline-none focus:ring-4 focus:ring-rose-300/30 sm:text-base";

  return (
    <Link className={`${baseClass} ${variants[variant]} ${className}`} href={href} {...props}>
      <span className="transition duration-300 group-hover:scale-[1.02]">{children}</span>
    </Link>
  );
}
