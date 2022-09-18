import React from 'react';
import {IMusic} from "../music";

type LibrarySongProps = {
    song: IMusic
}

export function LibrarySong({song}: LibrarySongProps) {
    return (
        <div className='library-container'>
            <img alt={song.name} src={song.cover}></img>
            <div className="song-description">
                <h3>{song.name}Song Name</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}