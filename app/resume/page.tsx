"use client";
import { motion } from "framer-motion";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { AboutMe, Experience, Education, Skills } from "@/constants";

import { ScrollArea } from "@/components/ui/scroll-area";

const Resume = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{
      opacity: 1,
      transition: {
        delay: 1.3,
        duration: 0.4,
        ease: "easeIn",
      },
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
  >
    <section className="container mx-auto">
      <Tabs
        defaultValue="experience"
        className="flex flex-col xl:flex-row gap-[60px] "
      >
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="about">About Me</TabsTrigger>
        </TabsList>

        <section className="min-h-[70vh] w-full cursor-default">
          <TabsContent value="experience" className="w-full">
            <section className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{Experience.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {Experience.description}
              </p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {Experience.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col
                          justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent"> {item.duration}</span>

                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </ScrollArea>
            </section>
          </TabsContent>
          <TabsContent value="education" className="w-full ">
            <section className="flex flex-col gap-[30px] text-center xl:text-left ">
              <h3 className="text-4xl font-bold">{Education.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {Education.description}
              </p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {Education.items.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-[#232329] h-[300px] py-6 px-10 rounded-xl flex flex-col
                          justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent"> {item.duration}</span>

                        <h3 className="text-xl max-w-[280px] min-h-[60px]  text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </ScrollArea>
            </section>
          </TabsContent>
          <TabsContent value="skills" className="w-full ">
            <section className="flex flex-col gap-[30px]">
              <section className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{Skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {Skills.description}
                </p>

                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {Skills.skillsList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger
                              className="w-full h-[150px] bg-[#232329] rounded-xl
                                flex justify-center items-center group"
                            >
                              <section
                                className="text-6xl group-hover:text-accent transition-all
                                  duration-300"
                              >
                                {<skill.icon />}
                              </section>
                            </TooltipTrigger>

                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </section>
            </section>
          </TabsContent>
          <TabsContent
            value="about"
            className="w-full text-center xl:text-left"
          >
            <section className="flex flex-col gap-[30px]">
              <h3 className="text-4xl font-bold ">{AboutMe.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {AboutMe.description}
              </p>

              <ul
                className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px]
                mx-auto xl:mx-0"
              >
                {AboutMe.info.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60 ">{item.fieldName}</span>
                      <span className="text-base">{item.fieldValue}</span>
                    </li>
                  );
                })}
              </ul>
            </section>
          </TabsContent>
        </section>
      </Tabs>
    </section>
  </motion.div>
);

export default Resume;
