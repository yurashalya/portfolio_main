"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { Typewriter } from "react-simple-typewriter";

import SocialLinks from "@/components/SocialLinks";

import Photo from "@/components/Photo";
import Stats from "@/components/Stars";

const Home = () => {
  return (
    <section className="h-full my-6">
      <section className="container mx-auto h-full">
        <section className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <section className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="h1 mb-6 mt-3">
              Hello, <br /> I'm
              <span className="text-accent"> Yurii Shalia</span>
            </h1>

            <p className="max-w-[500px] mb-9 text-white/80">
              <Typewriter
                words={[
                  ` A skilled Frontend Software Engineer developer with 6+ years of
                    experience in React, Next.JS, React Native, having strong problem
                    solving and teamwork skills.`,
                ]}
                typeSpeed={20}
                cursorStyle="_"
                cursor
              />
            </p>
            <section className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/assets/Yurii_Shalia_CV.pdf" download>
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <section className="mb-8 xl:mb-0 align-center">
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
              </section>
            </section>
          </section>
          <section className="order-1 xl:order:none py-5 mb-8 xl:mb-0">
            <Photo />
          </section>
        </section>
      </section>
      <Stats />
    </section>
  );
};

export default Home;
