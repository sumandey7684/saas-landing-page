"use client";

import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import cellestialLogo from "@/assets/logo-echo.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: "20",
              repeat: Infinity,
              ease: "linear",
              repeatLeap: "loop",
            }}
          >
            <Image
              className="logo-ticker-image"
              src={acmeLogo}
              alt="Acme Logo"
            ></Image>
            <Image
              className="logo-ticker-image"
              src={quantumLogo}
              alt="QuantumLogo"
            ></Image>
            <Image
              className="logo-ticker-image"
              src={cellestialLogo}
              alt="CellestialLogo"
            ></Image>
            <Image
              className="logo-ticker-image"
              src={pulseLogo}
              alt="PulseLogo"
            ></Image>
            <Image
              className="logo-ticker-image"
              src={apexLogo}
              alt="ApexLogo"
            ></Image>
            {/* More Images for Complete Animation*/}
            <Image
              className="logo-ticker-image"
              src={acmeLogo}
              alt="Acme Logo"
            ></Image>
            <Image
              className="logo-ticker-image"
              src={quantumLogo}
              alt="QuantumLogo"
            ></Image>
            <Image
              className="logo-ticker-image"
              src={cellestialLogo}
              alt="CellestialLogo"
            ></Image>
            <Image
              className="logo-ticker-image"
              src={pulseLogo}
              alt="PulseLogo"
            ></Image>
            <Image
              className="logo-ticker-image"
              src={apexLogo}
              alt="ApexLogo"
            ></Image>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
