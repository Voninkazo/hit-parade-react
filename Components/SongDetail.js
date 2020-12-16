import React, { useContext } from 'react';
import {Link, useParams} from 'react-router-dom';
import {Context} from '../Context';

function SongDetail() {
    const {allSongs} = useContext(Context);
 
    const {id} = useParams();
    const songWithDetail = allSongs.find(song => song.id == id);
    console.log(id)
    console.log(songWithDetail)
  return (
      <>
        <h3>{songWithDetail?.artist}: {songWithDetail?.title}</h3>
        <div className="song-detail">
        <h4>Lyrics</h4>
        <p>{songWithDetail?.lyrics}</p>  
        </div>
        <Link to="/">Homepage</Link>
      </>
  )
}

export default SongDetail;
