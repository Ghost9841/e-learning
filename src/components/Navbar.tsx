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
        <div className="p-[1rem] flex justify-between">
            {/* Logo Section */}
            <div className="">
                <h1 className="font-bold text-2xl">
                    Halin Newa English School
                </h1>
            </div>
            {/* Menu Section */}
            <div className="hidden lg:block">
                <ul className="flex items-center gap-10">
                   {NavMenu.map((menu)=> (
                    <li key={menu.id}>
                        <a href={menu.path} className="">{menu.title}</a>
                    </li>
                   ))}
                </ul>
            </div>
            {/* Mob Section */}
          
        </div>
    </nav>
  )
}

export default Navbar
