import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const allGeneralFood =  {
  dishes:[{"id" : 1 , "name": "Kimchi Jjigae"} , {"id" : 2 , "name": "Bibimbap"}],
  desserts:[{"id" : 7 , "name": "Hotteok"} , {"id" : 8 , "name": "Bingsu"}],
  drinks:[{"id" : 13 , "name": "Sikhye"} , {"id" : 14 , "name": "Soju"}]
}

function Hero() {
    
  const titleRef1 = useRef(null);
  const titleRef2 = useRef(null);
  
  useEffect(() => {

    gsap.from(titleRef1.current , {
      y:35,
      opacity:0,
      duration:0.8      
    })

    gsap.from(titleRef2.current , {
      y:30,
      opacity:0,
      delay:0.8,
      duration:0.8
    })
  } , []);



  return (
    <>
      <div className="w-full relative pt-[10vh]  lg:pt-[19vh] px-[3vw] overflow-x-hidden">
        <h1 className="text-[15vw] md:text-[13vw] lg:text-[10vw] font-bold uppercase leading-[20vw] lg:leading-[14vw]"
          ref={titleRef1}
        >
          Le sourire après
        </h1>
        <h1 className="text-[15vw] md:text-[13vw] lg:text-[10vw] font-bold uppercase leading-[20vw] lg:leading-[14vw]"
          ref={titleRef2}
        >
          chaque bouché
        </h1>
        <section className="w-full lg:h-[80vh] bg-slate-600 mt-1">
            <video autoPlay src="./foodvideo.mp4" loop muted className="w-[100%] object-cover lg:h-full"
            ></video>
        </section>
      </div>
      <div className="w-full h-[320vh] md:h-[100vh] lg:h-[100vh] relative mt-2 flex flex-col md:flex-row lg:flex-row items-center justify-between py-[3vw] px-[3vw]">
        <div className="h-[30%] w-[100%] md:h-[100%] md:w-[30%] lg:h-[100%] lg:w-[30%] bg-red-500 relative">
          <img src="./plat.jpg" alt="" className="h-[100%] w-full object-cover"/>
          <div className="min-h-[60px] w-[80%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 flex items-center justify-center">
            <div
              className="group relative inline-block cursor-pointer"
            >
              <Link to="/menu" className="absolute w-full h-[100%] top-0 left-0"></Link>
              <div className="w-[303px] md:w-[197px] lg:w-[297px] min-h-[50px] px-8 bg-customSalmon text-black rounded-[25px] flex items-center justify-between uppercase text-[12px] tracking-wider">
                <div className="w-2 h-2 bg-black rounded-[50%]"></div>
                <div>menu</div>
                <div className="font-bold">plats</div>
                <svg width="15" height="15" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:rotate-90 transition-transform duration-300 ease-in-out">
                  <path d="M0.237375 0.784804H1.61738L4.52138 3.5328L1.61738 6.2928H0.237375L3.14138 3.5328L0.237375 0.784804Z" fill="currentColor"></path>
                </svg>
              </div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-full bg-white p-4 rounded-lg shadow-lg opacity-0 translate-y-[-20px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out grid grid-cols-2">
              {
                  allGeneralFood.dishes.map((food) => {
                    return(
                      <div 
                        key={food.id}
                        className="flex flex-col items-center justify-center"
                      >
                        <div className="flex flex-col items-center justify-evenly cursor-pointer relative">
                          <Link to={`/food/${food.id}`} className="absolute top-0 left-0 w-full h-[100%]"></Link>
                          <img src={`./${food.id}.jpg`} alt="" className="w-[80%]"/>
                          <div className="mt-3">
                            <p className="uppercase font-medium text-black">{food.name}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
        <div className="h-[30%] w-[100%] md:h-[100%] md:w-[30%] lg:h-[100%] lg:w-[30%] bg-red-500 relative">
          <img src="./dessert.jpg" alt="" className="h-[100%] w-full object-cover"/>
          <div className="min-h-[60px] w-[80%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 flex items-center justify-center">
            <div
              className="group relative inline-block cursor-pointer"
            >
              <Link to="/menu" className="absolute w-full h-[100%] top-0 left-0"></Link>
              <div className="w-[303px] md:w-[197px] lg:w-[297px] min-h-[50px] px-8 bg-customSalmon text-black rounded-[25px] flex items-center justify-between uppercase text-[12px] tracking-wider">
                <div className="w-2 h-2 bg-black rounded-[50%]"></div>
                <div>menu</div>
                <div className="font-bold">desserts</div>
                <svg width="15" height="15" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:rotate-90 transition-transform duration-300 ease-in-out">
                  <path d="M0.237375 0.784804H1.61738L4.52138 3.5328L1.61738 6.2928H0.237375L3.14138 3.5328L0.237375 0.784804Z" fill="currentColor"></path>
                </svg>
              </div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-full bg-white p-4 rounded-lg shadow-lg opacity-0 translate-y-[-20px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out grid grid-cols-2">
                { 
                  allGeneralFood.desserts.map((food) => {
                    return(
                      <div 
                        key={food.id}
                        className="flex flex-col items-center justify-center"
                      >
                        <div className="flex flex-col items-center justify-evenly cursor-pointer relative">
                          <Link to={`/food/${food.id}`} className="absolute top-0 left-0 w-full h-[100%]"></Link>
                          <img src={`./${food.id}.jpg`} alt="" className="w-[80%]"/>
                          <div className="mt-3">
                            <p className="uppercase font-medium text-black">{food.name}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
        <div className="h-[30%] w-[100%] md:h-[100%] md:w-[30%] lg:h-[100%] lg:w-[30%] bg-red-500 relative">
          <img src="./boisson.jpg" alt="" className="h-[100%] w-full object-cover"/>
          <div className="min-h-[60px] w-[80%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 flex items-center justify-center">
            <div
              className="group relative inline-block cursor-pointer"
            >
              <Link to="/menu" className="absolute w-full h-[100%] top-0 left-0"></Link>
              <div className="w-[303px] md:w-[197px] lg:w-[297px] min-h-[50px] px-8 bg-customSalmon text-black rounded-[25px] flex items-center justify-between uppercase text-[12px] tracking-wider">
                <div className="w-2 h-2 bg-black rounded-[50%]"></div>
                <div>menu</div>
                <div className="font-bold">boissons</div>
                <svg width="15" height="15" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:rotate-90 transition-transform duration-300 ease-in-out">
                  <path d="M0.237375 0.784804H1.61738L4.52138 3.5328L1.61738 6.2928H0.237375L3.14138 3.5328L0.237375 0.784804Z" fill="currentColor"></path>
                </svg>
              </div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-full bg-white p-4 rounded-lg shadow-lg opacity-0 translate-y-[-20px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out grid grid-cols-2">
              {
                  allGeneralFood.drinks.map((food) => {
                    return(
                      <div 
                        key={food.id}
                        className="flex flex-col items-center justify-center"
                      >
                        <div className="flex flex-col items-center justify-evenly cursor-pointer relative">
                          <Link to={`/food/${food.id}`} className="absolute top-0 left-0 w-full h-[100%]"></Link>
                          <img src={`./${food.id}.jpg`} alt="" className="w-[80%]"/>
                          <div className="mt-3">
                            <p className="uppercase font-medium text-black">{food.name}</p>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Hero;