"use client";
import React from "react";
import CountUp from "react-countup";

import { StatsResult } from "@/constants";

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <section className="container mx-auto">
        <section className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none xsm:flex-col xsm:items-center">
          {StatsResult.map((item, index) => {
            return (
              <section
                className="flex-1 flex gap-4 items-center xsm:w-[100%] xsm:justify-between justify-center xl:justify-start"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={1}
                  className="text-4xl xl:text-6xl font-extrabold xsm:w-[100px] xsm:text-left"
                />
                <p className="max-w-[100px] leading-snug text-white/80 xsm:text-end ">
                  {item.text}
                </p>
              </section>
            );
          })}
        </section>
      </section>
    </section>
  );
};

export default Stats;
