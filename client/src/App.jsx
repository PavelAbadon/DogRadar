import { Route, Routes } from 'react-router';

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Gallery from './components/galery/Gallery';
import Calendar from './components/calendar/Calendar'
import Login from './components/login/Login';
import Register from './components/register/Register';
import Logout from './components/logout/Logout';


function App() {
    
    return (
        <>
            <Header/>

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/dogs' element={<Gallery/>}/>
                <Route path='/calendar' element={<Calendar/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/logout' element={<Logout/>}/>
            </Routes>
            
            <Footer/>
        </>
    )
}

export default App
