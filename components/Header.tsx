import Link from "next/link";
import { Button } from "./ui/button";

import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Yura <span className="text-accent">.</span>
          </h1>
        </Link>
        <div className="hidden xl:flex items-center gap-8">
          <Navigation />
          <Link href="/contact">
            <Button>Contact me</Button>
          </Link>
        </div>
        <div className="xl:hidden ">
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
