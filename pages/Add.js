import React, { useContext, useEffect, useState } from 'react';
import {Context} from '../Context';

function AddForm() {
    const {allSongs,setAllSongs} = useContext(Context);
    const [newSongs,setNewSong] = useState({});

    function submitForm(e) {
        e.preventDefault();
        const {title,artist,price,style,lyrics} = e.target;
         const newSong ={
            title : title.value,
            artist : artist.value,
            likes : 0,
            dislikes : 0,
            id : Date.now(),
            style : style.value,
            isFavorite : false,
            price : price.value,
            lyrics : lyrics.value,
            isAdded : false
        }
        setNewSong(newSong)
        e.target.reset();
    }

    useEffect(() => {
        if(!newSongs.title) return null;
        setAllSongs(prev => [...prev,newSongs]);
        console.log(newSongs);
    },[newSongs])



  return (
    <form onSubmit={submitForm}>
        <input type="text" placeholder="Title" name="title"/>
        <input type="text" placeholder="Artist" name="artist"/>
        <input type="number" placeholder="Price" name="price"/>
        <input type="text" placeholder="Style" name="style"/>
        <textarea name="lyrics" placeholder="Lyrics" cols="30" rows="10"></textarea>
        <button type="submit">Add</button>
    </form>
  )
}

export default AddForm
