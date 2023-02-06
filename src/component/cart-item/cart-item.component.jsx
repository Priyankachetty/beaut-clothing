import './cart-item.style.jsx';
import { ItemDetails, CartItemContainer, ItemImage, ItemName} from './cart-item.style';

const CartItem = ({cartItem}) =>{
    const {name, imageUrl, price, quantity} = cartItem;
    return (
        <CartItemContainer>
            <ItemImage src={imageUrl} alt={`${name}`}/>
            <ItemDetails>
                <ItemName>{name}</ItemName>
                <span className='price'>
                    {quantity} x {price}
                </span>
            </ItemDetails>
        </CartItemContainer>
    );
}

export default CartItem;