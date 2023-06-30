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

            return navigate('../login');
        }else{
            setIsLoggedIn(true);
            navigate('../list-item');
        }
        
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