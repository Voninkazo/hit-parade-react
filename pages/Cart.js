import React, { useContext, useState,useEffect } from 'react';
import styled from 'styled-components';

import {Context} from '../Context';
import CartItem from '../Components/CartItem';

const StyleConatiner = styled.div`
text-align : center;
padding-top: 50px;
p{
  font-size: 25px;
  font-weight: bold;
}
`

function Cart() {
    const {cartSongs,emptyCart} = useContext(Context);
    const [total,setTotal] = useState(0);

    useEffect(() => {
      const newTotal = cartSongs.reduce((total, song) => {
        total += song.price;
        return total;
      }, 0);
      setTotal(newTotal);
    }, [cartSongs]);

    const cartSongElements = cartSongs.map(song => (
        <CartItem key={song.id} song={song} />
    ))

    function completeOrder() {
      // show the price somewhere (alert or console)
      alert(`THANK YOU FOR YOUR ORDER. PLEASE PAY : ${total} Ar`);
      // empty the cart
      emptyCart();
    }

  return (
    <div>
        {cartSongElements}
        {cartSongs.length > 0 ? (
          <div className="buying-container">
             <p>You have chosen <b>{cartSongs.length}</b> songs</p>
            <p className="amount">Total: <b>{total} Ar</b></p>
            <button className="btn-to-buy" onClick={completeOrder}>Buy</button>
      </div>
     )
     :
     <StyleConatiner>
       <p>This page is empty👌</p>
     </StyleConatiner>
     }
    </div>
  )
}

export default Cart;
