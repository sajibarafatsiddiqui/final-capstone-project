import React, { useEffect, useState } from "react";
import { Route, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import { notifications } from "@mantine/notifications";

const ProtectedRoute = (props) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const checkUserToken = () => {
        // const userToken = localStorage.getItem('user-token');
        const userId = localStorage.getItem('userId');
        if (!userId || userId === 'undefined') {
            setIsLoggedIn(false);

            // display notification
            notifications.show({
                title: 'Authentication Failed',
                message: 'Please sign in to access the App! 🤥',
                color:'red'
              })

            return navigate('../login');
        }
        setIsLoggedIn(true);
    }
    useEffect(() => {
            checkUserToken();
        }, [isLoggedIn]);
    return (
        <React.Fragment>
            {
                isLoggedIn ? props.children : null
            }
        </React.Fragment>
    );
}
export default ProtectedRoute;