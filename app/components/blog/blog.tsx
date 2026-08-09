"use client";

import { ReceiptSearch } from "iconsax-reactjs";
import Image from "next/image";

type Props = {
  title: string;
  imageSrc: string;
  id: number;
  description: string;
  author: string;
  read: string;
  date: string;
};

const BlogCard = ({
  title,
  imageSrc,
  description,
  author,
  read,
  date,
}: Props) => {
  return (
    <section className=" flex gap-4 w-full flex-col items-center bg-[#02050A]">
      <figure className=" w-full relative  aspect-video ">
        <Image
          fill
          className="object-cover w-full h-full"
          src={imageSrc}
          alt={title}
        />
      </figure>
      <div className="w-full text-right  text-shadow-brand-text-small text-sm font-light">
        <p className="text-white text-xs">
          <span>نویسنده</span> {author} / <span>{read}</span>
        </p>
      </div>

      <div className="text-right flex justify-end font-bold text-lg   w-full ">
        <p className="w-62.5">{title}</p>
      </div>
      {/*  */}
      <div className="text-sm font-normal leading-6 text-right">
        <p>{description}</p>
      </div>
      {/*  */}
      <div
        className=" w-full text-xs font-light flex justify-between items-center"
        style={{ direction: "rtl" }}
      >
        <p>
          <span className="mx-2">نقد و بررسی</span>
          {date}
        </p>

        <span>
          <ReceiptSearch size="32" color="#FF8A65" />
        </span>
      </div>
    </section>
  );
};

export default BlogCard;
