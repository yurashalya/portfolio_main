import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

import SocialLinks from "@/components/SocialLinks";

import Photo from "@/components/Photo";
import Stats from "@/components/Stars";

const Home = () => (
  <section className="h-full my-6">
    <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        {/*text */}
        <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-xl">Frontend Software Engineer</span>
          <h1 className="h1 mb-6 mt-3">
            Hello, <br />
            <span className="text-accent">I'm Yura Shalia</span>
          </h1>
          <p className="max-w-[500px] mb-9 text-white/80">
            Tech savvy front-end developer with more than 6 years of experience
            in software development, including React, React Native, Next.JS and
            other libraries. Extensive knowledge in UI/UX, testing, optimization
            solutions and debugging processes, developed technical and
            architectural solutions.
            <br /> A team player who easily connects with any stakeholder, they
            are distinguished by their strong analytical capabilities and
            thriving collaborative teamwork skills.
          </p>
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <a href="/resume.pdf" download>
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
            </a>
            <div className="mb-8 xl:mb-0 align-center">
              <SocialLinks
                containerStyles="flex gap-6 justify-center"
                iconStyles="w-9 h-9 
                  border 
                  border-accent 
                  rounded-full 
                  flex 
                  justify-center 
                  items-center 
                  text-accent 
                  text-base 
                  hover:bg-accent 
                  hover:text-primary 
                  hover:transition-all 
                  duration-500"
              />
            </div>
          </div>
        </div>
        <div className="order-1 xl:order:none py-5 mb-8 xl:mb-0">
          <Photo />
        </div>
      </div>
    </div>
    <Stats />
  </section>
);

export default Home;
