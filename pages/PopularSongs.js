import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import favoriteBorder from '../icons/favorite.svg';
import  favorite from '../icons/favorite-fill.svg';
import arrowUp from '../icons/arrow-up.svg';
import arrowDown from '../icons/arrow-down.svg';
import more from '../icons/more.svg';
import addCartIcon from '../icons/add-cart.svg';
import cartIcon from '../icons/shopping-cart-fill.svg';

import {Context} from '../Context';

function PopularSongs() {
    const {allSongs,
        cartSongs,
        addToCart, 
        removeSongs,
        showSongDetail,
        toggleFavorite,
        increaseDislikes,
        increaseLikes
    } = useContext(Context);

    const sortedSongs =  
        allSongs.sort((a,b) =>{ const ratio1 = a.likes - a.dislikes;
        const ratio2 = b.likes - b.dislikes;
        return ratio2 - ratio1;
        })

    const theSongs =
        sortedSongs.map(song => {
            function cartFunction() {
                if(cartSongs.some((cartItem => cartItem.id === song.id))) {
                    return <img 
                    src={cartIcon} 
                    className="icon-add-cart" 
                    onClick={() => removeSongs(song.id)}
                     />
                }
                else{
                    return <img 
                    src={addCartIcon} 
                    className="icon-add-cart" 
                    onClick={() => addToCart(song)}
                     />
                }
            }
         return(
            <div key={song.id} className="song-container">
                <ul>
                    <li>
                        <img 
                        src={song.isFavorite ? favorite : favoriteBorder} 
                        onClick={() => toggleFavorite(song.id)} 
                        className="favorite-line" />
                    </li>
                    <li>
                        <p className="title">{song.title}</p>
                        <span className="artist">{song.artist}</span>
                    </li>
                    <li className="list-items-container">
                        <span>{song.likes}</span>
                        <img src={arrowUp} onClick={() => increaseLikes(song.id)} className="icon-like" />
                    </li>
                    <li className="list-items-container">
                        <span>{song.dislikes}</span>
                        <img src={arrowDown} onClick={() => increaseDislikes(song.id)} className="icon-dislike" />
                    </li>
                    <li>
                        {cartFunction(song.id)}
                    </li>
                    <li>
                        <Link to={`/songs/lyrics`}>
                            <img 
                            onClick={() => showSongDetail(song)} 
                            src={more} 
                            className="icon-more" />
                        </Link>
                    </li>
                </ul>
            </div>
         )
       })

        return(
           <div>{theSongs}</div>
        )
}

export default PopularSongs
