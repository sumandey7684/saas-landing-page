"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { Fragment } from "react";
import React from "react";
const testimonials = [
  {
    text: "As a UI/UX designer from Bangalore, I found this tool incredibly intuitive and perfect for building client projects faster.",
    imageSrc: avatar1.src,
    name: "Riya Mehta",
    username: "@riya_designs",
  },
  {
    text: "Our team's workflow efficiency improved drastically after switching to this platform. Task tracking feels effortless now.",
    imageSrc: avatar2.src,
    name: "Arjun Sharma",
    username: "@arjun_dev",
  },
  {
    text: "This app completely changed how I handle college projects and client deadlines. Simple, fast, and reliable.",
    imageSrc: avatar3.src,
    name: "Neha Patel",
    username: "@neha_codes",
  },
  {
    text: "Integration was seamless. Within a day, our entire marketing team started collaborating without any training.",
    imageSrc: avatar4.src,
    name: "Rohit Verma",
    username: "@rohitvtech",
  },
  {
    text: "Managing events and campaigns is so much easier now. Everything stays organized, and I never miss deadlines.",
    imageSrc: avatar5.src,
    name: "Ananya Gupta",
    username: "@ananya_creates",
  },
  {
    text: "The customization and integration features are exceptional. It easily fits into our existing workflow tools.",
    imageSrc: avatar6.src,
    name: "Vikram Iyer",
    username: "@vikram_techie",
  },
  {
    text: "Since adopting this tool, communication and task visibility across our startup team have improved tremendously.",
    imageSrc: avatar7.src,
    name: "Priya Nair",
    username: "@priyanair_ui",
  },
  {
    text: "We can assign work, monitor updates, and share reports in one place. It's a complete productivity suite.",
    imageSrc: avatar8.src,
    name: "Karan Joshi",
    username: "@karanj_workflow",
  },
  {
    text: "The interface feels very smooth, and the features are well thought out. Perfect for Indian startups and teams.",
    imageSrc: avatar9.src,
    name: "Sneha Reddy",
    username: "@sneha_reddyx",
  },
];

const firsColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => (
  <div className={props.className}>
    <motion.div
      animate={{
        translateY: "-50%",
      }}
      transition={{
        duration: props.duration || 10,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
      className="flex flex-col gap-6 pb-6 mt-10 "
      id="customers"
    >
      {[...new Array(2)].fill(0).map((_, index) => {
        return (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, imageSrc, name, username }) => (
              <div key={username} className="card">
                <div className="">{text}</div>
                <div className="flex items-center gap-2 mt-5">
                  <Image
                    src={imageSrc}
                    width={40}
                    height={40}
                    alt={name}
                    className="h-10 w-10 rounded-full"
                  ></Image>
                  <div className="flex flex-col">
                    <div className="tracking-tight font-medium leading-5">
                      {name}
                    </div>
                    <div className="leading-5 tracking-tight">{username}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        );
      })}
    </motion.div>
  </div>
);

export const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="section-wrapper">
          <div className="flex justify-center">
            <div className="tag">Testinomials</div>
          </div>
          <h2 className="section-title mt-5">What our users say</h2>
          <p className="section-description mt-5">
            From intuitive design to powerful features, our app has become an
            essential tool for users around the world.
          </p>
        </div>
        <div className="flex justify-center gap-6  [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden ">
          <TestimonialColumn testimonials={firsColumn} />
          <TestimonialColumn
            className="hidden md:block"
            testimonials={secondColumn}
            duration={15}
          />
          <TestimonialColumn
            className="hidden lg:block"
            testimonials={thirdColumn}
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};
