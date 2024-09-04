import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  isRequired?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, isRequired = false, ...props }, ref) => {
    return (
      <section className="relative">
        {isRequired && (
          <span className="absolute top-0 left-1 text-red-500 text-xs">*</span>
        )}
        <textarea
          className={cn(
            "flex min-h-[80px] w-full rounded-md border border-white/10 bg-primary px-4 py-5 text-base placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
      </section>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
