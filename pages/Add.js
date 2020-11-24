import React, { useContext} from 'react';
import styled from 'styled-components';

import {Context} from '../Context';


const FormStyles = styled.form`
	display: grid;
	grid-template-columns: 300px;
	gap: 10px;
	input,
	select,
	textarea {
		height: 30px;
		background: #bae8e8;
		border: none;
		padding: 0 1rem;
		border-radius: 5px;
	}
	input::placeholder {
		/* Chrome, Firefox, Opera, Safari 10.1+ */
		color: #272343;
		opacity: 1; /* Firefox */
	}
`;


function AddForm() {
    const {setAllSongs,styles} = useContext(Context);

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
    <div>
      <h1>🌚 Add a new song</h1>
    <FormStyles onSubmit={submitForm}>
        <input 
          type="text" 
          name="title"
          placeholder="Title"  
          required
        />

        <input 
          type="text" 
          name="artist" 
          placeholder="Artist" 
          required
        />

        <input 
          type="number" 
          name="price" 
          placeholder="Price" 
          required
        />

        <select 
          name="style"
          required 
        >
					{styles.map(style => (
						<option key={style} value={style}>
							{style}
						</option>
					))}
				</select>

        <textarea 
          name="lyrics" 
          placeholder="Lyrics" 
          cols="30" rows="10" 
          required
        >
        </textarea>

        <button type="submit">Add</button>
    </FormStyles>
    </div>
  )
}

export default AddForm
