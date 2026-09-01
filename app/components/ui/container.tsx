import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const MAX_WIDTHS = {
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "6xl": "max-w-6xl",
} as const;

type ContainerProps = {
  children: ReactNode;
  size?: keyof typeof MAX_WIDTHS;
  className?: string;
};

/**
 * Centers content within a max-width column. Combining a fixed mx-{n}
 * margin with a max-w-* cap (without mx-auto) leaves the block flush
 * against the left margin on wide viewports instead of centered — use
 * this instead of that pattern.
 */
export function Container({ children, size = "3xl", className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full px-6 md:px-12", MAX_WIDTHS[size], className)}>
      {children}
    </div>
  );
}

export default Container;
