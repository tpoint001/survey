"use client"
import { useEffect } from 'react'
import Header from '@/components/header'
import { Connect } from '@/components/connect'
import { Hydrate } from '@/components/hydrate'
//import Text from "@/utils/text/index.json"

export default function Home() {
 
  return (
    <div>
    <Header />
    <Hydrate>
    <Connect />
    </Hydrate>
  
   
    </div>
    
  )
}
