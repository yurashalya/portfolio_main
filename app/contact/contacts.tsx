"use client";

import { Contacts } from "@/constants";

const MyContacts = () => (
  <section className="flex-1 flex items-center xl:justify-end order-1 mb-8 xl:mb-0 xl:order-none">
    <ul className="flex flex-col gap-10">
      {Contacts.map((item, index) => {
        return (
          <li key={index} className="flex items-center gap-6">
            <div
              className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c]
          text-accent rounded-md flex items-center justify-center"
            >
              <div className="text-4xl"> {<item.icon />} </div>
            </div>
            <div className="flex-1">
              <p className="text-white/60">{item.title}</p>
              <h3 className="text-xl">{item.description}</h3>
            </div>
          </li>
        );
      })}
    </ul>
  </section>
);

export default MyContacts;
