import ModeToggle from "@/components/mode-toggle"
import gsap from "gsap";
import { useEffect, useRef } from "react";

function Home() {

  const titleRef1 = useRef(null);
  const titleRef2 = useRef(null);
  const videoContainerRef = useRef(null);

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


    gsap.from(videoContainerRef , {
      scale:0.9,
      opacity:0,
      delay:1.3,
      duration:0.5
    })

  } , []);

  return (
    <div>
    <ModeToggle></ModeToggle>
      <div className="w-full relative pt-[10vh]  lg:pt-[19vh] px-[3vw]">
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
        <section className="w-full h-[80vh]  bg-slate-600 mt-1"
          ref={videoContainerRef}
        >
            <video autoPlay src="./foodvideo.mp4" loop muted className="w-full h-full object-cover"></video>
        </section>
      </div>
      <div className="w-full h-[320vh] md:h-[100vh] lg:h-[100vh] relative mt-2 flex flex-col md:flex-row lg:flex-row items-center justify-between py-[3vw] px-[3vw]">
          <div className="h-[30%] w-[100%] md:h-[100%] md:w-[30%] lg:h-[100%] lg:w-[30%] bg-red-500 relative">
              <img src="./crudite.jpg" alt="" className="h-[100%] w-full object-cover"/>
              <div className="h-[60px] w-[80%] rounded-[50px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 bg-yellow-200"></div>
          </div>
          <div className="h-[30%] w-[100%] md:h-[100%] md:w-[30%] lg:h-[100%] lg:w-[30%] bg-red-500 relative">
              <img src="./fastfood.jpg" alt="" className="h-[100%] w-full object-cover"/>
              <div className="h-[60px] w-[80%] rounded-[50px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 bg-yellow-200"></div>
          </div>
          <div className="h-[30%] w-[100%] md:h-[100%] md:w-[30%] lg:h-[100%] lg:w-[30%] bg-red-500 relative">
              <img src="./dessert.jpg" alt="" className="h-[100%] w-full object-cover"/>
              <div className="h-[60px] w-[80%] rounded-[50px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 bg-yellow-200"></div>
          </div>
          
      </div> 
      <div className="min-h-[120vh] w-full relative flex items-center justify-evenly flex-wrap px-[0.5vw] mt-[20vh]">
          <div className="h-[53vh] w-[38vw] relative flex items-center justify-center">
            <img src="./pizza1.png" alt="" className="w-[50%] translate-y-[-100px]"/>
          </div>
          <div className="h-[53vh] w-[38vw] relative flex items-center justify-center">
            <img src="./crudite1.png" alt="" className="w-[50%] translate-y-[-100px]"/>
          </div>
          <div className="h-[53vh] w-[38vw] relative flex items-center justify-center">
            <img src="./glace1.png" alt="" className="w-[50%] translate-y-[-100px]"/>
          </div>
          <div className="h-[53vh] w-[38vw] relative flex items-center justify-center">
            <img src="./pizza1.png" alt="" className="w-[50%] translate-y-[-100px]"/>
          </div>
          
          
      </div>
    </div>
  )
}

export default Home;
