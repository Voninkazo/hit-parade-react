import React,{useEffect,useState} from 'react';
import songs from './songs';
const Context = React.createContext();


function ContextProvider(props) {
console.log(songs)

    const [allSongs,setAllSongs] = useState([]);
    const [cartSongs,setCartSongs] = useState([]);
    const [songWithDetail,setSongWithDetail] = useState({});
    const [showDetail,setShowDetail] = useState(false);
    function addToCart(song) {
        const newCartSongs = [...cartSongs,song];
        setCartSongs(newCartSongs);
    }

    function showSongDetail(song) {
        // const newCartSongs = [...cartSongs,song];
        setSongWithDetail(song);
        setShowDetail(true);
    }

    function removeSongs(songId) {
        const filteredSongs = cartSongs.filter(song => song.id !== songId);
        setCartSongs(filteredSongs);
    }

    useEffect(() => {
        setAllSongs(songs);
      },[])
  
 
  return     <Context.Provider value={{allSongs,cartSongs,addToCart,removeSongs,showSongDetail,songWithDetail,showDetail}}>
        {props.children}
    </Context.Provider>
  
}

export {ContextProvider,Context};
