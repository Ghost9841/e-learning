import { motion } from "framer-motion";
import { BookOpenText, Cpu,HandHelping, HardHat, ScanHeart } from "lucide-react";
import { GiRunningShoe } from "react-icons/gi";

const ServicesData = [
    {
        id:1,
        title:"Educational Services",
        path: "#",
        icon: BookOpenText,
        delay: 0.2,
    },
    {
        id:2,
        title:"Health Services",
        path: "#",
        icon: ScanHeart,
        delay: 0.3,
    },
    {
        id:3,
        title:"Counseling and Support",
        path: "#",
        icon: HandHelping,
        delay: 0.4,
    },
    {
        id:4,
        title:"Extracurricular Activities",
        path: "#",
        icon: GiRunningShoe,
        delay: 0.5,
    },
    {
        id:5,
        title:"Technology and Resources",
        path: "#",
        icon: Cpu,
        delay: 0.6,
    },
    {
        id:6,
        title:"Safety and Security",
        path: "#",
        icon: HardHat,
        delay: 0.7,
    },
]

const SildeLeft = (delay:number) =>{
    return {
        initial:{
            opacity: 0,
            x: 50,
        },
        animate:  {
            opacity: 1,
            x:0,
            transition:{
              duration:  0.3,
                delay: delay,
                ease:  "easeInOut",
            }
        }
    }
}
const Services = () => {
  return (
    <section className="container p-10  ">

    <div>
      <motion.h1 
      initial={{x:-50,opacity:0}}
      animate={{opacity:1, x:0}}
      transition={{ease: "easeInOut", delay:1,duration:1}}
      viewport={{once: true, amount: 0.1}}
      className="text-4xl font-bold  text-left pb-10">Services we provide</motion.h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {
             ServicesData.map((service)=>  (
                <motion.div
                variants={SildeLeft(service.delay)}
                initial="initial"
                whileInView={"animate"}
                viewport={{once: false, amount: 0.1}}
                key={service.id}
                className="bg-[#e8e8e8] rounded-2xl flex flex-col gap-4 items-center justify-center px-4 py-7 
                hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl drop-shadow">
                    <motion.div className=""><service.icon className="text-4xl mb-4"/></motion.div>
                    <h1 className="text-lg font-semibold text-center px-3 sm:text-sm sm:px-1">{service.title}</h1>
                    
                </motion.div>
             )) 
          }
      </div>
    
    </div>

    </section>
  )
}

export default Services
