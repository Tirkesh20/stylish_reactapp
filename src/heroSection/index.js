import React from 'react';

const HeroSection=()=>{
    return(
        <HeroContainer>
            <HeroBg>
                <videoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
        </HeroContainer>
    )
}
