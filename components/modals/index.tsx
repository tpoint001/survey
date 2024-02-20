import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useRouter } from "next/navigation";


function PopModal() {

  const router = useRouter()
  //const {message, show} = prop
  const [show, setShow] = useState(true);

  const handleClose = () => {
   
    setShow(false);
    router.push("/survey")

  
  }
  //text-bg-dark b


  return (
    <>
   <div className="modal">
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className="justify-content-center text-center">
          <h3 className='text-white'>Binance User Survey</h3>
        <h5 className='text-secondary'>    
  Welcome to Binance.com information gathering survey.
In order to better serve you, we would like to learn more about your experience in Crypto and with Binance to help us serve you better.
Complete the survey and stand a chance to enter a reward pool of <strong className='text-secondary'>$500,000</strong>.
</h5>
<p> <button className="btn btn-warning btn-lg" onClick={handleClose}> Start Survey</button></p>
        </Modal.Body>
      </Modal>
      </div>
    </>
  );
}

export default PopModal;