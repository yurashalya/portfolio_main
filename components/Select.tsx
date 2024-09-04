"use client";
import React from "react";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectValue,
  SelectLabel,
} from "@/components/ui/select";

type CustomSelectProps = {
  value: string;
  isRequired?: boolean;
  data: { [key: string]: string }[];
  placeholderTitle: string;
  onValueChange: (value: string) => void;
};

const CustomSelect = ({
  value,
  data,
  onValueChange,
  placeholderTitle,
  isRequired = false,
}: CustomSelectProps) => {
  return (
    <section className="relative">
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="w-full ">
          {isRequired && (
            <span className="absolute top-0 left-1 text-red-500 text-xs">
              *
            </span>
          )}
          <SelectValue placeholder="Select a service" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{placeholderTitle}</SelectLabel>
            {data.map((items, key) => (
              <SelectItem value={items.value} key={key}>
                {items.title}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </section>
  );
};

export default CustomSelect;
