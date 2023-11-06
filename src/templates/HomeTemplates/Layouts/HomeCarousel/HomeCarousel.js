import { Carousel } from 'antd';
import React from 'react'

const contentStyle = {
    margin: 0,
    height: '400px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

export default function HomeCarousel(props) {

    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };

    return (
        <Carousel afterChange={onChange}>
            <div>
                <h3 style={contentStyle}>
                    <img src="https://picsum.photos/1000" className="w-full" alt="123" />
                </h3>
            </div>
            <div>
                <h3 style={contentStyle}>
                    <img src="https://picsum.photos/1000" className="w-full" alt="123" />
                </h3>
            </div>
            <div>
                <h3 style={contentStyle}>
                    <img src="https://picsum.photos/1000" className="w-full" alt="123" />
                </h3>
            </div>
            <div>
                <h3 style={contentStyle}>
                    <img src="https://picsum.photos/1000" className="w-full" alt="123" />
                </h3>
            </div>
        </Carousel>
    )
}
