import React,{useEffect,useState} from 'react';
import songs from './songs';
const Context = React.createContext();


function ContextProvider(props) {
console.log(songs)

    const [allSongs,setAllSongs] = useState([]);
    const [cartSongs,setCartSongs] = useState([]);
    const [songWithDetail,setSongWithDetail] = useState({});
    const [showDetail,setShowDetail] = useState(false); 
    const [styles,setStyles] = useState(['Pop', 'Rap', 'Reggae', 'RNB', 'Slow', 'Rap & Rock', 'Jazz', 'Pop & Rock'])
    
    function increaseLikes(id) {
        const increasedVotes = allSongs.map(item => {
            if(item.id === id) {
               return {
                   ...item,
                    likes: item.likes + 1,
               }
            }
            return item;
        })
        setAllSongs(increasedVotes)
    }

    function increaseDislikes(id) {
        const increasedVotes = allSongs.map(item => {
            if(item.id === id) {
               return {
                   ...item,
                    dislikes: item.dislikes + 1,
               }
            }
            return item;
        })
        setAllSongs(increasedVotes)
    }

    function addToCart(song) {
        const newCartSongs = [...cartSongs,song];
        setCartSongs(newCartSongs);
    }

    function showSongDetail(song) {
        setSongWithDetail(song);
        setShowDetail(true);
    }

    function removeSongs(songId) {
        const filteredSongs = cartSongs.filter(song => song.id !== songId);
        setCartSongs(filteredSongs);
    }

    function toggleFavorite(id) {
    console.log(id)
    const newSongArray = allSongs.map(song => {
    if(song.id === id) {
        // update this element
        console.log(!song.isFavorite);
        return{
            ...song,
            isFavorite: !song.isFavorite,
        }
    };
    return {...song};
    })
    setAllSongs(newSongArray);
}

function emptyCart() {
    setCartSongs([]);
}

useEffect(() => {
    const lsSongs = JSON.parse(localStorage.getItem('allSongs'));
    lsSongs ? setAllSongs(lsSongs) : setAllSongs(songs);

    const lsCartSongs =JSON.parse(localStorage.getItem('cartSongs'));
    lsCartSongs && setCartSongs(lsCartSongs);

},[])

useEffect(() => {
    localStorage.setItem('allSongs', JSON.stringify(allSongs));
}, [allSongs]);

useEffect(() => {
    localStorage.setItem('cartSongs', JSON.stringify(cartSongs));
}, [cartSongs]);

  return <Context.Provider value={
      {allSongs,
      setAllSongs,
      styles,
      cartSongs,
      addToCart,
      removeSongs,
      showSongDetail,
      songWithDetail,
      showDetail,
      toggleFavorite,
      increaseDislikes,
      increaseLikes,
      emptyCart,
}
      }>
        {props.children}
    </Context.Provider>
  
}

export {ContextProvider,Context};
