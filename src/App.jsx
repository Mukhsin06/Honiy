import React , {useEffect} from 'react';
import  {Routes ,Route} from "react-router-dom";
import Home from "./pages/home/home";
import "./App.css"
import AOS from 'aos'
function App(props) {
    useEffect(() => {
        AOS.init({
            duration: 500,
        });
    }, []);
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>
        </div>
    );
}

export default App;