import React, { useEffect, useState } from 'react'
import { ShoppingBag } from 'components/AllSvgIcon'
import Button from 'components/Button/Button'
import { useCart, CartProvider, getLocalCart } from 'contexts/cart/use-cart';
import Router from 'next/router';

const CartButton = () => {
  const { 
    // isOpen, 
    cartItemsCount, 
    toggleCart, 
    // calculatePrice 
    // getCartItemsCount,
    state,
    rehydrateLocalState,
    items,
    refreshCart
  } = useCart();
  const handleClick = ()=>{
    refreshCart()
    const path = Router.router.pathname;
    toggleCart()
    if(path === '/' || path === '/product/[slug]')return;
    Router.push('/');
  }
  useEffect(()=>{
    // rehydrateLocalState({count: getLocalCart().length})
    // console.log(getLocalCart())
  },[])
  
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
        pointer={state.items.length}
        intlButtonId="qwerty"
        />
    </CartProvider>
  )
}
export default (CartButton);