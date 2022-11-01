import React, {useState} from 'react'
import Video from '../../assets/video.mp4';
import { HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper
} from './HeroSection.Elements'

const HeroSection = () => {

    const [hover, setHover ] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Discovery A Beautiful <br /> Place With Us</HeroH1>
                <HeroP>
                Come explore the paradise of nature with us, 
                you will find the best destination in the world with us.
                </HeroP>
                <HeroBtnWrapper>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection