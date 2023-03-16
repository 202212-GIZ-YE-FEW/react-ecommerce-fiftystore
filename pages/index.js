import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from "next/link"
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { getAllProducts, getAllCategories } from '../utils/API';

// Import Components
import { Button } from "../src/components/Button"
import { Product } from "../src/components/Product"

const inter = Inter({ subsets: ['latin'] })

export default function Home({ products, categories }) {
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
        {/* <Swiper  className="grid grid-cols-4 gap-4"
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
        </Swiper> */}
      </div>
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 md:px-8 mt-10">
        <div className="">
          <h3 className="text-lg lg:text-2xl xl:leading-10 font-bold mb-4">
            Shop By Category
          </h3>
          <div className="flex flex-col justify-center items-center space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 md:gap-x-8 w-full">
              <div className="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
                <div className="relative group flex justify-center items-center h-full w-full">
                  <img className="object-center object-cover h-full w-full" src={`${categories[3]}.webp`} alt="girl-image" />
                  <Button href={`/products/category/${categories[3]}`} content={`${categories[3]}`} additional_style={'z-10 absolute'} />
                </div>
                <div className="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
                  <div className="relative group flex justify-center items-center h-full w-full">
                    <img className="object-center object-cover h-full w-full" src={`${categories[0]}.webp`} alt="shoe-image" />
                    <Button href={`/products/category/${categories[0]}`} content={`${categories[0]}`} additional_style={'z-10 absolute'} />
                  </div>
                  <div className="relative group flex justify-center items-center h-full w-full">
                    <img className="object-center object-cover h-full w-full" src={`${categories[1]}.webp`} alt="watch-image" />
                    <Button href={`/products/category/${categories[1]}`} content={`${categories[1]}`} additional_style={'z-10 absolute'} />
                  </div>
                </div>
                <div className="relative group justify-center items-center h-full w-full hidden lg:flex">
                  <img className="object-center object-cover h-full w-full" src={`${categories[2]}.webp`} alt="girl-image" />
                  <Button href={`/products/category/${categories[2]}`} content={`${categories[2]}`} additional_style={'z-10 absolute'} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-0.5 my-10">
          <div className="relative px-10 py-8" style={{
            backgroundRepeat: "no-repeat", backgroundImage: "url(https://preview.colorlib.com/theme/divisima/img/banner-bg.jpg.webp)", backgroundSize: "cover",
            backgroundPosition: "top center"
          }}>
            <div className="absolute right-20 bottom-30 font-bold bg-stone-400 uppercase py-2 px-5 rounded-full">New</div>
            <span className="uppercase mb-4 text-lg block tracking-wider font-semibold">New Arrivals</span>
            <h2 className="uppercase font-bold mb-5 text-stone-700 text-3xl xl:text-6xl">WOMENS CLOTHES</h2>
            <Button href={''} content={'shop now'} />
          </div>
        </div>
        <div className="pb-0.5 my-3 mx-auto max-w-7xl sm:px-6 lg:px-8">         
            <h3 className="text-lg lg:text-2xl xl:leading-10 font-bold mb-4">
                Most Recent Products
            </h3>
          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product => <Product 
                        key={product.id} 
                        id={product.id}
                        title={product.title} 
                        description={product.description} 
                        image={product.image}
                        price={product.price}
                        rate={product.rating.rate} />))}
          </div>
          <Button content={'view more'} additional_style={'block mt-5 mx-auto'} />
        </div>
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  const products = await getAllProducts('products?limit=6');
  const categories = await getAllCategories();
  return {
    props: {
      products,
      categories,
    },
  };
};
