"use client";

import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="">
      <Switch
        checked={theme === "light"}
        className="h-10 w-20 pl-1 data-[state=checked]:bg-primary-80"
        aria-label="Toggle Theme"
        onCheckedChange={() => setTheme(theme === "light" ? "dark" : "light")}
      />
    </div>
  );
};

export default ThemeSwitcher;

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "relative peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input rel",
      className
    )}
    {...props}
    ref={ref}
  >
    <Moon
      className={cn(
        "h-4 w-4 absolute z-[1000] top-[10px] left-[10px] stroke-gray-600 fill-white transition-opacity duration-300 ease-in-out data-[state=checked]:opacity-100 data-[state=unchecked]:opacity-0"
      )}
    />
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-7 w-7 rounded-full bg-background shadow-lg ring-0 transition-transform duration-300 ease-in-out data-[state=checked]:translate-x-8 data-[state=unchecked]:translate-x-0"
      )}
    />

    <Sun
      className={cn(
        "h-4 w-4 absolute z-[1000] top-[10px] right-[19px] stroke-gray-600 fill-white transition-opacity duration-300 ease-in-out data-[state=checked]:opacity-0 data-[state=unchecked]:opacity-100"
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;
