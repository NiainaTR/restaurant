function FoodCardLoader() {
  return (
    <div
        className="relative group cursor-pointer overflow-hidden duration-500 w-[80vw] md:w-[30vw] lg:w-[32vw] m-2 h-[70vh] lg:h-[60vh] text-gray-50 bg-transparent rounded-xl mt-[10vh] backdrop-blur-md"   
    >
        <div className="absolute w-full h-full bg-primary backdrop-blur-md flex items-center justify-center">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] text-secondary"
          role="status">
          <span
            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            >Loading...</span>
        </div>
        </div>
    </div>
  )
}


export default FoodCardLoader;