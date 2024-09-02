"use client";

import { motion } from "framer-motion";
import { ServicesData } from "@/constants";

type ServicesDataProps = {
  title: string;
  description: string;
};

const Services = () => (
  <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.4, ease: "easeIn" },
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
      >
        {ServicesData.map((service: ServicesDataProps, index: number) => {
          return (
            <div
              key={index}
              className="flex flex-1 flex-col justify-center gap-6 group cursor-default"
            >
              <div className="w-full flex justify-between items-center">
                <h2
                  className="text-[42px] font-bold leading-none text-white
              group-hover:text-accent  transition-all duration-500"
                >
                  {service.title}
                </h2>
              </div>

              <p className="text-white/60 group-hover:text-outline-hover">
                {service.description}
              </p>

              <div className="border-b border-white/20 w-full"></div>
            </div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

export default Services;
