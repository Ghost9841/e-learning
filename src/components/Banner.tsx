import LearnDraw from "../assets/learning together drawing graffiti.jpg";
import { motion } from "framer-motion";
import { FadeUp } from "./HeroSection";
import { GrUserExpert } from "react-icons/gr";
import { BookOpenCheck, Languages } from "lucide-react";

const Banner = () => {
  return (
    <section className="">
        {/* Banner Image */}
        <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
            <div className="flex justify-center items-center">
            <img 
            src={LearnDraw} 
            alt="Kids Together Drawing and Learning" 
            className="w-[650px] md:max-w-[650px] object-cover drop-shadow" />
            </div>
            {/* Banner Text */}
            <div className="flex flex-col justify-center">
                <div className="text-center md:text-left space-y-12">
                    <h1 className="text-3xl md:text-4xl font-bold !leading-snug">
                        The World's Leading Education Learning Platform
                    </h1>
                </div>
                <div className="flex flex-col gap-3 ">
                <motion.div 
                variants={FadeUp(0.5)}
                initial="initial"
                viewport={{ once: false, amount: 0.2 }}
                whileInView={"animate"}
                className="flex items-center gap-4 p-6 bg-[#f4f4f4] 
                 rounded-2xl hover:bg-white duration-300 hover:shadow-2xl ">
                    <BookOpenCheck className="text-2xl text-orange-500 mx-auto md:mx-0"/>
                    <p className="text-lg">Up to Primary Grade</p>
                </motion.div>
                <motion.div 
                variants={FadeUp(0.5)}
                initial="initial"
                viewport={{ once: false, amount: 0.2 }}
                whileInView={"animate"}
                className="flex items-center gap-4 p-6 bg-[#f4f4f4] 
                 rounded-2xl hover:bg-white duration-300 hover:shadow-2xl ">
                    <Languages className="text-2xl text-orange-500 mx-auto md:mx-0"/>
                    <p className="text-lg">Bilingual Expertise</p>
                </motion.div>
                <motion.div 
                variants={FadeUp(0.5)}
                initial="initial"
                viewport={{ once: false, amount: 0.2 }}
                whileInView={"animate"}
                className="flex items-center gap-4 p-6 bg-[#f4f4f4] 
                 rounded-2xl hover:bg-white duration-300 hover:shadow-2xl ">
                    <GrUserExpert className="text-2xl text-orange-500 mx-auto md:mx-0"/>
                    <p className="text-lg">Expert Instruction</p>
                </motion.div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner
