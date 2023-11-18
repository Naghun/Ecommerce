import { Routes, Route, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector} from "react-redux";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";



const PrivateRoute = () => {
    const user = useSelector((state) => state.users.user)
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            console.log('no user');
        } else {
            console.log('user');
        }
    }, [user, navigate]);

    return user ? {HomePage} : <Navigate to="/login" />;
};

export default PrivateRoute;