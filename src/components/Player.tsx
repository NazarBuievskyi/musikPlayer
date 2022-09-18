import React, {Dispatch, SetStateAction, useRef, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay, faAngleLeft, faAngleRight, faPause} from "@fortawesome/free-solid-svg-icons";
import {IMusic} from "../music";

type PlayerProps = {
    currentSong: IMusic
    setIsPlaying: any
    isPlaying: any
}


export function Player({currentSong, setIsPlaying, isPlaying}: PlayerProps) {
    //Ref
    const audioRef = useRef(null)
    //EventHandler
    const playSongHandler = () => {
        if (isPlaying) {
            // @ts-ignore
            audioRef.current.pause()
            setIsPlaying(!isPlaying)
        } else {
            // @ts-ignore
            audioRef.current.play()
            setIsPlaying(!isPlaying)
        }
    }
    const timeUpdateHandler = (e: any) => {
        const current = e.target.currentTime
        const duration = e.target.duration
        setSongInfo({...songInfo, currentTime: current, duration})
    }
    const getTime = (time: number) => {
        return (
            Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
        )
    }
    const dragHandler = (e: any) => {
        // @ts-ignore
        audioRef.current.currentTime = e.target.value
        setSongInfo({...songInfo, currentTime: e.target.value})
    }
    //State
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0
    })
    return (
        <div className='player'>
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input min={0} max={songInfo.duration} onChange={dragHandler} value={songInfo.currentTime}
                       type="range"/>
                <p>{getTime((songInfo.duration))}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className='skip-back' size='2x' icon={faAngleLeft}/>
                <FontAwesomeIcon onClick={playSongHandler} className='play' size='2x'
                                 icon={isPlaying ? faPause : faPlay}/>
                <FontAwesomeIcon className='skip-forward' size='2x' icon={faAngleRight}/>
            </div>
            <audio onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler} ref={audioRef}
                   src={currentSong.audio}></audio>
        </div>
    )
}