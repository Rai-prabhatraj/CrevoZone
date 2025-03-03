"use client";

// Importing necessary assets and components
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { testimonials } from "@/components/constants";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => (
  <div className={props.className}>
    <motion.div
      animate={{ translateY: "-50%" }}
      transition={{
        duration: props.duration || 10,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
      className="flex flex-col gap-6 pb-6"
    >
      {[...new Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={index}>
          {/* Mapping through testimonials to display each one */}
          {props.testimonials.map(({ text, imageSrc, name, username }) => (
            <div className="card" key={name}>
              {/* Testimonial text */}
              <div>{text}</div>
              <div className="mt-5 flex items-center gap-2">
                {/* User image and details */}
                <Image
                  src={imageSrc}
                  alt={name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="flex flex-col">
                  <div className="font-medium leading-5 tracking-tight">
                    {name}
                  </div>
                  <div className="leading-5 tracking-tight">{username}</div>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);
