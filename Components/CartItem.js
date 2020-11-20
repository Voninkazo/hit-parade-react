import React, { useContext } from 'react';
import deleteIcon from '../icons/delete.svg';
import {Context} from '../Context';

function CartItem({song}) {
    const {removeSongs} = useContext(Context);
  return (
    <div className="song-container">
      <ul>
          <li><img onClick={() => removeSongs(song.id)} src={deleteIcon} alt=""/></li>
          <li>
            <p className="title">{song.title}</p>
            <span className="artist">{song.artist}</span>
          </li>
        <li className="price">{song.price}Ar</li>
      </ul>
    </div>
  )
}

export default CartItem
