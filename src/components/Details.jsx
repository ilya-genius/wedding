import { motion } from "framer-motion";
import { Gift, Flower2, Phone, Wine } from "lucide-react";


const details = [
  {
    icon: Gift,
    title: "Подарки",
    text:
      "Самым главным подарком для нас будет ваше присутствие в этот особенный день. Если вы захотите сделать нам подарок — мы будем благодарны за вклад в наше семейное будущее."
  },
  {
    icon: Flower2,
    title: "Цветы",
    text:
      "Мы будем очень рады вашему вниманию, но просим по возможности отказаться от цветов. К сожалению, они недолго смогут радовать нас после праздника. Если вы всё же захотите подарить цветы — мы будем благодарны."
  },
  {
    icon: Wine,
    title: "Пожелания",
    text:
      "Если вы захотите сделать приятный сюрприз — вместо цветов будем рады хорошему настроению и вашим любимым напиткам для праздничного вечера."
  }
];


function Details() {

  return (

    <section
      className="
        bg-[#faf7f2]
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
            Важная информация
          </p>


          <h2
            className="
              wedding-title
              text-5xl
              md:text-7xl
              mt-5
            "
          >
            Детали дня
          </h2>


        </motion.div>




        <div
          className="
            grid
            md:grid-cols-3
            gap-6
          "
        >

          {
            details.map(
              (item,index)=>{

                const Icon = item.icon;


                return (

                  <motion.div

                    key={index}

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
                      duration:0.7,
                      delay:index*0.15
                    }}

                    className="
                      bg-white
                      rounded-3xl
                      p-8
                      shadow-sm
                    "

                  >

                    <Icon
                      size={35}
                      strokeWidth={1.5}
                    />


                    <h3
                      className="
                        wedding-title
                        text-3xl
                        mt-6
                      "
                    >
                      {item.title}
                    </h3>


                    <p
                      className="
                        mt-4
                        text-gray-600
                        leading-relaxed
                      "
                    >
                      {item.text}
                    </p>


                  </motion.div>

                )

              }
            )
          }


        </div>





        {/* Организатор */}

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
            duration:0.8
          }}

          className="
            mt-12
            bg-black
            text-white
            rounded-3xl
            p-8
            md:p-12
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-8
          "

        >

          <div>

            <p
              className="
                uppercase
                tracking-[0.3em]
                text-sm
                text-gray-400
              "
            >
              По всем вопросам
            </p>


            <h3
              className="
                wedding-title
                text-4xl
                mt-4
              "
            >
              Свадебный организатор
            </h3>


            <p
              className="
                mt-4
                text-gray-300
              "
            >
              Виктория
              <br/>
              +375 29 190 09 20
            </p>


          </div>




          <a

            href="tel:+375291900920"

            className="
              flex
              items-center
              gap-3
              bg-white
              text-black
              px-8
              py-4
              rounded-full
              transition
              hover:scale-105
            "

          >

            <Phone size={20}/>

            Связаться

          </a>


        </motion.div>



      </div>


    </section>

  );

}


export default Details;