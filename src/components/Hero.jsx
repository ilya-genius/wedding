import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">

      {/* Фон */}
      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          bg-[url('/images/wedding-bg.webp')]
        "
      />

      {/* Затемнение */}
      <div 
        className="
          absolute 
          inset-0 
          bg-black/40
        "
      />


      {/* Контент */}
      <div 
        className="
          relative
          z-10
          flex
          min-h-[100svh]
          flex-col
          items-center
          justify-center
          text-white
          text-center
          px-6
        "
      >

        <motion.p
          initial={{opacity:0, y:20}}
          animate={{opacity:1, y:0}}
          transition={{duration:1}}
          className="text-lg tracking-[0.4em] uppercase mb-8"
        >
          Приглашение на свадьбу
        </motion.p>


        <motion.h1
          initial={{opacity:0, scale:0.9}}
          animate={{opacity:1, scale:1}}
          transition={{duration:1.2}}
          className="
            wedding-title
            text-7xl
            md:text-9xl
            font-light
          "
        >
          Юлия
          <br/>
          &
          <br/>
          Илья
        </motion.h1>


        <motion.p
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{
            duration:1,
            delay:0.8
          }}
          className="
            mt-10
            text-xl
            tracking-widest
          "
        >
          14 ноября 2026
        </motion.p>


      </div>

    </section>
  );
}

export default Hero;