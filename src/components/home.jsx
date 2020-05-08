import React from 'react';
import ReactTwitchEmbedVideo from "react-twitch-embed-video";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Home = () => {
    return (
        <React.Fragment>
           
            <div class="homepage-1">
                <img src={require('../assets/splash-banner-msl-s2.webp')} alt=""/>
                <div>
                    <a href="https://twitch.tv/modernstreamersleague" target="_blank" rel="noopener noreferrer">View On Twitch</a>
                    <br/>
                    <br/>
                    <AnchorLink href='#empty'>Things</AnchorLink>
                </div>
                <div class="empty" id="empty">

            </div>
            </div>
            
            <div class="homepage-2" id="stream">
                <ReactTwitchEmbedVideo channel="modernstreamersleague" width="100%"  />
            </div>
            <div class="filler">
                stuff
            </div>
            
           
        </React.Fragment>
    )
}

export default Home;
