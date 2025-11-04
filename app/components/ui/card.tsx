import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex bg-black/50 backdrop-blur-sm bg-gradient-to-b from-black/30 via-black/50 to-black/30 text-white border border-accent rounded-2xl shadow-lg p-5 ml-6 mr-6 my-3",
      // subtle motion-safe hover + accessible focus styles
      "transition-shadow motion-safe:transition-transform motion-safe:hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("border-b h-auto p-6 mx-6 my-28 md:ml-28 text-shadow-lg ", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col justify-between", className)} {...props} />
));
CardContent.displayName = "CardContent";

export { Card, CardHeader, CardTitle, CardContent };
