import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemData from './ItemData';



const Cards = ({handleClick}) => {
   
    const [data, setData] = useState(ItemData); 

  return (
    <div className='container mt-3'>
      <h2 className='text-center'> Add to Cart</h2>
      <div className='row d-flex justify-content-center align-items-center'>
     {
        data.map((element,id) =>{
            return (
                <>
            <Card style={{ width: '22rem', border:"none" }} className="mx-2 mt-4 card_style">
               <Card.Img variant="top" src={element.img} style={{height:"16rem"}} className="mt-3"/>
                 <Card.Body>
                  <Card.Title>{element.productName}</Card.Title>
                 <Card.Text>
               price: ${element.price}
             </Card.Text>
             <div className='button_div d-flex justify-content-centre'></div>
             <Button variant="primary" className='col-lg-12' onClick={()=>handleClick(element)}>Add to Cart</Button>
             </Card.Body>
            </Card>
                </>
            )
        })
     }
      
      </div>
    </div>
  )
}

export default Cards
