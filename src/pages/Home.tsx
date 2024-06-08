import Header from "@/components/Header";
import Hero from "@/components/Hero";

function Home() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <div className="min-h-[120vh] w-full relative flex items-center justify-evenly flex-wrap px-[0.5vw] mt-[20vh]">
      </div>
    </div>
  )
}

export default Home;
