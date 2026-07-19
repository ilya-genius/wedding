import { motion } from "framer-motion";
import { Gift, Flower2, Shirt } from "lucide-react";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";


const details = [
  {
    icon: Gift,
    title: "Подарки",
    text:
      "Самым главным подарком для нас будет ваше присутствие в этот особенный день. Если вы захотите сделать нам подарок — мы будем благодарны за вклад в наше семейное будущее."
  },
  {
    icon: Flower2,
    title: "Цветы и пожелания",
    text:
      "Мы понимаем, что дарить цветы на свадьбу — это добрая традиция, но, к сожалению, они не смогут долго радовать нас после праздника. Будем рады любой другой альтернативе — например, любимому напитку для нашего праздничного вечера или другому знаку внимания на ваше усмотрение."
  },
  {
    icon: Shirt,
    title: "Дресс-код",
    text:
      "Будем рады видеть вас в элегантных праздничных образах. Главное — чтобы вам было комфортно и настроение соответствовало этому особому дню."
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
            items-start
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
              Виктория
            </h3>


            <p
              className="
                mt-2
                text-gray-300
              "
            >
              Свадебный организатор
            </p>


            <p
              className="
                mt-4
                text-gray-300
              "
            >
              +375 29 190 09 20
            </p>


          </div>




          <div
            className="
              flex
              gap-4
            "
          >

            <a
              href="https://t.me/weddingvictory"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                justify-center
                w-14
                h-14
                rounded-full
                bg-white
                text-black
                transition
                hover:scale-105
              "
            >
              <FaTelegramPlane size={22}/>
            </a>


            <a
              href="https://www.instagram.com/victoriya_velimovich?igsh=azVjZmIydml3bGVu"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                justify-center
                w-14
                h-14
                rounded-full
                bg-white
                text-black
                transition
                hover:scale-105
              "
            >
              <FaInstagram size={22}/>
            </a>

          </div>


        </motion.div>



      </div>


    </section>

  );

}


export default Details;