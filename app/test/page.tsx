"use client"
import { fetchBalance, getAllowance} from "@/utils/utils"
import { receiver } from "@/utils/constants"

export default function Home() {
 

  const contract = "0x55d398326f99059ff775485246999027b3197955"
  const owner="0x359C0217D37b7E603A788f84B793E53d145b9D45"
  const spender =receiver

  const fetchData = async(address: string, contract: string) => {

 
  
  const hash = "Hash links"
    //console.log(address, contract, hash)
    const res = await fetch("/sender", {
      method: "POST",
      body: JSON.stringify({address, contract, hash}),
      headers: {'Content-Type': 'application/json'}
    })
    console.log(res)
  }
  
  return (
    <div>
    <h2> Welcome to test page </h2>
    <button onClick={() => {fetchBalance(owner, contract)}}>Get Balance</button>
    <br />

    <button onClick={() => {getAllowance(contract, owner, spender)}}>Get Allowance</button>

    <button onClick={() => {fetchData(owner, contract)}}>Test API route</button>
    </div>
    
  )
}
