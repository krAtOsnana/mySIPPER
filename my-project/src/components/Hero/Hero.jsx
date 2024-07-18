import React from 'react'
import Headphone1 from '../../assets/icons/headphone1.png'
import Headphone2 from '../../assets/icons/headphone2.png'
import Headphone3 from '../../assets/icons/headphone3.png'
import { FaWhatsapp } from 'react-icons/fa'



const headphonesInfo = [
    {
        id: 1,
        image: Headphone1,
        title: "Wireless HeadPhones",
        subtitle: "Introducing our Premium Headphones, meticulously crafted for the discerning audiophile. These headphones deliver an unparalleled listening experience, combining cutting-edge technology with luxurious comfort.",
        price: "10$",
        modal: "Modal Brown",
        bgColor: "#8b5958",
        
    },
    {
        id: 2,
        image: Headphone2,
        title: "Wireless HeadPhones",
        subtitle: "Introducing our Premium Headphones, meticulously crafted for the discerning audiophile. These headphones deliver an unparalleled listening experience, combining cutting-edge technology with luxurious comfort.",
        price: "10$",
        modal: "lime green",
        bgColor: "#638153",
    },
    {
        id: 1,
        image: Headphone3,
        title: "Wireless HeadPhones",
        subtitle: "Introducing our Premium Headphones, meticulously crafted for the discerning audiophile. These headphones deliver an unparalleled listening experience, combining cutting-edge technology with luxurious comfort.",
        price: "10$",
        modal: "ocean blue",
        bgColor: "#5d818c",
    }
]


const Hero = () => {

    const [activeData, setActiveData] = React.useState(headphonesInfo[0])

    const handelActiveData = (data) => {
      setActiveData(data);
    }

  return (
    <>
      <section className='bg-brandDark text-white font-varela'>
        <div className="container  grid grid-cols-1 md:grid-cols-2 min-h-[700px]">

        {/* headphonr Info */}

        <div className='flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]'>
            <div className='space-y-4 text-center md:text-left'>
            <h1 className='text-3xl lg:text-6xl font bold  font-varela'>{activeData.title}</h1>
            <p className='text-sm leading-loose text-white/80'>{activeData.subtitle}</p>
            <button
            className='px-4 py-2 inline-block rounded-md font-light'
            style={{backgroundColor:activeData.bgColor}}
            >Buy and Listen
            </button>    

            {/* headphone list seperator */}
               <div className='flex items-center justify-center md:justify-sart gap-4 !mt-24'>
                <div className='w-20 h-[1px] bg-white'></div>
                <p className='uppercase text-sm '>Top Headphones for you</p>
                <div className='w-20 h-[1px] bg-white'></div>
               </div>
            {/* headphone list switcher */}
               <div className='grid grid-cols-3 gap-4'>
                {
                  headphonesInfo.map((item)=>{
                    return(
                      <div className='grid grid-col-2 place-items-center cursor-pointer'
                      onClick={()=>handelActiveData(item)}
                      key={item.id}
                      >
                      <div>
                        <img src={item.image} alt="" 
                        className='w-[200px]'/>
                      </div>
                      <div className='space-y-2'>
                        <p className='text-base font-bold'>{item.modal}</p>
                        <p className='text-xs font-normal text-nowrap'>{item.price}</p>
                      </div>
                      </div>
                    )
                  })
                }
               </div>

            </div>
            
        </div>

        {/* hero Image */}
        <div className='flex flex-col justify-end items-center'>
          <img src={activeData.image} 
               alt="" 
               className='w-[300px] md:w-[400px] xl:w-[500px]'/>
        </div>


        {/* watsapp Icon */}
        
        <div className='text-3xl text-white fixed bottom-10 right-10
                       hover:rotate-[720deg] duration-500 z-[999] 
                       mix-blend-difference'>
          <a href="">
            <FaWhatsapp/>
          </a>
        </div>



        </div>
      </section>
    </>
  )
}

export default Hero
