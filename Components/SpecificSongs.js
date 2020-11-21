import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import {Context} from '../Context';
import HeadphoneImg from '../images/headphone.png';

function SpecificSongs() {
    const { style } = useParams()
    const {allSongs} = useContext(Context);
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
                <div key={song.id} className="card--style">
                    <p className="title">{song.title}</p>
                    <p className="artist">{song.artist}</p>
                </div>
               ))
           }
    </div>
  )
}

export default SpecificSongs
