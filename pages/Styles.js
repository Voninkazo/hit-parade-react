import React, { useContext } from 'react';

import {Context} from '../Context';
import HeadphoneImg from '../images/headphone.png';

function Styles() {
    const {allSongs} = useContext(Context);
    const songsStyles = allSongs.map(song => song.style);
    const allStyles = [...new Set(songsStyles)];
    const styles = allStyles.map(song => (
       <li  key={song}>
        <img src={HeadphoneImg} alt={HeadphoneImg}/>
         <button value={song}>{song}</button>
       </li>
    ))
  return (
    <ul className="style-container">
        {styles}
    </ul>
  )
}

export default Styles
