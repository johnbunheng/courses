import Img from "../img/Banner.png";
import { motion } from "framer-motion";
import { MdAccessTime } from "react-icons/md";
import { Fadeleft } from "../Service/Service";

import { FaBookReader } from "react-icons/fa";
import { GrUserExpert } from "react-icons/gr";
import { useState } from "react";


const Banner = () => {
    const [list,Setlist] = useState([
        {
            id:1,
            name:"100k+ Online Courses",
            icon:<FaBookReader />,
            delay: 0.2
        },
        {
            id:2,
            name:"LeafTime Accses",
            icon:<MdAccessTime />,
            delay: 0.3
        },
        {
            id:3,
            name:"Expert insruction",
            icon:<GrUserExpert />,
            delay: 0.4
        }
    ])
    return ( 
        <section>
            <div className="container flex justify-around
             items-center text-center my-10">
                {/* Image Banner */}
                <div

                className="w-36 sm:w-60 items-center">
                    <img src={Img} alt="" />
                </div>
                {/* Text Banner */}
                <div 
                

                className=" space-y-3 ">
                    <h1 className="text-xl font-semibold">The World Leadding <br /><span className="bg-gradient-to-t from-pink-950 to-pink-500
                    text-transparent bg-clip-text"> Online Leanning Pleatform</span></h1>
                    {
                        list.map((item)=>(
                            <motion.div 
                            variants={Fadeleft(item.delay)}
                            initial="initial"
                            whileInView={"animate"}
                            viewport={{ once: true }}

                            className="flex gap-5 bg-pink-800 p-2
                            rounded-lg text-lime-200 hover:shadow-xl cursor-pointer">
                                <span className="p-1 text-sky-800">{item.icon}</span>
                                <p className=" ">{item.name}</p>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </section>
     );
}
 
export default Banner;