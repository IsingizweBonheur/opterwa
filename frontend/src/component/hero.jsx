import React, { useState } from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/hero-image.png";
import Donation from "./donation";

export default function Hero() {

  const [openDonation, setOpenDonation] = useState(false);


  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.7,
        ease: "easeOut"
      }
    }
  });


  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">


      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white -z-10"></div>



      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">


        <div className="grid lg:grid-cols-2 gap-16 items-center">



          {/* LEFT CONTENT */}

          <div className="text-center lg:text-left z-10">


            {/* Badge */}

            <motion.div
              variants={fadeUp(0)}
              initial="hidden"
              animate="show"
              className="
              inline-flex items-center 
              px-4 py-2 
              rounded-full 
              bg-green-50 
              text-green-700 
              text-sm 
              font-medium 
              mb-6
              "
            >

              Empowering Communities Through Technology

            </motion.div>





            {/* Title */}

            <motion.h1

              variants={fadeUp(0.1)}
              initial="hidden"
              animate="show"

              className="
              text-4xl 
              sm:text-5xl 
              text-black 
              mb-6 
              leading-tight 
              font-bold
              "
            >

              Bridging Traditional Craftsmanship 
              With Modern Digital Opportunity


            </motion.h1>





            {/* Mission */}

            <motion.p

              variants={fadeUp(0.2)}
              initial="hidden"
              animate="show"

              className="
              text-lg 
              sm:text-xl 
              text-gray-700 
              mb-6 
              font-medium
              "
            >

              OPTERWA supports artisans and small businesses by
              providing training, digital tools, and access to global markets.


            </motion.p>






            {/* Description */}

            <motion.p

              variants={fadeUp(0.3)}
              initial="hidden"
              animate="show"

              className="
              text-base 
              sm:text-lg 
              text-gray-600 
              mb-8 
              leading-relaxed
              "
            >

              We believe every artisan deserves the opportunity to grow,
              earn sustainably, and showcase their craft to the world
              through technology.


            </motion.p>







            {/* BUTTONS */}

            <motion.div

              variants={fadeUp(0.4)}
              initial="hidden"
              animate="show"

              className="
              flex 
              flex-col 
              sm:flex-row 
              gap-4 
              justify-center 
              lg:justify-start
              "
            >



              {/* Volunteer */}

              <a

                href="/contact"

                className="
                inline-flex 
                items-center 
                justify-center 
                bg-blue-700 
                hover:bg-blue-800 
                text-white 
                font-semibold 
                px-8 
                py-3 
                rounded-lg 
                transition-all 
                duration-300
                "

              >

                Become a Volunteer


              </a>





              {/* Donation */}

              <button

                onClick={() => setOpenDonation(true)}

                className="
                inline-flex 
                items-center 
                justify-center 
                bg-green-600 
                hover:bg-green-700 
                text-white 
                font-semibold 
                px-8 
                py-3 
                rounded-lg 
                transition-all 
                duration-300
                "

              >

                ❤️ Donate Now


              </button>



            </motion.div>







            {/* Trust */}

            <motion.p

              variants={fadeUp(0.5)}
              initial="hidden"
              animate="show"

              className="
              text-sm 
              text-gray-500 
              mt-4
              "

            >

              Join a growing community creating real impact
              in artisan communities.


            </motion.p>




          </div>







          {/* IMAGE */}


          <motion.div

            initial={{
              opacity:0,
              scale:0.9
            }}

            animate={{
              opacity:1,
              scale:1
            }}

            transition={{
              duration:0.8
            }}

            className="
            relative 
            flex 
            justify-center 
            lg:justify-end 
            -mr-8 
            lg:-mr-16
            "

          >



            <motion.img

              whileHover={{
                scale:1.03
              }}

              transition={{
                type:"spring",
                stiffness:120
              }}

              src={heroImage}

              alt="
              Artisans working with traditional crafts 
              and digital tools
              "

              className="
              w-[110%] 
              lg:w-[130%] 
              h-auto 
              rounded-2xl 
              shadow-xl 
              object-contain
              "

            />


          </motion.div>





        </div>


      </div>







      {/* DONATION MODAL */}

      {
        openDonation && (

          <Donation

            close={() => setOpenDonation(false)}

          />

        )
      }



    </div>
  );
}