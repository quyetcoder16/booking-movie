import { Fragment } from "react";
import { Route } from "react-router-dom"


export const HomeTemplate = (props) => {
    const { Component, ...resProps } = props;
    return (<Route {...resProps} render={(propsRoute) => {
        return (<Fragment >
            <h1 className="bg-black h-10 text-white">Đây là header homepage</h1>


            <Component {...propsRoute} />



            <footer className="bg-black h-10 text-white">
                Đây là footer homepage
            </footer>
        </Fragment >);
    }} />);
}