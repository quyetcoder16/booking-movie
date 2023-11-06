import { Carousel } from 'antd';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCarouselAction } from '../../../../redux/actions/CarouselAction';

const contentStyle = {
    margin: 0,
    height: '600px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    backgroundSize: 'cover',
    backgroundRepeat: "no-repeat",
    backgroundPosition: 'center',
};

export default function HomeCarousel(props) {

    const { arrImg } = useSelector(state => state.CarouselReducer);
    // console.log(arrImg);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCarouselAction());
    }, []);

    const onChange = (currentSlide) => {
        // console.log(currentSlide);
    };

    const renderCarousel = () => {
        return arrImg?.map((item, index) => {
            return (<div key={index}>
                <div style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}>
                    <img src={item.hinhAnh} className="w-full opacity-0" alt="123" />
                </div>
            </div>)
        })
    }

    return (
        <Carousel afterChange={onChange}>
            {renderCarousel()}
        </Carousel>
    )
}
