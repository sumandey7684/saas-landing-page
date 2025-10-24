"use client";
import productImage from "@/assets/product-image.png";
import Image from "../../node_modules/next/image";
import pyramid from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [300, -300]);
  return (
    <section
      id="features"
      ref={sectionRef}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-wrapper ">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>

          <h2 className="section-title mt-5">
            A more effective way to track your progress
          </h2>
          <p className="section-description mt-5">
            Effortlessly turn your ideas into a fully functional, responsive,
            SaaS website in just minutes with this template..
          </p>
        </div>
        <div className="relative">
          <Image
            src={productImage}
            alt="Product Image"
            draggable="false"
            className="mt-10"
          ></Image>
          <motion.img
            src={pyramid.src}
            alt="Pyramid Image"
            height={262}
            width={262}
            className=" hidden md:block absolute -right-36 -top-32"
            style={{
              translateY: translateY,
            }}
          ></motion.img>
          <motion.img
            src={tubeImage.src}
            alt="TubeImage"
            height={248}
            width={248}
            className=" hidden md:block absolute bottom-24 -left-36"
            style={{
              translateY: translateY,
            }}
          ></motion.img>
        </div>
      </div>
    </section>
  );
};
