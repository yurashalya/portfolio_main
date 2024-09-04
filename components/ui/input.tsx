import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  isRequired?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, isRequired = false, ...props }, ref) => {
    return (
      <section className="relative">
        {isRequired && (
          <span className="absolute top-0 left-1 text-red-500 text-xs">*</span>
        )}
        <input
          type={type}
          className={cn(
            "flex h-[48px] w-full rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 rounded text-base placeholder:text-white/60 outline-none"
          )}
          ref={ref}
          {...props}
        />
      </section>
    );
  }
);
Input.displayName = "Input";

export { Input };
