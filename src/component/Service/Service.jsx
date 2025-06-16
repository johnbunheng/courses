import { useState } from "react";
import { MdComputer } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineHeadphones } from "react-icons/md";
import { motion } from "framer-motion";

const Services = [
        {
            id:1,
            name:"Web Development",
            link:"#",
            icon: <TbWorld />,
            delay: 0.2,
        },
         {
            id:2,
            name:"Software Development",
            link:"#",
            icon: <MdComputer />,
            delay: 0.3,
        },
         {
            id:3,
            name:"Mobile Development",
            link:"#",
            icon: <IoPhonePortraitOutline />,
            delay:0.4,
        },
         {
            id:4,
            name:"24/7h Support",
            link:"#",
            icon: <MdOutlineHeadphones />,
            delay: 0.5,
        },
         {
            id:5,
            name:"24/7h Support",
            link:"#",
            icon: <MdOutlineHeadphones />,
            delay: 0.6,
        },
    ]

export const Fadeleft = (delay) => {
    return {
        initial: {
            opacity: 0,
            x: 50,
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3,
                delay: delay,
                ease: "easeInOut",
            },
 
        }
    }
} 
const Service = () => {
    
    return ( 
        <section>
            <div className="container bg-gray-100 rounded-md my-10 pb-14 pt-10">
                <h1 
                    className=" xl:text-4xl lg:text-2xl sm:text-2xl px-10 font-semibold">
                    Service we provide
                </h1>
                {/* Service */}
                <div className="px-10 p-4 grid grid-cols-2 sm:grid-cols-3
                    md:grid-cols-5 xl:grid-cols-5 gap-6">
                    
                        {
                            Services.map((item)=>(
                                <motion.div
                                variants={Fadeleft(item.delay)}
                                initial="initial"
                                whileInView={"animate"}
                                viewport={{ once: true }}
                                
                                className="bg-pink-900 py-2 rounded-md flex flex-col gap-2 
                                items-center text-center cursor-pointer justify-center
                                hover:scale-110 duration-200 hover:bg-pink-400 
                                hover:shadow-2xl">
                                    <div className=" text-2xl mb-6 text-pink-200">{item.icon}
                                    </div>
                                    <h1 className="text-sm font-semibold text-pink-100">{item.name}</h1>
                                </motion.div>
                            ))
                        }
                    
                </div>
            </div>

        </section>
     );
}
 
export default Service;