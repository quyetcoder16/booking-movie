import { Fragment } from "react";
import { Route } from "react-router-dom"
import Header from "./Layouts/Header/Header";
import HomeCarousel from "./Layouts/HomeCarousel/HomeCarousel";


export const HomeTemplate = (props) => {
    const { Component, ...resProps } = props;
    return (<Route {...resProps} render={(propsRoute) => {
        return (<Fragment >

            <Header {...propsRoute} />
            <HomeCarousel {...propsRoute} />

            <Component {...propsRoute} />



            <footer className="bg-black h-10 text-white">
                Đây là footer homepage
            </footer>
        </Fragment >);
    }} />);
}