import {  useEffect } from 'react';

import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
const LogOut = () => {
    const navigate=useNavigate();
    useEffect(() => {
        Cookies.remove("loggedIn");
        Cookies.remove("userEmail");
        navigate("/login", { replace: true });
    }, []);
    return null;
    
}
export default LogOut;