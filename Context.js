import React,{useEffect,useState} from 'react';
import songs from './songs';
const Context = React.createContext();


function ContextProvider(props) {
console.log(songs)

    const [allSongs,setAllSongs] = useState([]);
    const [cartSongs,setCartSongs] = useState([]);
    const [songWithDetail,setSongWithDetail] = useState({});
    const [showDetail,setShowDetail] = useState(false);

    allSongs.sort((a,b) =>{ const ratio1 = a.likes - a.dislikes;
    const ratio2 = b.likes - b.dislikes;
    return ratio2 - ratio1;
    })
    
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

function initCartSongs() {
    const lsCarSongs = JSON.parse(localStorage.getItem('cartItems'));
    if (lsCarSongs) {
        setCartSongs(lsCarSongs);
    }
}

    useEffect(() => {
        const lsAllSongs = JSON.parse(localStorage.getItem('allPhotos'));
		if (lsAllSongs) {
			// set the local storage value to state
			setAllSongs(lsAllSongs);
		} else{
            setAllSongs(songs);
        }
        initCartSongs();
      },[])

      useEffect(() => {
		if (allSongs.length > 0) {
			localStorage.setItem('allSongs', JSON.stringify(allSongs));
		}
	}, [allSongs]);
	useEffect(() => {
		if (cartSongs.length > 0) {
			localStorage.setItem('cartSongs', JSON.stringify(cartSongs));
		}
    }, [cartSongs]);

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
      increaseDislikes,
      increaseLikes,
}
      }>
        {props.children}
    </Context.Provider>
  
}

export {ContextProvider,Context};
