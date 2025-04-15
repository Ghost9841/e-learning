import { IoIosArrowRoundForward } from "react-icons/io"
import hero from "../assets/kid watching book.jpg"
import { motion} from "framer-motion";


export const FadeUp = (delay:number) =>{
  return {
    initial:{
      opacity: 0,
      y: 50,
    },
    animate:  {
      opacity: 1,
      y:0,
      transition:{
        type: "spring",
        stiffness:100,
        duration:0.5,
        delay: delay,
        ease:  "easeInOut",
      }
    }
  }
}
const HeroSection = () => {
  return (
  <section className="bg-light overflow-hidden relative mx-1">
    <div className="cointainer justify-between grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
        {/* Brand Info */}
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-20">
            <div className="text-center md:text-left space-y-10 lg:max-w-[400px] ml-20">
              <motion.h1
              variants={FadeUp(0.6)}
              initial="initial"
              animate="animate"
              className="text-3xl lg:text-5xl font-bold !leading-snug">An Investment In
              {" "}
              <span className="text-orange-500">Knowledge</span>
              {" "}
              Pays The Best Interest.
              </motion.h1>
              {/* Button */}
              <motion.div 
              variants={FadeUp(0.8)}
              initial="initial"
              animate="animate"
              className="flex justify-center md:justify-start">
              <button className="primary-btn flex items-center gap-2 group">
                      Get Admission
              <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300"/>
              </button>
              </motion.div>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="flex justify-center items-center">
            <motion.img 
            initial={{x:50, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:0.6, delay:0.4, ease: "easeInOut"}}
            src={hero} 
            alt="Hero Section Image" 
            className="w-[400px] xl:w-[400px] md:block relative z-10 drop-shadow" />
        </div>
    </div>
 </section>
  )
}

export default HeroSection
