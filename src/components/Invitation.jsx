import { motion } from "framer-motion";
import Countdown from "react-countdown";


function Invitation() {

  const weddingDate = new Date(
    "2026-11-14T15:00:00"
  );


  const renderer = ({
    days,
    hours,
    minutes,
    seconds
  }) => {
    return (
      <div 
        className="
          grid
          grid-cols-2
          md:grid-cols-4
          gap-4
          mt-12
          max-w-xl
          mx-auto
        "
      >

        <TimeBlock 
          value={days}
          label="дней"
        />

        <TimeBlock 
          value={hours}
          label="часов"
        />

        <TimeBlock 
          value={minutes}
          label="минут"
        />

        <TimeBlock 
          value={seconds}
          label="секунд"
        />

      </div>
    );
  };


  return (
    <section
      className="
        bg-[#faf7f2]
        min-h-screen
        flex
        items-center
        justify-center
        px-6
        py-24
      "
    >

      <motion.div

        initial={{
          opacity:0,
          y:50
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
          text-center
        "

      >

        <p
          className="
            uppercase
            tracking-[0.3em]
            text-sm
            text-gray-500
          "
        >
          Дорогие гости
        </p>


        <h2
          className="
            wedding-title
            text-5xl
            md:text-7xl
            mt-8
            text-gray-900
          "
        >
          Мы будем рады
          <br/>
          разделить этот день
          <br/>
          вместе с вами
        </h2>


        <p
          className="
            mt-8
            text-gray-600
            leading-relaxed
            text-lg
          "
        >
          С огромной радостью приглашаем вас
          стать частью самого важного события
          в нашей жизни — нашей свадьбы.
        </p>


        <Countdown
          date={weddingDate}
          renderer={renderer}
        />


        <a
          href="https://forms.gle/vntGZDBRwn2WCspUA"
          className="
            inline-block
            mt-12
            rounded-full
            bg-black
            text-white
            px-10
            py-4
            transition
            hover:scale-105
          "
        >
          Подтвердить присутствие
        </a>


      </motion.div>

    </section>
  );
}



function TimeBlock({
  value,
  label
}) {

  return (
    <div
      className="
        bg-white
        rounded-2xl
        shadow-sm
        p-5
      "
    >

      <div
        className="
          text-4xl
          wedding-title
          text-gray-900
        "
      >
        {value}
      </div>


      <div
        className="
          text-sm
          text-gray-500
          mt-2
        "
      >
        {label}
      </div>

    </div>
  )
}


export default Invitation;