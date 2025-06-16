import Banner from "../img/Banner.webp"
import { IoArrowForwardOutline } from "react-icons/io5";
import {animate, motion} from "framer-motion";

export const FadeUp = (delay) => {
    return{
        initial: {
            opacity: 0,
            y: 50,
        },
        animate: {
            opacity:1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                duration: 0.5,
                delay: delay,
                ease: "easeInOut",
            }
        },
    }
} 

const Hero = () => {
    return ( 
        <section className=" bg-gray-100">
            <div className="container py-5 grid grid-cols-2 text-center items-center ">
                {/* text content */}
                <div>
                    <motion.h1 
                    variants={FadeUp(0.6)}
                    initial="initial"
                    animate="animate"

                    className="text-3xl lg:text-5xl font-semibold ">
                        Let's to build a{" "}<span className="text-pink-800">Website </span>
                        fot your business
                    </motion.h1>
                   <motion.div 
                   variants={FadeUp(0.8)}
                   initial="initial"
                   animate="animate"
                   transition="transition"
                   className="flex justify-center mt-4 lg:justify-start xl:justify-center group">
                     <button className="btn flex items-center gap-2">
                        Get Started
                        <IoArrowForwardOutline className=" duration-200 group-hover:translate-x-2 
                        group-hover:scale-105 group-hover:rotate-45"/>
                    </button>
                   </motion.div>
                </div>
                {/* Image Banner */}
                <motion.div
                initial={{x:60 , opacity:0}}
                animate={{x:0 , opacity: 1}}
                transition={{duration:0.5,deley:0.6, ease:"easeInOut"} }
                >
                    
                    <img src={Banner} alt="" 
                    className=""
                />
                </motion.div>
            </div>
        </section>
     );
}
 
export default Hero;