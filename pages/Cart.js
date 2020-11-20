import React, { useContext } from 'react';

import {Context} from '../Context';
import CartItem from '../Components/CartItem';

function Cart() {
    const {cartSongs} = useContext(Context);
    const cartSongElements = cartSongs.map(song => (
        <CartItem key={song.id} song={song} />
    ))

    const totalAmount = Number(200 * cartSongs.length);
    console.log(totalAmount);

  return (
    <div>
        {cartSongElements}
        {cartSongs.length > 0 && (
          <div className="buying-container">
            <button className="btn-to-buy">Buy</button>
            <p className="amount">Total: <b>{totalAmount.toLocaleString("en-Us", {style: "currency", currency: "USD"})}</b></p>
        </div>
     )
     }
    </div>
  )
}

export default Cart;
