import Image from 'next/image'
import EmailInput from '../components/email-input'
import Footer from '../components/footer'
import Hero from '../components/hero'
import Illustration from '../components/illustration'
import Logo from '../components/logo'
import SocialMedia from '../components/social-media'

export default function Home() {
  return (
    <div className="h-screen w-screen md:w-1/2 md:mx-auto font-libreFranklin p-12 flex flex-col">
      <Logo />
      <Hero />
      <EmailInput />
      <Illustration />
      <div className="text-center">
        <SocialMedia />
        <Footer />
      </div>
    </div>
  )
}
