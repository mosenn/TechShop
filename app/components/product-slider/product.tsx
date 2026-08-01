"use client";

import Image from "next/image";

type Props = {
  title: string;
  imageSrc: string;
  id: number;
  price: string;
};

const ProductCard = ({ title, imageSrc, price }: Props) => {
  return (
    <section className="m-4 flex h-fit w-62.5 flex-col items-center gap-4 rounded-2xl bg-[#02050A] p-4">
      <figure>
        <Image width={210} height={270} src={imageSrc} alt={title} />
      </figure>

      <h1
        className="w-52.5 text-right font-normal leading-6 text-[#FEFEFE]"
        style={{ direction: "rtl" }}
      >
        گوشی موبایل اپل مدل iPhone 17 Pro Max ZA/A با ظرفیت 512 گیگابایت و رم 12
        گیگابایت (Not Active)
      </h1>

      <p style={{ direction: "rtl" }} className="w-[90%] text-left">
        {price} <span className="text-[12px]">تومان</span>
      </p>
    </section>
  );
};

export default ProductCard;
