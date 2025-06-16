import Img1 from "../img/Hour.jpg"
import Img2 from "../img/hong.jpg"
import Img3 from "../img/heng5.jpg"
import Img4 from "../img/seth.jpg"
import { IoNotifications } from "react-icons/io5";
const Subsribe = () => {
    return ( 
        <section>
            <div className="container bg-gray-200 rounded-md p-12">
                {/* image upper */}
                <div className="flex justify-around ">
                    <img src={Img1} alt=""
                    className="w-28 sm:w-40 rounded-full shadow-2xl" />
                    <img src={Img2} alt="" 
                    className="w-28 sm:w-40 rounded-full shadow-2xl"/>
                </div>
                {/* text subsribe */}
                <div className="text-center m-5">
                    <h1 className="text-4xl font-semibold">
                        540K+ Student are <br />learning form us
                    </h1>
                    <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ad necessitatibus consectetur possimus repudiandae.</p>
                    <button className="btn m-5 group">Subscribe Now
                        <IoNotifications className="inline-block mx-2 group-hover:scale-150 duration-200" />
                    </button>
                </div>
                {/* image lower */}
                  <div className="flex justify-around">
                    <img src={Img3} alt="" 
                    className="w-28 sm:w-40 rounded-full shadow-2xl"/>
                    <img src={Img4} alt="" 
                    className="w-28 sm:w-40 rounded-full shadow-2xl"/>
                </div>
            </div>
        </section>
     );
}
 
export default Subsribe;