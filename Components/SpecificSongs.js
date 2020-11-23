import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom';
import {Context} from '../Context';
import HeadphoneImg from '../images/headphone.png';

function SpecificSongs() {
    const { style } = useParams()
    const {allSongs,showSongDetail} = useContext(Context);
    console.log(style);


    const newSong = allSongs.filter(song => song.style === style);
    console.log(newSong)

  return (
    <div>
        <div className="style--name">
            <img className="img" src={HeadphoneImg} alt={HeadphoneImg}/>
            <p className="style">{style}</p>
        </div>
           {
               newSong.map(song => (
                <Link to={`/songs/lyrics`} key={song.id}>
                  <div style={{cursor:"pointer"}} className="card--style" onClick={() => showSongDetail(song)}>
                      <p className="title">{song.title}</p>
                      <p className="artist">{song.artist}</p>
                  </div>
                </Link>
               ))
           }
    </div>
  )
}

export default SpecificSongs
