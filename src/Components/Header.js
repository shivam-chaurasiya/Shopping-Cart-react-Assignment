import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


const Header = ({size, setShow}) => {

  

  return (
    <Navbar className='bg-success' style={{height:"60px"}}>
    <Container>
     
    <span className="my_shop" onClick={()=>setShow(true)}>
              Home
            </span>
      
        <div className="cart" onClick={()=>setShow(false)}>
                <span>
                    <i className="fas fa-cart-plus"></i>
                </span>
                <span>{size}</span>
            </div>
     
    </Container>

    
    </Navbar>
  )
}

export default Header
