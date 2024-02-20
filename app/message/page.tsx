"use client"
import PopModal from '@/components/modals/reward'
import Header from '@/components/header'
//import Text from "@/utils/text/index.json"

export default function Home() {
 
  return (
    <>
    <div className='w-100 h-50'>
      <span className='d-none'>Survey</span>
    </div>
    <PopModal />
    </>
    
  )
}
