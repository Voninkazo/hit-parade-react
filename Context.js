import React,{useEffect,useState} from 'react';

import songs from './songs';
const Context = React.createContext();


function ContextProvider(props) {
    const [allSongs,setAllSongs] = useState([]);
    const [cartSongs,setCartSongs] = useState([]);

    function addToCart(song) {
        const newCartSongs = [...cartSongs,song];
        setCartSongs(newCartSongs);
    }

    function removeSongs(songId) {
        const filteredSongs = cartSongs.filter(song => song.id !== songId);
        setCartSongs(filteredSongs);
    }

    useEffect(() => {
        setAllSongs(songs);
        console.log(allSongs);
      })
  return (
    <Context.Provider value={{allSongs,cartSongs,addToCart,removeSongs}}>
        {props.children}
    </Context.Provider>
  )
}

export {ContextProvider,Context};
