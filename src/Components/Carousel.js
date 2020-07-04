import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

function Carousel1() {


    return (
        <div className="">
            <Carousel >
                <div>
                    <img src="../Assets/image1.jpg" alt="Forest"/>
                    <p className="legend">Legend 1</p>
                </div>
                
                <div>
                    <img src="../assets/image2.jpg" alt="Forest"/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="../assets/image3.jpg" alt="Forest"/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    )
}

export default Carousel1
