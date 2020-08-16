import React from 'react'
import { ShoppingBag } from 'components/AllSvgIcon'
import Button from 'components/Button/Button'
import { useCart, CartProvider } from 'contexts/cart/use-cart';
import Router from 'next/router';

const CartButton = () => {
  const { 
    // isOpen, 
    cartItemsCount, 
    toggleCart, 
    // calculatePrice 
    getCartItemsCount
  } = useCart();
  const handleClick = ()=>{
    toggleCart()
    if(location.pathname !== '/') {
      Router.push('/');
    }
    
  }
  // console.log(getCartItemsCount)     
  return (
    <CartProvider>
      <Button
        className='product-cart'
        onClick={handleClick}
        style={{padding:"15px", marginRight:"15px"}}
        size="small"
        icon={<ShoppingBag/>}
        // pointer={cartItemsCount}
        pointer={getCartItemsCount}
        intlButtonId="qwerty"
        />
    </CartProvider>
  )
}
export default (CartButton);