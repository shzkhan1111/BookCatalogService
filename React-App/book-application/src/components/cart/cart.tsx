import { useSelector, useDispatch }  from "react-redux";
import { removeItemFromCart , clearCart  } from "../../store/cartSlice";
import  OrderApiService  from "../../services/order.service";
import { Book } from "../../models/books";

const Cart = () => {   

    const cartItems = useSelector((state: { cart: { items: Book[] } }) => state.cart.items);
    const dispatch = useDispatch();
     
    console.log("writing cart items");      
    console.log(cartItems);

    const handleCheckout = async () => {
        let creditcardNo = prompt("Enter your credit card number");
        if(creditcardNo){
            //call api for check put and hit order contrroller
            //order service
            console.log("cartItems");
            console.log(cartItems);
            
            const result = await OrderApiService.placeOrder(cartItems  , creditcardNo);
            if(result){
                alert("Thank you for your purchase");
                dispatch(clearCart());
            }
            else{
                alert("Failed to place order");
            }
        }

    };

    const totalPrice = cartItems.reduce( (total , item) => total + (item.price), 0);
    return(
        <div className="cart">
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 && <p>Your cart is empty</p>}
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        <div>
                            <strong>{item.title}</strong> - ${item.price}
                        </div>
                        <div>
                            <button onClick={() => dispatch(removeItemFromCart(item))}>remove from cart</button>
                        </div>
                    </li>
                ))}
            </ul>
            <button onClick={handleCheckout}>Checkout</button>
            <h3>Total Price ${totalPrice.toFixed(2)}</h3>
            <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
            
         </div>
    );
}


export default Cart;