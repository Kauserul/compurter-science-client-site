import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Course from "../../Pages/Course/Course";
import Home from "../../Pages/Home/Home";
import LogIn from "../../Pages/LogIn/LogIn";
import Register from "../../Pages/Register/Register";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/login',
                element : <LogIn></LogIn>
            },
            {
                path : '/register',
                element : <Register></Register>
            },
            {
                path : '/course',
                element : <Course></Course>,
                loader : () => fetch('http://localhost:5000/courses')
            }
        ]
    }
])