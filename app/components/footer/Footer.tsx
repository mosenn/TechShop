import { DirectRight, Instagram, Send2, Youtube } from "iconsax-reactjs";
import Image from "next/image";
import Link from "next/link";


const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      icon: <Instagram size="32" variant="Linear" color="#FF8A65" />,
      href: "#",
      label: "اینستاگرام",
    },
    {
      id: 2,
      icon: <Send2 size="32" variant="Linear" color="#FF8A65" />,
      href: "#",
      label: "تلگرام",
    },
    {
      id: 3,
      icon: <Youtube size="32" variant="Linear" color="#FF8A65" />,
      href: "#",
      label: "یوتیوب",
    },
  ];

  return (
    <footer className="grid gap-6 border border-brand-border rounded-lg bg-linear-to-b from-brand-bg via-brand-bg-section/60 to-brand-bg-section/60">
      {/* h-[35vh] */}
      {/* img */}
      <div className=" flex justify-center my-2">
        <figure className="relative  w-full h-[183px] tab:h-[222px] tab:w-[703px] des:w-full des:h-[259px] xl:w-[861px] xl:h-[395px] ">
          <Image
            className="top-0 right-0 object-cover"
            alt="footerimg"
            src="/imgs/footer/footer.png"
            fill
          ></Image>
        </figure>
      </div>

      <section className="p-4 grid gap-6">
        <div className=" tab:grid tab:grid-cols-2">
          {/* texts */}
          <article className="text-right col-start-2">
            <h1 className="my-2 text-xl font-normal text-[#F2F2F2]">تچ شاپ</h1>
            <p className="leading-6 text-sm text-[#B3B3B3]">
              از سال 1399 تا به امروز خوشحالیم که در خدمت شما هستیم هدف تچ شاپ
              رضایت شما و عرضه تمامی کالاهای دیجیتال اصل با صمانت هست که تا به
              امروز به وظیفه خودمون عمل کردیم .
            </p>
          </article>
          {/* نماد ها */}
          <ul className="flex  justify-center items-center gap-2 p-2 row-start-1">
            <li>
              <Image
                className="top-0 right-0 object-cover  rounded-b-full"
                alt="footerimg"
                width={60}
                height={60}
                src="/imgs/footer/enemad.png"
              ></Image>
            </li>
            <li>
              <Image
                className="top-0 right-0 object-cover  rounded-b-full"
                alt="footerimg"
                width={60}
                height={60}
                src="/imgs/footer/reza.png"
              ></Image>
            </li>
            <li>
              <Image
                className="top-0 right-0 object-cover  rounded-b-full"
                alt="footerimg"
                width={60}
                height={60}
                src="/imgs/footer/work.png"
              ></Image>
            </li>
          </ul>
        </div>
        {/* boxs */}
        <section className="grid grid-cols-2 gap-2 tab:grid-cols-4">
          <ul className=" flex flex-col items-end  gap-2  text-brand-text-soft font-normal text-xs text-right border border-[#FF8A65]/35 p-4 rounded-xl">
            <li>
              <Link
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                پرچمداران سال
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                برند ها
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                گوشی‌های میان‌رده
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                لوازم جانبی
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                ساعت هوشمند
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                گجت‌های خانه هوشمند
              </Link>
            </li>
          </ul>
          {/* 2 */}
          <ul className=" flex flex-col items-end  gap-2  text-brand-text-soft font-normal text-xs text-right border border-[#FF8A65]/35 p-4 rounded-xl">
            <li>
              <Link
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                محصولات جدید
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                برند ها
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                هدفون هندز فری{" "}
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                تبلت و ایپد
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                ساعت هوشمند
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                پیش فروش محصولات
              </Link>
            </li>
          </ul>
          {/* 3 */}
          <ul className=" flex flex-col items-end  gap-2  text-brand-text-soft font-normal text-xs text-right border border-[#FF8A65]/35 p-4 rounded-xl">
            <li>
              <Link
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                پیگیری سفارش
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                شرایط گارانتی
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                گوشی‌های میان‌رده
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                خدمات پس از فروش{" "}
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                سوالات متداول
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                رویه‌های بازگرداندن کالا{" "}
              </Link>
            </li>
          </ul>
          {/* 4 */}

          <ul className=" flex flex-col items-end  gap-2  text-brand-text-soft font-normal text-xs text-right border border-[#FF8A65]/35 p-4 rounded-xl">
            <li>
              <Link
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                داستان فروشگاه
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                همکاری با ما
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                فروش سازمانی
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                مجله تکنولوژی
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                تماس با ما
              </Link>
            </li>
          </ul>
        </section>

        {/*  */}
      </section>
      <div className=" rounded-lg grid  justify-items-center gap-4 py-4 border border-[#252525] bg-[#141416]/25 backdrop-blur-md">
        <span className="text-white/80 text-sm font-medium">
          شبکه های اجتماعی ما را دنبال کنید
        </span>

        <div className=" items-center gap-3  p-4 flex justify-center">
          {socialLinks.map((social) => (
            <Link
              key={social.id}
              href={social.href}
              className="group flex items-center justify-center rounded-full border border-[#252525] bg-[#141416]/25 transition-all duration-300 hover:border-[#FF8A65]/50 hover:bg-[#FF8A65]/10"
            >
              <div className="border flex justify-center items-center border-[#252525] bg-[141416]/25 rounded-2xl w-[90px] h-[50px] backdrop-brightness-50">
                {social.icon}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
