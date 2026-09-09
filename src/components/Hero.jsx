import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import { heroStats } from "../data/site";
import { siteImages } from "../data/siteImages";

export default function Hero() {
  return (
    <section
      className="
        relative
        w-full
        min-h-[640px]
        sm:min-h-[680px]
        md:min-h-[700px]
        lg:min-h-[calc(100svh-84px)]
        bg-navy-950
        text-white
        overflow-hidden
      "
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden bg-navy-950">
        <img
          src={siteImages.hero}
          alt="HSM Health and Safety Management training"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          sizes="100vw"
          className="
            absolute
            top-0
            bottom-0
            right-0
            h-full
            w-auto
            max-w-none
            object-contain
            object-right

            lg:inset-0
            lg:w-full
            lg:h-full
            lg:object-cover
            lg:object-[58%_68%]
            xl:object-[60%_70%]
          "
        />

        {/* Mobile / Tablet readability */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-navy-950
            via-navy-950/70
            to-navy-950/10
            md:from-navy-950/95
            md:via-navy-950/55
            md:to-transparent
            lg:hidden
          "
        />

        {/* Mobile / Tablet bottom fade */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-navy-950
            via-navy-950/25
            to-transparent
            lg:hidden
          "
        />

        {/* Desktop readability */}
        <div
          className="
            hidden
            lg:block
            absolute
            inset-0
            bg-gradient-to-r
            from-navy-950/90
            via-navy-950/45
            to-transparent
          "
        />

        {/* Desktop bottom fade */}
        <div
          className="
            hidden
            lg:block
            absolute
            inset-0
            bg-gradient-to-t
            from-navy-950
            via-navy-950/20
            to-transparent
          "
        />

        {/* Overall tint */}
        <div className="absolute inset-0 bg-navy-950/10 pointer-events-none" />
      </div>

      {/* Content */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-content
          mx-auto
          px-5
          sm:px-8
          lg:px-10

          min-h-[640px]
          sm:min-h-[680px]
          md:min-h-[700px]
          lg:min-h-[calc(100svh-84px)]

          flex
          flex-col
          justify-end

          pt-15
          pb-7

          sm:pt-20
          sm:pb-8

          md:pt-24
          md:pb-10

          lg:pt-20
          lg:pb-12
        "
      >
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="w-full max-w-2xl"
        >
          {/* Eyebrow */}
          <p
            className="
              text-[9px]
              sm:text-[10px]
              md:text-xs
              font-medium
              tracking-[0.15em]
              sm:tracking-[0.17em]
              text-green-400
              mb-3
              sm:mb-4
            "
          >
            TRAINING · HSE · CAREER DEVELOPMENT
          </p>

          {/* Heading */}
          <h1
            className="
              font-display
              font-semibold

              text-[2rem]
              leading-[1.08]

              sm:text-[2.6rem]
              sm:leading-[1.07]

              md:text-5xl
              md:leading-[1.06]

              lg:text-[3.75rem]
              lg:leading-[1.06]

              tracking-tight

              mb-4
              sm:mb-5
            "
          >
            Build a Safer Career. Create a Better Tomorrow.
          </h1>

          {/* Description */}
          <p
            className="
              text-stone-200
              text-[13px]
              sm:text-sm
              md:text-base
              lg:text-lg

              leading-relaxed

              max-w-xl

              mb-6
              sm:mb-7
              lg:mb-8
            "
          >
            Professional Health, Safety & Environment training focused on
            practical knowledge, industry awareness and career development.
          </p>

          {/* Buttons */}
          <div
            className="
              flex
              flex-wrap
              items-center
              gap-2.5
              sm:gap-3

              mb-6
              sm:mb-8
              lg:mb-9
            "
          >
            <Link
              to="/courses"
              className="
                inline-flex
                items-center
                justify-center
                gap-2

                bg-green-500
                hover:bg-green-400

                text-white
                text-xs
                sm:text-sm
                font-medium

                px-4
                sm:px-5
                md:px-6

                py-2.5
                sm:py-3

                rounded-sm
                transition-colors
              "
            >
              Explore Courses
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </Link>

            <Link
              to="/contact"
              className="
                inline-flex
                items-center
                justify-center
                gap-2

                bg-white/5
                backdrop-blur-sm

                border
                border-white/25

                hover:bg-white/10
                hover:border-white/50

                text-white
                text-xs
                sm:text-sm
                font-medium

                px-4
                sm:px-5
                md:px-6

                py-2.5
                sm:py-3

                rounded-sm

                transition-all
              "
            >
              <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Talk to Us
            </Link>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.dl
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="
            w-full

            grid
            grid-cols-2
            sm:grid-cols-4

            gap-x-4
            gap-y-4
            sm:gap-6
            lg:gap-8

            pt-1
          "
        >
          {heroStats.map((s) => (
            <div key={s.label} className="min-w-0">
              <dt className="sr-only">{s.label}</dt>

              <dd
                className="
                  font-display
                  text-lg
                  sm:text-xl
                  md:text-2xl
                  lg:text-3xl

                  font-semibold
                  text-white
                  whitespace-nowrap
                "
              >
                {s.value}
              </dd>

              <dd
                className="
                  text-[10px]
                  sm:text-xs
                  md:text-sm

                  text-stone-300

                  mt-0.5
                  sm:mt-1

                  leading-relaxed
                "
              >
                {s.label}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
