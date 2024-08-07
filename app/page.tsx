import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/ui/Grid";
import { navItems } from "@/data";
import Footer from "@/components/Footer"
import RecentProjects from "@/components/ui/RecentProjects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main id='home' className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems
          
        //   [
        //      {
        //       name: 'Home',   
        //       link : '/',
        //       icon: <FaHome />
        //     }
        // ]
    
      }
        />
        <Hero />
        <Grid />
        <RecentProjects />
        <Skills />
        <Footer />
      </div>
    </main>
  );
}
