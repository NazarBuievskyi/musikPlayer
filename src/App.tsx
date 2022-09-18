import React, {useState} from 'react';
import {Song} from "./components/Song";
import {Player} from "./components/Player";
import './styles/app.scss'
import data from './data'
import {Library} from "./components/Library";

function App() {
    //State
    // @ts-ignore
    const [songs, setSongs] = useState(data())
    const [currentSong, serCurrentSong] = useState(songs[0])
    const [isPlaying, setIsPlaying] = useState(false)
    return (
        <div className="App">
            <Song currentSong={currentSong}/>
            <Player setIsPlaying={setIsPlaying} isPlaying={isPlaying} currentSong={currentSong}/>
            <Library songs={songs}/>
        </div>
    );
}

export default App;
