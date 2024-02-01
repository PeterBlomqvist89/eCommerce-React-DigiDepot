import { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import CartItem from '../components/CartItem';
import axios from 'axios';
import { Modal } from '../components/Modal';

const Checkout = () => {

    const { cart, clearCart, total, itemQuantity } = useContext(CartContext);
   
    const [isModalOpen, setIsModalOpen] = useState(false);
    const onBack = () => {
      setIsModalOpen(false);
    };

    const handleCheckout = async () => {
      try {
        const products = cart.map((item) => ({
          productId: item._id,
          quantity: item.quantity,
        }));
  

        const orderData = {
          products: products,
        };
  
        const response = await axios.post('https://js2-ecommerce-api.vercel.app/api/orders', orderData);
  
    
        if (response.status === 201) {
          console.log('Order skickad framgångsrikt');
          setIsModalOpen(true);
        } else {
          console.error('Misslyckades med att skicka order');
        }
      } catch (error) {
        console.error('Ett fel inträffade vid skickande av order', error);
      }
    };




    return (
        <div>
            <div className='sidebarCheckout'>
                <div className="shoppingCartCheckout">Checkout: {`(${itemQuantity})`}</div>
                <div>{cart.map((item) => (
                    <CartItem item={item} key={item._id} />
                ))}</div>
                <div className='sidebarBottom'>
                    <div className='sidebarTotalText'>
                        <span>Total:</span>{total}kr
                    </div>
                    <button className='btnCheckout' onClick={handleCheckout}>Click here to confirm your order!</button>
                    <div><i onClick={clearCart} className="fa-solid fa-trash-can"></i></div>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onBack={onBack} />
        </div>
    );
};

export default Checkout;

