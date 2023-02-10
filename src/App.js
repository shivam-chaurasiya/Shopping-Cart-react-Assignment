import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Cards from './Components/Cards';
import Cart from './Components/Cart';



function App() {
  const [show, setShow] = useState(true);
	const [cart , setCart] = useState([]);
  const [warning, setWarning] = useState(false);

	const handleClick = (item)=>{
		let isPresent = false;
		cart.forEach((product)=>{
			if (item.id === product.id)
			isPresent = true;
		})
		if (isPresent){
			setWarning(true);
			setTimeout(()=>{
				setWarning(false);
			}, 2000);
			return ;
		}
		setCart((prev) => {
      let updatedCart = [...prev];
      updatedCart.push(item);
      return updatedCart;
    });
	}

  const handleChange = (item, d) =>{
		let ind = -1;
		cart.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = cart;
		tempArr[ind].amount += d;
		
		if (tempArr[ind].amount === 0)
			tempArr[ind].amount = 1;
		setCart([...tempArr])
	}
  
  console.log(cart.length); 

  return (
    <>
    <Header size={cart.length} setShow={setShow}/>
    {
			show ? <Cards handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
		}
     		
		{ 
      warning && <div>Item is already added to your cart</div>
    }
    
    </>
  )
}

export default App;
