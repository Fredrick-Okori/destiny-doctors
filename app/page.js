import Image from 'next/image'
import styles from './page.module.css'
import { Text } from '@chakra-ui/react'
import NavBar from '@/components/navbar'
import HeroSection from '@/components/herosection'
import Mission from '@/components/mission'

export default function Home() {
  return (
   <>
      <NavBar/>
      <HeroSection />
      <Mission />
      <Mission />
    </>
  )
}
