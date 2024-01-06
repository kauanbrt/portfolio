import Hero from '@/components/main/Hero';
import Skills from '@/components/main/Skills';
import Encryption from '@/components/main/Encryption';
import Footer from '@/components/main/Footer';
import Orbit from '@/components/main/Orbit';

export default function Home() {
  return (
    <main className="h-full w-full" >
      <div className="flex flex-col gap-20" >
        <Hero />
        <Orbit />
        <Encryption />
        <Footer />
      </div>
    </main>
  )
}
