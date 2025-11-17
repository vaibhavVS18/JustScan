import {Route, Routes, BrowserRouter} from "react-router-dom";
import Home from "../pages/Home.jsx";

const AppRoutes = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;