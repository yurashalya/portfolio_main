"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";

import { Links } from "@/constants";

const MobileNavigation = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={handleOpenChange}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[35px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              <span className="text-accent">{`{`}</span>
              Yurii
              <span className="text-accent">{`}`}</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8 ">
          {Links.map((link, index) => {
            return (
              <Link
                onClick={handleClose}
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname
                    ? "text-accent border-b-2 border-accent"
                    : ""
                } text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
