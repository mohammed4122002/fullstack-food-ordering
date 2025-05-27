
import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "./_components/hero";
import BestSellers from "./_components/BestSellers";


export default async function Home() {



 return (

    <main className="" > 
    
     <Hero/>
       <BestSellers />
       <About/>
       <Contact/>
    </main>
  );
}
