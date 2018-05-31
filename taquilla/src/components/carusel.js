import React from "react";
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel, } from 'react-responsive-carousel';




class Carusel extends React.Component {
    constructor() {
        super()
    }

    render() {

       

        return (
            
            <Carousel showThumbs={false} showStatus={false}  stopOnHover autoPlay interval={5000} infiniteLoop dynamicHeight  >
                <div>
                    <img style={{ marginTop: -100}} src="/img/icons/22.jpg" />
                                    
                </div>
                <div>
                    <img style={{ marginTop: -100 }} src="/img/icons/21.jpg" />
                </div>
                <div>
                    <img style={{ marginTop: -100, }}src="/img/icons/20.jpg" />
                
                 
                </div>
               
            </Carousel>
            
        );
        return null
    }
}

export default Carusel;
