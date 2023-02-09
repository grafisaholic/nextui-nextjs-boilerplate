"use client";

import { Grid } from '@nextui-org/react'

import Image from 'next/image'
import { Inter } from '@next/font/google'
import SomeText from '@/ui/some-text';
import CTASection from '@/ui/CTASection';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Grid.Container
      gap={8}
      alignItems="center"
      justify='center'
      css={{ minHeight: "70vh", flexDirection: "column" }}
    >
      <SomeText />
      <CTASection />
    </Grid.Container>
  )
}
