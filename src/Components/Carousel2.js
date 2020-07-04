import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

function Carousel2() {

    const AutoplaySlider = withAutoplay(AwesomeSlider);

    return (
        <div className="w-11/12 mx-auto h-auto my-12 md:w-full">
            <AutoplaySlider animation="cubeAnimation"  play={true} cancelOnInteraction={false} interval={6000}>
                <div className="text-red-800 text-4xl">Hello</div>
                <div className="bg-blue-600">2</div>
                <div className="bg-yellow-600">3</div>
                <div className="bg-red-600">4</div>
            </AutoplaySlider>
        </div>
    )
}

export default Carousel2
