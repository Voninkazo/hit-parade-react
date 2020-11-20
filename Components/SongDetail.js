import React, { useContext } from 'react';
import {useParams, Link} from 'react-router-dom';
import {Context} from '../Context';

function SongDetail() {
    const {songWithDetail,showDetail} = useContext(Context);
    console.log(songWithDetail)
  return (
    <>
    {showDetail && 
    <>
        <h3>{songWithDetail.artist}: {songWithDetail.title}</h3>
        <div className="song-detail">
        <h4>Lyrics</h4>
        <p>{songWithDetail.lyrics}</p>
        </div>
        <Link to="/songs">Homepage</Link>
    </>
    }
    </>
  )
}

export default SongDetail;
