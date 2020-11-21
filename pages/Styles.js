import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import {Context} from '../Context';
import HeadphoneImg from '../images/headphone.png';

function Styles() {
    const {allSongs} = useContext(Context);
    const songsStyles = allSongs.filter(song => song.style);
    const allStyles = [...new Set(songsStyles)];
    const styles = allStyles.map(song => (
            <li key={song.id}>
               <Link to={`/styles/${song.style}`}  >
                <img className="img" src={HeadphoneImg} alt={HeadphoneImg}/>
                <button className="style" value={song.style}>{song.style}</button>
                </Link>
            </li>
    ))
  return (
    <ul className="style-container">
        {styles}
    </ul>
  )
}


// Styles.propTypes ={
//   songsStyles: PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//       artist: PropTypes.string,
//       lyric: PropTypes.string
//   })
// }

export default Styles
