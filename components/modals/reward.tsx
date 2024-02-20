"use client"
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import chk from "@/public/images/checkmark.svg"
import Image from "next/image"
import { useRouter , redirect} from "next/navigation";


/*
interface Props {
    sh: boolean;
}*/
function PostModal() {

  const router = useRouter()
  const [show, setShow] = useState(true);
  const handleClose = () => {
   
    setShow(false);
    console.log("Redirecting now")
    //router.push("/reward")
    //redirect("/reward")
    window.location.href = process.env.NEXT_PUBLIC_Domain +"reward"
  }
  return (
    <>
      <Modal show={show} onHide={handleClose} className="rounded-3" centered>
        <Modal.Body className="justify-content-center text-center">
          <p>
          <Image src={chk} alt="Check mark" height={100} width={100} />
          </p>
        <h5 className='text-secondary'>
       
         
           Congratulations you' ve been found eligible to claim from the reward pool.
             <br />(Make sure you hold gas fee) </h5>
<p> <button className="btn btn-warning btn-lg" onClick={handleClose}> Proceed </button></p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PostModal;