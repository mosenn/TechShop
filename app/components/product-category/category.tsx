"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Transmit } from "iconsax-reactjs";

type Props = {
  title: string;
  imageSrc: string;
  videoSrc: string;
  id: number;
};

const CategoryCard = ({ title, imageSrc, videoSrc }: Props) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    videoRef.current?.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group border border-brand-primary-soft/40  relative aspect-square  overflow-hidden rounded-2xl bg-[#090D14] cursor-pointer"
    >
      <section className="absolute inset-0 z-0  ">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className={`object-contain p-4 transition-all duration-700 ease-in-out ${
            isHovered ? "opacity-0" : "opacity-80 group-hover:scale-105"
          }`}
        />

        <video
          ref={videoRef}
          src={videoSrc}
          loop
          muted
          playsInline
          className={`h-full w-full object-cover transition-all duration-700 ease-in-out ${
            isHovered ? "scale-105 opacity-100" : "opacity-0"
          }`}
        />
      </section>

      <section className="absolute bottom-3 right-3 z-20">
        {isHovered && (
          <>
            <span className="absolute inset-0 rounded-full bg-[#FF8A65]/30 animate-SoftPulse" />
            <span className="absolute inset-0 rounded-full bg-[#FF8A65]/20 animate-SoftPulse [animation-delay:0.5s]" />
          </>
        )}

        <div
          className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full transition-all duration-700 ease-out md:h-11 md:w-11 ${
            isHovered
              ? "rotate-45 bg-[#FF8A65]/10 shadow-[0_0_25px_rgba(255,138,101,0.4)]"
              : "bg-transparent"
          }`}
        >
          <Transmit size="22" color="#FF8A65" variant="Outline" />
        </div>
      </section>
    </div>
  );
};

export default CategoryCard;
