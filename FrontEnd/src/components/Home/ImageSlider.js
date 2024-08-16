
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const ImageSlider = () => {
    const style = {
        "height": "480px"
    }
    const imagestyle = {
        "height": "100%",
        "width": "100%",
        "object-fit": "cover",
    }
    const sliderBottomContent ={
        "text-align":"center",
        "padding":"20px",
        "background-color":"black",
        "color":"white",
        "font-size":"45px",
        "border-radius":"10px",
        "margin-top":"15px"
    }
    return (
        <div className="relative w-full">
            <Carousel showThumbs={false} autoPlay infiniteLoop showStatus={false}>
                <div style={style}>
                    <img src="images\imageee3.avif" alt="Slide 1" style={imagestyle} />
                </div>
                <div style={style}>
                    <img src="images\imagee4.avif" alt="Slide 2" style={imagestyle} />
                </div>
                <div style={style}>
                    <img src="images\imageee2.avif" alt="Slide 3" style={imagestyle} />
                </div>
                <div style={style}>
                    <img src="images\imageee1.avif" alt="Slide 4" style={{ "height": "490px" }} />
                </div>
                <div style={style}>
                    <img src="images\526680c7098703a28efb813d1911e253_103654_0.png" alt="Slide 5" style={imagestyle} />
                </div>
            </Carousel>
            <div className='slider-bootom-content' style={sliderBottomContent}>
                Top Rated Picks
            </div>
        </div>
    );
}

export default ImageSlider;