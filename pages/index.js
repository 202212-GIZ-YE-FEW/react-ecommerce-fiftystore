import Head from 'next/head'
import Image from 'next/image'
import { CpuChipIcon } from '@heroicons/react/24/outline'
import { Inter } from 'next/font/google'

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Components
import { Button } from "../src/components/Button"
import { Product } from "../src/components/Product"
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  SwiperCore.use([Autoplay]);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Swiper  className="grid grid-cols-4 gap-4"
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={1}
          initialSlide={2}
          loopedSlides={1}
          autoplay={{
            delay: 2000,
          }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide><img src="https://preview.colorlib.com/theme/capitalshop/assets/img/hero/h1_hero2.jpg.webp" alt /></SwiperSlide>
          <SwiperSlide><img src="https://preview.colorlib.com/theme/locksmith/img/hero/hero-2.jpg.webp" alt /></SwiperSlide>
          <SwiperSlide><img src="https://preview.colorlib.com/theme/malefashion/img/hero/hero-1.jpg.webp" alt /></SwiperSlide>
          <SwiperSlide><img src="https://preview.colorlib.com/theme/eiser/img/banner/banner-bg.jpg.webp" alt /></SwiperSlide>
        </Swiper>
      </div>
      <main className="mx-auto max-w-[1920px] px-4 md:px-8 mt-10 2xl:px-16">
        <div className="">
            <h3 className="text-lg lg:text-2xl xl:leading-10 font-bold mb-4">
                Shop By Category
            </h3>
            <div className="flex flex-col justify-center items-center space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 md:gap-x-8 w-full">
                <div className="relative group flex justify-center items-center h-full w-full">
                  <img className="object-center object-cover h-full w-full" src="https://media1.popsugar-assets.com/files/thumbor/p3aGcIADLrSVbcM5uPa1He-Muv0/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2023/01/11/909/n/1922564/6345bb6b63bf20e195e452.64247813_/i/best-cheap-amazon-clothes-women.png" alt="girl-image" />
                  <Button href={''} content="women's" additional_style={'z-10 absolute'} />
                </div>
                <div className="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
                  <div className="relative group flex justify-center items-center h-full w-full">
                    <img className="object-center object-cover h-full w-full" src="https://thumbs.dreamstime.com/b/many-used-modern-electronic-gadgets-use-white-floor-reuse-recycle-concept-top-view-164230611.jpg" alt="shoe-image" />
                    <Button href={''} content="electronic" additional_style={'z-10 absolute'} />
                  </div>
                  <div className="relative group flex justify-center items-center h-full w-full">
                    <img className="object-center object-cover h-full w-full" src="https://cdn.jewelryimages.net/static/domains/contijewelers/images/store-pics/w1900_q65.jpeg" alt="watch-image" />
                    <Button href={''} content="man's" additional_style={'z-10 absolute'} />
                  </div>
                </div>
                <div className="relative group justify-center items-center h-full w-full hidden lg:flex">
                  <img className="object-center object-cover h-full w-full" src="https://images.urbndata.com/is/image/UrbanOutfitters/79871877_020_b?$medium$&qlt=80&fit=constrain" alt="girl-image" />
                 <Button href={''} content="man's" additional_style={'z-10 absolute'} />
                </div>
              </div>
            </div>
        </div>
        <div className="pb-0.5 my-10">
          <div className="relative px-10 py-8" style={{ backgroundRepeat: "no-repeat",  backgroundImage: "url(https://preview.colorlib.com/theme/divisima/img/banner-bg.jpg.webp)", backgroundSize: "cover",
    backgroundPosition: "top center" }}>
            <div className="absolute right-20 bottom-30 font-bold bg-stone-400 uppercase py-2 px-5 rounded-full">New</div>
            <span className="uppercase mb-4 text-lg block tracking-wider font-semibold">New Arrivals</span>
            <h2 className="uppercase font-bold mb-5 text-stone-700 text-6xl">STRIPED SHIRTS</h2>
            <Button href={''} content={'shop now'} />
          </div>
        </div>
        <div className="pb-0.5 my-3">         
            <h3 className="text-lg lg:text-2xl xl:leading-10 font-bold mb-4">
                Most Rating Products
            </h3>
          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
          <Button href="#" content={'view more'} additional_style={'block mt-5 mx-auto'} />
        </div>
      </main>
    </>
  )
}
