import { BookOpenText, Cpu, ExternalLink, HandHelping, HardHat, MonitorCheck, ScanHeart } from "lucide-react";
const ServicesData = [
    {
        id:1,
        title:"Educational Services",
        path: "#",
        icon: BookOpenText,
        delay: 0.4,
    },
    {
        id:2,
        title:"Health Services",
        path: "#",
        icon: ScanHeart,
        delay: 0.4,
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
        icon: MonitorCheck,
        delay: 0.4,
    },
    {
        id:5,
        title:"Technology and Resources",
        path: "#",
        icon: Cpu,
        delay: 0.4,
    },
    {
        id:6,
        title:"Safety and Security",
        path: "#",
        icon: HardHat,
        delay: 0.4,
    },
]

const Services = () => {
  return (
    <section className="container ">

    <div>
      <h1 className="text-4xl font-bold  text-left pb-10">Services we provide</h1>
      <div className="">
          {
              
          }
      </div>
    
    </div>

    </section>
  )
}

export default Services
