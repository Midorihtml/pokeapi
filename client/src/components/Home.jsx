import React from 'react'
import background from '../video/background.mp4'
import { VideoBackground, Start } from './styled/home'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div>
                <VideoBackground autoPlay loop muted>
                    <source src={background} type="video/mp4" ></source>
                </VideoBackground>
            </div>
            <Link to='/Main'>
                <Start>Press to Start</Start>
            </Link>

        </>
    )
}

export default Home; 
