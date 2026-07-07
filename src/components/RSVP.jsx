import { motion } from "framer-motion";
import { Heart } from "lucide-react";


function RSVP() {

  return (

    <>

      {/* RSVP */}

      <section
        className="
          bg-white
          py-24
          px-6
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
            max-w-3xl
            mx-auto
            text-center
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
            Подтверждение участия
          </p>


          <h2
            className="
              wedding-title
              text-5xl
              md:text-7xl
              mt-6
            "
          >
            Будете с нами?
          </h2>


          <p
            className="
              mt-8
              text-gray-600
              text-lg
              leading-relaxed
            "
          >
            Пожалуйста, подтвердите ваше присутствие,
            чтобы мы могли подготовить праздник
            максимально комфортным для каждого гостя.
          </p>



          <a

            href="#"
            className="
              inline-flex
              items-center
              justify-center
              mt-10
              rounded-full
              bg-black
              text-white
              px-12
              py-5
              transition
              hover:scale-105
            "

          >

            Подтвердить участие

          </a>


        </motion.div>


      </section>




      {/* Финальный экран */}


      <section

        className="
          relative
          min-h-screen
          flex
          items-center
          justify-center
          overflow-hidden
          text-white
        "

      >


        <div

          className="
            absolute
            inset-0
            bg-cover
            bg-center
            bg-[url('/images/final.webp')]
          "

        />


        <div

          className="
            absolute
            inset-0
            bg-black/50
          "

        />



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
            duration:1.2
          }}

          className="
            relative
            z-10
            text-center
            px-6
          "

        >

          <Heart
            className="
              mx-auto
              mb-8
            "
            size={40}
            strokeWidth={1}
          />


          <h2

            className="
              wedding-title
              text-6xl
              md:text-8xl
              font-light
            "

          >

            До встречи
            <br/>
            на нашей свадьбе

          </h2>



          <p

            className="
              mt-10
              text-xl
              tracking-widest
            "

          >

            14 ноября 2026 г.

          </p>


          <p

            className="
              mt-8
              text-gray-300
            "

          >

            Юлия & Илья

          </p>


        </motion.div>



      </section>


    </>

  );

}


export default RSVP;