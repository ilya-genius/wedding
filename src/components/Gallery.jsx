import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  EffectCoverflow,
  Pagination,
  Autoplay
} from "swiper/modules";


import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";



const photos = [
  `${import.meta.env.BASE_URL}images/photo1.webp`,
  `${import.meta.env.BASE_URL}images/photo2.webp`,
  `${import.meta.env.BASE_URL}images/photo3.webp`,
  `${import.meta.env.BASE_URL}images/photo4.webp`,
  `${import.meta.env.BASE_URL}images/photo5.webp`,
];



function Gallery() {

  return (

    <section
      className="
        bg-white
        py-24
        px-6
        overflow-hidden
      "
    >


      <motion.div

        initial={{
          opacity:0,
          y:40
        }}

        whileInView={{
          opacity:1,
          y:0
        }}

        viewport={{
          once:true
        }}

        transition={{
          duration:1
        }}

        className="
          text-center
          mb-16
        "

      >

        <p
          className="
            uppercase
            tracking-[0.3em]
            text-sm
            text-gray-400
          "
        >
          Наша история
        </p>


        <h2
          className="
            wedding-title
            text-5xl
            md:text-7xl
            mt-5
          "
        >
          Наши моменты
        </h2>


      </motion.div>



      <Swiper

        modules={[
          EffectCoverflow,
          Pagination,
          Autoplay
        ]}

        effect="coverflow"

        grabCursor={true}

        centeredSlides={true}

        slidesPerView="auto"

        loop={true}

        autoplay={{
          delay:3000,
          disableOnInteraction:false
        }}

        pagination={{
          clickable:true
        }}

        coverflowEffect={{
          rotate:0,
          stretch:0,
          depth:200,
          modifier:2,
          slideShadows:false
        }}

        className="
          max-w-5xl
        "

      >

        {
          photos.map(
            (photo,index)=>(

              <SwiperSlide
                key={index}
                className="
                  !w-[280px]
                  md:!w-[420px]
                "
              >

                <img
                  src={photo}
                  alt="Наш момент"
                  className="
                    h-[420px]
                    md:h-[560px]
                    w-full
                    object-cover
                    rounded-3xl
                    shadow-xl
                  "
                />

              </SwiperSlide>

            )
          )
        }


      </Swiper>


    </section>

  );
}


export default Gallery;