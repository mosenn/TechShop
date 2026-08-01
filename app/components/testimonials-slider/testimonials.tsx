"use client";

import Image from "next/image";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";




import styles from "./TestimonialsSlider.module.css";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  avatar: string;
  comment: string;
  icon: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "سارا محمدی",
    role: "خریدار محصول",
    avatar: "/imgs/users/1.png",
    icon: "/imgs/users/checkmark.png",
    comment:
      "گوشی از نظر سرعت و روانی عملکرد خیلی خوبه و برای کارهای روزمره کاملاً جواب می‌ده. باتری هم قابل قبوله و با استفاده معمولی تقریباً یک روز دوام میاره. در کل نسبت به قیمتی که داره ارزش خرید مناسبی داره.",
  },
  {
    icon: "",
    id: 2,
    name: "علی رضایی",
    role: "کاربر فروشگاه",
    avatar: "/imgs/users/user-5.avif",
    comment:
      "کیفیت ساخت دستگاه خوبه و ظاهرش هم حس یک محصول خوش‌ساخت رو منتقل می‌کنه. صفحه نمایش کیفیت مناسبی داره و برای دیدن محتوا و استفاده روزانه کاملاً راضی‌کننده است.",
  },
  {
    icon: "",
    id: 3,
    name: "نگار احمدی",
    role: "مشتری ثابت",
    avatar: "/imgs/users/user-6.avif",
    comment:
      "من بیشتر برای استفاده روزانه و شبکه‌های اجتماعی خریدم و واقعاً راضی بودم. لگ خاصی ندیدم و رابط کاربری هم روانه. اگر دنبال یک گزینه متعادل هستید انتخاب خوبیه.",
  },
  {
    icon: "",
    id: 4,
    name: "محمد قربانی",
    role: "خریدار محصول",
    avatar: "/imgs/users/user-4.avif",
    comment:
      "دوربین در نور مناسب عکس‌های خوبی می‌گیره و برای استفاده معمولی کاملاً جواب می‌ده. از طرفی طراحی دستگاه هم خوش‌دسته و موقع استفاده طولانی اذیت نمی‌کنه.",
  },
  {
    icon: "",
    id: 5,
    name: "الهام کریمی",
    role: "کاربر جدید",
    avatar: "/imgs/users/user-2.avif",
    comment:
      "نسبت به بازه قیمتی خودش تجربه خیلی خوبی داد. نصب برنامه‌ها سریع انجام می‌شه و مصرف باتری هم منطقیه. برای کسی که دنبال خرید اقتصادی و مطمئن باشه پیشنهادش می‌کنم.",
  },
  {
    icon: "",
    id: 6,
    name: "رضا نادری",
    role: "مشتری فروشگاه",
    avatar: "/imgs/users/user-3.avif",
    comment:
      "بعد از چند هفته استفاده هنوز از خریدم راضی‌ام. کیفیت کلی خوبه و در استفاده روزمره کم نمیاره. در مجموع تعادل خوبی بین قیمت، کیفیت و عملکرد داره.",
  },
];

const TestimonialsSlider = () => {
  return (
    <section className="w-full overflow-hidden bg-[#0B0B10]  flex justify-center">
      <div className=" flex w-full flex-col items-center justify-center mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          dir="rtl"
          loop
          centeredSlides
          slidesPerView={1}
          spaceBetween={26}
          breakpoints={{
            480: { slidesPerView: 1 },
            600: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            900: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
            1440: { slidesPerView: 3 },
          }}
          pagination={{
            clickable: true,
            el: `.${styles.testimonialPagination}`,
            bulletClass: styles.bullet,
            bulletActiveClass: styles.bulletActive,
          }}
          className={`testimonial-swiper w-full ${styles.swiper}`}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex justify-center w-full ">
                <article className="w-full p-4 rounded-[14px] bg-[linear-gradient(180deg,#17151D_0%,#211527_100%)] text-white shadow-[0_10px_30px_rgba(0,0,0,0.28)] sm:px-6">
                  <header className="mb-6 gap-4">
                    <div className="flex flex-1 items-center justify-start gap-2">
                      <figure className="relative h-[54px] w-[54px] overflow-hidden rounded-full">
                        <Image
                          src={item.avatar}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="54px"
                        />
                      </figure>

                      <section className="flex gap-1">
                        <div>
                          <p className="text-[14px] font-medium text-white">
                            {item.name}
                          </p>
                        </div>

                        {item.icon && (
                          <div className="flex items-center justify-center rounded-full">
                            <Image
                              src={item.icon}
                              alt="checkmark-icon"
                              className="object-cover"
                              sizes="22"
                              width={22}
                              height={22}
                            />
                          </div>
                        )}
                      </section>
                    </div>
                  </header>

                  <div className="flex flex-col items-center text-center">
                    <p className="text-[12px] w-[320px] w-fit h-[112px] leading-7  p-2 text-right text-white/85">
                      {item.comment}
                    </p>
                  </div>
                </article>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* نام کلاس از styles.pagination به styles.testimonialPagination تغییر یافت */}
        <div className={styles.testimonialPagination} />
      </div>
    </section>
  );
};

export default TestimonialsSlider;
