import logo from "@/public/images/bhrsvg.svg"
import Image from "next/image"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {

    return(<>
    
    <Navbar>
        <Container>
          <Navbar.Brand href="#home" className="justify-content-center text-center">
            <Image
              src={logo}
              width="200"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /> 
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>)
}

export default Header