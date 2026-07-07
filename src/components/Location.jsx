import { motion } from "framer-motion";
import { MapPin } from "lucide-react";


function Location() {

  return (

    <section
      className="
        bg-white
        py-24
        px-6
      "
    >

      <div
        className="
          max-w-6xl
          mx-auto
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
            Локация
          </p>


          <h2
            className="
              wedding-title
              text-5xl
              md:text-7xl
              mt-5
            "
          >
            Место встречи
          </h2>


        </motion.div>



        <motion.div

          initial={{
            opacity:0,
            scale:0.95
          }}

          whileInView={{
            opacity:1,
            scale:1
          }}

          viewport={{
            once:true
          }}

          transition={{
            duration:1
          }}

          className="
            grid
            md:grid-cols-2
            gap-10
            items-center
          "

        >


          {/* Фото места */}

          <div
            className="
              overflow-hidden
              rounded-3xl
              shadow-xl
            "
          >

            <img

              src="/images/location.webp"

              alt="Место проведения"

              className="
                w-full
                h-[420px]
                object-cover
                hover:scale-105
                transition
                duration-700
              "

            />

          </div>



          {/* Информация */}

          <div>


            <h3
              className="
                wedding-title
                text-5xl
                text-gray-900
              "
            >
              Усадьба Эден
            </h3>



            <p
              className="
                mt-6
                text-gray-600
                leading-relaxed
              "
            >

              Здесь пройдет один из самых важных дней
              нашей жизни. Мы будем рады разделить
              эту атмосферу вместе с вами.

            </p>



            <div
              className="
                flex
                gap-3
                items-start
                mt-8
              "
            >

              <MapPin
                className="
                  mt-1
                  shrink-0
                "
              />


              <p
                className="
                  text-gray-700
                "
              >
                агрогородок Сеница,
                <br/>
                Набережная ул., 1
              </p>


            </div>



            <a

              href="https://yandex.by/maps/-/CTqX4HO5"

              target="_blank"

              rel="noopener noreferrer"

              className="
                inline-flex
                items-center
                justify-center
                mt-10
                rounded-full
                bg-black
                text-white
                px-10
                py-4
                transition
                hover:scale-105
              "

            >

              Открыть маршрут

            </a>



          </div>


        </motion.div>


      </div>


    </section>

  );

}


export default Location;