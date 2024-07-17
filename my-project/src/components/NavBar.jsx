import React from 'react'
import { IoMenuSharp } from "react-icons/io5";
import { FaBottleWater } from "react-icons/fa6";
import { UpdateFollower } from 'react-mouse-follower';
import {motion} from "framer-motion"
 
const navBarMenu = [
    {
        id: "1",
        title: "Home",
        link: "#"
    },
    {
        id: "2",
        title: "Category",
        link: "#"
    },
    {
        id: "3",
        title: "Blog",
        link: "#"
    },
    {
        id: "4",
        title: "About",
        link: "#"
    },
    {
        id: "5",
        title: "Contact",
        link: "#"
    }
]



const NavBar = () => {
  return (
    <>
    <div className='bg-brandDark text-white py-8 font-varela'>
    <motion.nav 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration:1, delay:0.5}}

    className='container flex justify-between items-center'>
    {/* logo */}

    <div className='font-bold text-xl uppercase'>
        <a href="#">
            hydration / <span className='font-extralight text-white-70'>Market</span>
        </a>
    </div>

    {/* menu */}

    <div className='hidden md:block'>
        <ul className='flex items-center gap-4'>
            {
            navBarMenu.map((item)=>(
                <li id={item.id}>
                    <UpdateFollower
                    mouseOptions={{
                        backgroundColor: 'white',
                        zIndex: 999,
                        followSpeed: 1.5,
                        scale:5,
                        mixBlendMode: "difference"
                      }}
                    >
                    <a 
                    href={item.link} 
                    className='uppercase inline-block text-md py-2 px-3'>
                    {item.title}
                    </a>    
                    </UpdateFollower>
                </li>
            ))
            }
            <UpdateFollower
                    mouseOptions={{
                        backgroundColor: 'white',
                        zIndex: 999,
                        followSpeed: 1.5,
                        scale:5,
                        mixBlendMode: "difference"
                      }}
                    >
            <button className='text-xl ps-14'>
                            <FaBottleWater/>
                        </button>
             </UpdateFollower>
            
        </ul>
    </div>

    {/* hamBerger menu for mobile */}
        <div className='md:hidden'>
            <IoMenuSharp className='text-4xl' />
        </div>
    </motion.nav>
    </div>
    </>
  )
}

export default NavBar
