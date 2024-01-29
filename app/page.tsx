import Image from 'next/image'
import Navbar from './components/Navbar'
import Socials from './components/Socials'
import HireMe from './components/HireMe'
import MainContent from './components/MainContent'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Socials />
      <MainContent />
      <HireMe />
    </main>
  )
}
