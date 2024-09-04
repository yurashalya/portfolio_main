"use client";

import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import CustomSelect from "@/components/Select";

import { useToast } from "@/hooks/use-toast";
import MyContacts from "./contacts";
import { InitialContactValues, MyServices } from "@/constants";

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState(InitialContactValues);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const checkFormValidity = () => {
    const { firstName, lastName, email, phone, message, service } = formData;
    setIsFormValid(
      firstName.trim() !== "" &&
        lastName.trim() !== "" &&
        email.trim() !== "" &&
        message.trim() !== "" &&
        service.trim() !== ""
    );
  };

  useEffect(() => {
    checkFormValidity();
  }, [formData, checkFormValidity]);

  const handleChange = ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFormData((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (isFormValid) {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          toast({
            title: "Success",
            description: "Message sent successfully!",
            type: "success",
          });
          setFormData(InitialContactValues);
        } else {
          toast({
            title: "Error",
            description: "Failed to send message.",
            type: "error",
          });
        }
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred while sending the message.",
        type: "error",
      });
    }
  };

  const onSelectChange = (value: string) =>
    setFormData({ ...formData, service: value });

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1.2,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="py-6"
    >
      <section className="container mx-auto">
        <section className="flex flex-col xl:flex-row gap-[30px]">
          <section className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Contact with me</h3>

              <p className="text-white/60">
                This form is for communicating with me. If you have a project or
                a job position that I am suitable for, you can send it here, of
                course, you can't at the moment because the form is a bunch of
                front-end code and I'm currently working on the method
                <br />
                Currently, you can communicate via email and Skype.
              </p>

              <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="firstname"
                  placeholder="First name"
                  name="firstName"
                  maxLength={15}
                  value={formData.firstName}
                  onChange={handleChange}
                  isRequired
                />
                <Input
                  type="lastname"
                  name="lastName"
                  maxLength={20}
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  isRequired
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  isRequired
                />
                <Input
                  type="phone"
                  name="phone"
                  maxLength={15}
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </section>

              <CustomSelect
                value={formData.service}
                onValueChange={onSelectChange}
                data={MyServices}
                placeholderTitle="Select a service"
                isRequired
              />

              <Textarea
                className="h-[200px]"
                placeholder="Type your message here"
                name="message"
                onChange={handleChange}
                value={formData.message}
                maxLength={300}
                isRequired
              />

              <Button
                disabled={!isFormValid}
                size="md"
                className="max-w-40 xsm:mx-auto"
                type="submit"
              >
                Send message
              </Button>
            </form>
          </section>

          <MyContacts />
        </section>
      </section>
    </motion.section>
  );
};

export default Contact;
