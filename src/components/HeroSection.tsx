import { IoIosArrowRoundForward } from "react-icons/io"


const HeroSection = () => {
  return (

    <section className="bg-light overflow-hidden relative mx-1">
    <div className="cointainer justify-between grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
        {/* Brand Info */}
        <div className="flex flex-col justify-center
         py-14 md:py-0 relative z-20">
            <div className="text-center md:text-left space-y-10 lg:max-w-[400px]">

            <h1 className="text-3xl lg:text-5xl font-bold !leading-snug">An Investment In
                 {" "}<span className="text-orange-500">Knowledge</span> {" "}
                 Pays The Best Interest.</h1>
                 <div className="flex justify-center md:justify-start">
                 <button className="primary-btn flex items-center gap-2 group">
                     Get Admission
                    <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2
                    group-hover:-rotate-45 duration-300"/>
                 </button>
                 </div>
                    </div>
        </div>
        
        {/* Hero Image */}
        <div className="">
            <img src="" alt="" className="" />
        </div>

    </div>
    </section>
  )
}

export default HeroSection
