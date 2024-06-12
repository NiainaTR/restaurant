import { useTheme } from './theme-provider'
import LogoDark from "../assets/logo-miso-dark.png";
import LogoLight from "../assets/logo-miso-light.png";
import { Bike, Facebook, Github, Instagram, Linkedin, MapPin, Twitter, UsersRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import gsap from 'gsap';

function Footer() {
  const {theme} = useTheme();
  const cursorBallRef = useRef(null);
  const containerRef = useRef(null);

  const handleMouserEnterRandomContainer = () => {
      gsap.to(cursorBallRef.current  , {opacity:1 , scale:1});
  }
  const handleMouserLeaveRandomContainer = () => {
      gsap.to(cursorBallRef.current , {opacity:0 , scale:0});
  }
  const handleMouseMoveRandomContainer = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      gsap.to(cursorBallRef.current , {
          left:e.clientX - 10,
          top:e.clientY
      })
  }

  return ( 
    <div className='w-full h-[100vh] flex flex-col items-center mt-[20vh] z-20 relative'
    ref={containerRef}
    onMouseEnter={handleMouserEnterRandomContainer}
    onMouseLeave={handleMouserLeaveRandomContainer}
    onMouseMove={(e) => handleMouseMoveRandomContainer(e)}
    >
        <hr className='w-full h-1' />
        <div 
            className="h-[250px] w-[250px] bg-primary/20 rounded-[50%] absolute top-0 left-0 opacity-0 scale-0 translate-x-[-50%] translate-y-[-50%] z-10 overflow-hidden"
            ref={cursorBallRef}
        ></div>
        <section className='w-full h-[60vh] md:h-[] mt-[20vh] flex flex-col md:flex-row lg:flex-row'>
            <div className='w-full md:w-[35%] lg:w-[20%] h-[20vh] md:h-full lg:h-full flex flex-col'>
                <div className='w-full text-center hover:scale-[1.4]'>
                    <p className='text-[20px] font-sans uppercase font-medium'>Contactez-nous</p>
                </div>
                <div className='w-full mt-8 text-center'>
                    <Link to="" className='text-[16px] font-medium flex items-center mx-10 mt-4'><Facebook className='mr-3'/> Facebook</Link>
                    <Link to="" className='text-[16px] font-medium flex items-center mx-10 mt-4'><Instagram className='mr-3'/> Instagram</Link>
                    <Link to="" className='text-[16px] font-medium flex items-center mx-10 mt-4'><Twitter className='mr-3'/> Twitter</Link>
                    <Link to="" className='text-[16px] font-medium flex items-center mx-10 mt-4'><Linkedin className='mr-3'/> Linkedin</Link>
                </div>
            </div>
            <div className='w-full md:w-[40%] lg:w-[60%] h-[20vh] md:h-full lg:h-full flex flex-col items-center justify-center'>
                <img src={theme === "light" ? LogoDark : LogoLight} alt="" className="hidden md:hidden lg:block w-[200px]"/>       
                <p className='mt-10 text-5xl hidden md:hidden lg:block font-normal'>Miso korea</p>
            </div>
            <div className='w-full md:w-[35%] lg:w-[20%] h-[20vh] md:h-full lg:h-full'>
            <div className='w-full text-center'>
                    <p className='text-[20px] font-sans uppercase font-medium'>Nos services</p>
                </div>
                <div className='w-full mt-8 text-center'>
                    <Link to="" className='text-[16px] font-medium flex items-center mx-10 mt-4'><MapPin className='mr-3'/>Vente à  Ankorondrano</Link>
                    <Link to="" className='text-[16px] font-medium flex items-center mx-10 mt-4'><MapPin className='mr-3'/>Vente à  Ankadifotsy</Link>
                    <Link to="" className='text-[16px] font-medium flex items-center mx-10 mt-4'><Bike className='mr-3'/> Livraison à domicile</Link>
                    <Link to="" className='text-[16px] font-medium flex items-center mx-10 mt-4'><UsersRound className='mr-3'/> Réseaux sociaux culinaire</Link>
                </div>
            </div>
        </section>
        <section className='w-full h-[20vh] flex flex-col items-center justify-center mt-[30vh] lg:mt-[10vh]'>
            <p className='text-xl p-[13vw] font-thin'>Ce site web représente une initiative expérimentale, visant à tester divers concepts. Il est important de noter que le restaurant associé à ce projet n'a pas encore ouvert ses portes et n'existe donc pas en tant qu'établissement physique à ce jour. </p>
        </section>
        <section className='w-full h-[20vh] flex flex-col items-center justify-center mt-[30vh] lg:mt-[10vh]'>
            <p className='text-xl p-[13vw] font-thin'>이 웹사이트는 다양한 개념을 테스트하기 위한 실험적인 이니셔티브를 나타냅니다. 이 프로젝트와 관련된 레스토랑은 아직 문을 열지 않았으므로 현재까지 물리적 시설로 존재하지 않는다는 점에 유의하는 것이 중요합니다. </p>
        </section>
          
        <section className='w-full h-[20vh] flex items-center justify-center mt-[20vh] lg:mt-[10vh] p-4'>
            <p className='text-xl'>Developped by -</p> <Link to="https://github.com/NiainaTR" className='flex'><Github className='mx-2'/> NiainaTR</Link> 
        </section>  
    </div>
  )
}

export default Footer
