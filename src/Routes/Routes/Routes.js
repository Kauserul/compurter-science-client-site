import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Categories from "../../Pages/Categories/Categories";
import CategoryCourse from "../../Pages/CategoryCourse/CategoryCourse";
import Classes from "../../Pages/Classes/Classes";
import Course from "../../Pages/Course/Course";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Home from "../../Pages/Home/Home";
import LogIn from "../../Pages/LogIn/LogIn";
import PremiumAccess from "../../Pages/PremiumAccess/PrimiumAccess";
import Register from "../../Pages/Register/Register";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

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
                loader : () => fetch('https://compurter-scien-sever-site.vercel.app/courses')
            },
            {
                path : '/classes/:id',
                element : <Classes></Classes>,
                loader : () => fetch('https://compurter-scien-sever-site.vercel.app/courses')
            },
            {
                path : '/course/:id',
                element : <CourseDetails></CourseDetails>,
                loader : ({params}) => fetch(`https://compurter-scien-sever-site.vercel.app/courses/${params.id}`)
            },
            
            {
                path : '/premium/:id',
                element : <PrivateRoutes><PremiumAccess></PremiumAccess></PrivateRoutes>,
                loader : ({params}) => fetch(`https://compurter-scien-sever-site.vercel.app/courses/${params.id}`)
            },
            {
                path : '/categoryCourse/:id',
                element : <CategoryCourse></CategoryCourse>,
                loader : ({params}) => fetch(`https://compurter-scien-sever-site.vercel.app/category/${params.id}`)
            }
        ]
    }
])