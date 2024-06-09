import { useState } from 'react';

function HeartCustom({likes} : {likes : number}) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className='w-[60px] h-[50px] flex flex-col items-center'>
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="50" 
        height="50" 
        viewBox="0 0 24 24" 
        fill={isClicked ? "red" : "none"} 
        stroke={isClicked ? "none" : "white"} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        onClick={() => setIsClicked(!isClicked)}       
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
    <p className='text-white'>{likes}</p>
    </div>
  );
}

export default HeartCustom;
