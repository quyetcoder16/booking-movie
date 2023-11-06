import { Fragment } from "react";
import { Route } from "react-router-dom"
import Header from "./Layouts/Header/Header";
import HomeCarousel from "./Layouts/HomeCarousel/HomeCarousel";
import Footer from "./Layouts/Footer/Footer";


export const HomeTemplate = (props) => {
    const { Component, ...resProps } = props;
    return (<Route {...resProps} render={(propsRoute) => {
        return (<Fragment >

            <Header {...propsRoute} />
            <HomeCarousel {...propsRoute} />

            <Component {...propsRoute} />


            <hr className="mt-5" />
            <Footer />
        </Fragment >);
    }} />);
}