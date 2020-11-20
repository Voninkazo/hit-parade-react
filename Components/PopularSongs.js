import React,{useEffect,useState} from 'react';
import favoriteBorder from '../icons/favorite.svg';
import  favorite from '../icons/favorite-fill.svg';
import arrowUp from '../icons/arrow-up.svg';
import arrowDown from '../icons/arrow-down.svg';
import more from '../icons/more.svg';
import addCartIcon from '../icons/add-cart.svg';
import cartIcon from '../icons/shopping-cart-fill.svg';
import songs from '../songs';


function PopularSongs() {
    const [allSongs,setAllSongs] = useState([]);

    const theSongs =
        allSongs.map(song => {
         return(
            <div key={song.id} className="song-container">
                <ul>
                    <li><img src={song.isFavorite ? favorite : favoriteBorder} className="favorite-line" /></li>
                    <li>
                        <p className="title">{song.title}</p>
                        <span className="artist">{song.artist}</span>
                    </li>
                    <li className="list-items-container">
                        <span>{song.likes}</span>
                        <img src={arrowUp} className="icon-like" />
                    </li>
                    <li className="list-items-container">
                        <span>{song.dislikes}</span>
                        <img src={arrowDown} className="icon-dislike" />
                    </li>
                    <li><img src={addCartIcon} className="icon-add-cart" /></li>
                    <li><img src={more} className="icon-more" /></li>
                </ul>
            </div>
         )
       })

    useEffect(() => {
      setAllSongs(songs);
      console.log(allSongs);
    })
  
        return(
           <div>{theSongs}</div>
        )
}

export default PopularSongs
