import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


const Header = ({size, setShow}) => {

  

  return (
    <Navbar className='bg-success' style={{height:"60px"}}>
    <Container>
     
    <span className="my_shop" onClick={()=>setShow(true)}>
             <h1 style={{cursor:'pointer',color:'white'}}> Home</h1>
            </span>
      
        <div className="cart" onClick={()=>setShow(false)}>
                <span >
                <i class="fa fa-shopping-cart" aria-hidden="true" style={{fontSize:"2rem",color:'white'}}></i>
                </span>
                <span style={{height:"25px",width:"25px",color:"red"}}>{size}</span>
            </div>
     
    </Container>

    
    </Navbar>
  )
}

export default Header
