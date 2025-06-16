import { useState } from "react";
import Logo from "../img/logo.webp"
import { FiAlignJustify } from "react-icons/fi";
import {motion} from "framer-motion";
import { FiX } from "react-icons/fi";
const Navbar = () => {

    const [Menu,SetMenu] = useState([
         {
            id:1,
            name: "Home",
            link:""
         },
         {
            id:2,
            name: "Service",
            link:""
         },
         {
            id:3,
            name: "About Us",
            link:""
         },
         {
            id:4,
            name: "Our Team",
            link:""
         },
         {
            id:5,
            name: "Contact Us",
            link:""
         }            
    ])
    const [show,setShow] = useState(false);
    const shownav = () => setShow(!show);
    return ( 
        <motion.nav 
            initial={{y:-50,opacity:0}}
            animate={{y:0 ,opacity:1}}
            transition={{delay:0.8,transition:0.5}}
        >
            <div className="container py-2 flex justify-between items-center">     
                {/* Logo */}
                <div className="flex items-center gap-2 text-xl font-bold">
                    <a href="">
                        <img src={Logo} alt="" 
                        className=" w-16 animate-spin duration-1000"
                        />
                    </a>
                    <p className=" ">Duckr</p>
                </div>
                {/* Menu Section */}

                
                <div className=" hidden sm:block ">
                    <ul className="flex items-center gap-4 text-md">
                        {
                            Menu.map((item)=>{
                                return(
                                    <li key={item.id}>
                                        <a href={item.path}
                                         className=" inline-block py-2 cursor-pointer  hover:text-pink-800
                                         relative group"
                                        >
                                        <div className="w-5 h-[0.15rem] bg-pink-800 absolute mt-3
                                         left-1/2 -translate-x-1/2 top-1/2 bottom-0 duration-200
                                         group-hover:block  hidden">

                                        </div>
                                        {item.name}
                                        </a>
                                    </li>
                                )
                                
                            })
                        }
                        <button className="btn">Sign In</button>
                    </ul>
                </div> 
                
                {/* Mobile Bar */}
                <div onClick={shownav} className="sm:hidden">
                    <FiAlignJustify className="text-4xl" />
                </div> 
                {show && (
                    <motion.div
                        initial={{ y: -0, opacity: 0 }}
                        animate={{ y: "auto", opacity: 1 }}
                        exit={{ y: -0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="sm:hidden bg-white shadow-md rounded-md absolute mx-28 top-6"
                        >
                        <FiX 
                        onClick={() => setShow(false)}
                        className=" mx-[85%] text-4xl absolute cursor-pointer "/>
                        <ul className="flex flex-col items-center w-[250px] gap-4 py-4">
                            {Menu.map((item) => (
                            <li key={item.id}>
                                <a
                                href={item.link}
                                className="block py-2 px-4 text-md hover:text-pink-800 "
                                onClick={() => setShow(false)} // Close menu on click
                                >
                                {item.name}
                                 
                                </a>
                            </li>
                            ))}
                            <button
                            className="btn"
                             // Close menu on click
                            >
                            Sign In
                            </button>
                        </ul>
                    </motion.div>
                )}
            </div>
        </motion.nav>
     );
}
 
export default Navbar;