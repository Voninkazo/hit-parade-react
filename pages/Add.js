import React, { useContext} from 'react';
import {Context} from '../Context';

function AddForm() {
    const {setAllSongs} = useContext(Context);

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
        e.target.reset();
        setAllSongs(prev => [...prev,newSong])
    }

  return (
    <form onSubmit={submitForm}>
        <input type="text" placeholder="Title" name="title" required/>
        <input type="text" placeholder="Artist" name="artist" required/>
        <input type="number" placeholder="Price" name="price" required/>
        <input type="text" placeholder="Style" name="style" required/>
        <textarea name="lyrics" placeholder="Lyrics" cols="30" rows="10" required></textarea>
        <button type="submit">Add</button>
    </form>
  )
}

export default AddForm
