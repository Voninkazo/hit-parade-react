import React, { useContext} from 'react';
import styled from 'styled-components';

import {Context} from '../Context';

const AddFormContainer = styled.div`
  h2 {
    font-weight: normal;
    font-size: 64px;
    line-height: 78px;
    color: #000000;
    margin:0;
    padding-top:42px;
    padding-bottom: 62px;
  }
`

const FormStyles = styled.form`
  display: flex;
  flex-direction: row;
  gap:70px;
  align-items: flex-start;
  ul {
    display:flex;
    flex-direction:column;
    margin: 0;
    padding: 0;
    list-style: none;
}

	input,
	select,
	textarea {
		background-color: #bae8e8;
		border: none;
    border-radius: 5px;
    padding-top:12px;
    padding-bottom:10px;
    padding-left:47px;
    font-size: 36px;
    line-height: 44px;
    color: #000000;
    width: 561px;
  }
 li:not(:nth-of-type(1)) {
  margin-top:16px;
 }
 textarea {
  height: 374px;
 }

 select {
   width:100%;
 }

 button {
  font-size: 64px;
  line-height: 78px;
  color: #000000;
  padding-top:20px;
  padding-left: 43px;
  padding-bottom:22px;
  padding-right:22px;
  background-color:#FFD803;
  border: none;
  cursor:pointer;
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
    <AddFormContainer>
      <h2>🌚 Add a new song</h2>
    <FormStyles onSubmit={submitForm}>
      <ul>
        <li>
          <input 
            type="text" 
            name="title"
            placeholder="Title"  
            required
          />
        </li>

        <li>
          <input 
            type="text" 
            name="artist" 
            placeholder="Artist" 
            required
          />
        </li>
 
        <li>
          <input 
            type="number" 
            name="price" 
            placeholder="Price" 
            required
          />
        </li>

        <li>
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

        </li>

        <li>
          <textarea 
            name="lyrics" 
            placeholder="Lyrics" 
            // cols="30" rows="10" 
            required
          >
          </textarea>
        </li>
      </ul>

      <button type="submit">Add</button>
    </FormStyles>
    </AddFormContainer>
  )
}

export default AddForm
