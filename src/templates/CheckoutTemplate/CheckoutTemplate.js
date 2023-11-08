import { Redirect, Route } from "react-router-dom";
import { USER_LOGIN } from "../../utils/Setting/config";
import { Fragment } from "react";

const CheckoutTemplate = (props) => {
    const { Component, ...resProps } = props;
    if (!localStorage.getItem(USER_LOGIN)) {
        // console.log("test");
        return <Redirect to='/login' />
    }

    return <Route {...resProps} render={(propsRoute) => {
        return <Fragment>
            <Component {...propsRoute} />
        </Fragment>
    }} />
}

export default CheckoutTemplate;