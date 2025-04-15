import { motion } from "framer-motion";
import { IoMdMenu } from "react-icons/io";


const NavMenu = [
{
    id:1,
    title: "Home",
    path: "/"
},
{
    id:2,
    title: "Services",
    path: "/services"
},
{
    id:3,
    title: "About us",
    path: "/about-us"
},
{
    id:4,
    title: "Our Team",
    path: "/contact-us"
},
]

const Navbar = () => {
  return (
    <nav className="">
        <motion.div 
        initial={{y:-50,opacity:0}}
        animate={{opacity:1, y:0}}
        transition={{ease: "easeIn", delay:0.4,duration:1}}
        className="p-[1rem] flex justify-between items-center">
            {/* Logo Section */}
            <div className="">
                <h1 className="font-bold text-2xl">
                    ABC School
                </h1>
            </div>
            {/* Menu Section */}
            <div className="hidden lg:block">
                <ul className="flex items-center gap-10">
                   {NavMenu.map((menu)=> (
                    <li key={menu.id}>
                        <a href={menu.path} className="inline-block py-2 px-3 hover:text-blue-500 relative group">
                            <div className="w-2 h-2 bg-blue-500 absolute mr-2 left-1/2 -translate-x-1/2 top-1/2 bottom-0
                            group-hover:block mt-3 hidden rounded-full"></div>
                            {menu.title}</a>
                    </li>
                   ))}
                   <button className="primary-btn">Enroll Now</button>
                </ul>
            </div>
            {/* Mob Section */}
          <div className="lg:hidden">
            <IoMdMenu className="text-4xl"/>
          </div>
        </motion.div>
    </nav>
  )
}

export default Navbar
