import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import CartItem from '../components/CartItem';

const Checkout = () => {

    const { cart, clearCart, total, itemQuantity } = useContext(CartContext);


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
                    <button className='btnCheckout'>Click here to confirm your order!</button>
                    <div><i onClick={clearCart} className="fa-solid fa-trash-can"></i></div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;

