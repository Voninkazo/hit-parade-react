import React,{useEffect,useState} from 'react';
import songs from './songs';
const Context = React.createContext();


function ContextProvider(props) {
console.log(songs)

    const [allSongs,setAllSongs] = useState([]);
    const [cartSongs,setCartSongs] = useState([]);
    const [songWithDetail,setSongWithDetail] = useState({});
    const [showDetail,setShowDetail] = useState(false);
    
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
        // const newCartSongs = [...cartSongs,song];
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

function toggleAddToCart(id) {
    console.log(id)
    const newSongArray = allSongs.map(song => {
    if(song.id === id) {
        // update this element
        console.log(!song.isAdded);
        return{
            ...song,
            isAdded: !song.isAdded,
        }
    };
    return {...song};
    })
    setAllSongs(newSongArray);
}

    useEffect(() => {
        setAllSongs(songs);
      },[])

  return <Context.Provider value={
      {allSongs,
      setAllSongs,
      cartSongs,
      addToCart,
      removeSongs,
      showSongDetail,
      songWithDetail,
      showDetail,
      toggleFavorite,
      toggleAddToCart,
      increaseDislikes,
      increaseLikes,
}
      }>
        {props.children}
    </Context.Provider>
  
}

export {ContextProvider,Context};
