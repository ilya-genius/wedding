import { motion } from "framer-motion";


const events = [
  {
    time: "15:00",
    title: "Сбор гостей и фуршет",
    description:
      "Встречаемся, общаемся, знакомимся и наслаждаемся первыми моментами нашего праздника в уютной атмосфере."
  },
  {
    time: "15:30",
    title: "Выездная церемония",
    description:
      "Самый трогательный момент дня — церемония, на которой мы станем семьёй в присутствии наших близких."
  },
  {
    time: "16:00",
    title: "Поздравления и фотосессия",
    description:
      "После церемонии у нас будет время для тёплых поздравлений, общения и красивых фотографий с родными и друзьями."
  },
  {
    time: "17:00",
    title: "Праздничный банкет",
    description:
      "Начинаем вечер с вкусного ужина, душевных тостов, поздравлений гостей и первых ярких моментов праздника."
  },
  {
    time: "18:30",
    title: "Продолжение вечера",
    description:
      "Интерактивы, сюрпризы и весёлые моменты, которые помогут сделать этот день ещё более особенным."
  },
  {
    time: "19:20",
    title: "Время танцев",
    description:
      "Музыка, улыбки и возможность отдохнуть, потанцевать и насладиться атмосферой праздника."
  },
  {
    time: "20:00",
    title: "Традиции и особенные моменты",
    description:
      "Продолжаем отмечать этот день вместе: семейные традиции, праздничные моменты и тёплые воспоминания."
  },
  {
    time: "21:20",
    title: "Торт и финальная часть вечера",
    description:
      "Завершаем праздник красивыми моментами, свадебным тортом и благодарностью каждому, кто разделил этот день с нами."
  },
  { time: "23:00",
     title: "До новых встреч",
     description: "Спасибо, что разделили этот важный день вместе с нами."
  }
];



function Timeline() {

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
          max-w-4xl
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
            mb-20
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
            Наш день
          </p>


          <h2
            className="
              wedding-title
              text-5xl
              md:text-7xl
              mt-5
            "
          >
            Расписание
          </h2>


        </motion.div>



        <div
          className="
            relative
          "
        >


          {/* линия */}

          <div
            className="
              absolute
              left-5
              md:left-1/2
              top-0
              bottom-0
              w-px
              bg-gray-300
            "
          />



          <div
            className="
              space-y-12
            "
          >

            {
              events.map(
                (event,index)=>(


                  <motion.div

                    key={index}

                    initial={{
                      opacity:0,
                      x:index % 2 === 0 ? -50 : 50
                    }}

                    whileInView={{
                      opacity:1,
                      x:0
                    }}

                    viewport={{
                      once:true
                    }}

                    transition={{
                      duration:0.7,
                      delay:index*0.05
                    }}

                    className="
                      relative
                      md:grid
                      md:grid-cols-2
                      md:gap-12
                    "

                  >


                    {/* точка */}

                    <div
                      className="
                        absolute
                        left-[11px]
                        md:left-1/2
                        md:-translate-x-1/2
                        top-6
                        w-4
                        h-4
                        rounded-full
                        bg-black
                        border-4
                        border-[#faf7f2]
                      "
                    />



                    <div
                      className="
                        ml-12
                        md:ml-0
                        md:text-right
                        md:pr-12
                      "
                    >

                      <p
                        className="
                          text-sm
                          text-gray-500
                        "
                      >
                        {event.time}
                      </p>


                    </div>



                    <div
                      className="
                        ml-12
                        md:ml-0
                        bg-white
                        rounded-3xl
                        p-6
                        shadow-sm
                      "
                    >

                      <h3
                        className="
                          text-2xl
                          wedding-title
                        "
                      >
                        {event.title}
                      </h3>


                      <p
                        className="
                          mt-3
                          text-gray-600
                          leading-relaxed
                        "
                      >
                        {event.description}
                      </p>


                    </div>



                  </motion.div>


                )
              )
            }


          </div>


        </div>


      </div>


    </section>

  );

}


export default Timeline;