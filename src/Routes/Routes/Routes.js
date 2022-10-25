import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Categories from "../../Pages/Categories/Categories";
import Classes from "../../Pages/Classes/Classes";
import Course from "../../Pages/Course/Course";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Home from "../../Pages/Home/Home";
import LogIn from "../../Pages/LogIn/LogIn";
import PremiumAccess from "../../Pages/PremiumAccess/PrimiumAccess";
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
            },
            {
                path : '/classes/:id',
                element : <Classes></Classes>,
                loader : () => fetch('http://localhost:5000/courses')
            },
            {
                path : '/course/:id',
                element : <CourseDetails></CourseDetails>,
                loader : ({params}) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path : '/premium/:id',
                element : <PremiumAccess></PremiumAccess>,
                loader : ({params}) => fetch(`http://localhost:5000/courses/${params.id}`)
            }
        ]
    }
])