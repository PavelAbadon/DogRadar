import { Route, Routes } from 'react-router';
import { useState } from 'react';

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Gallery from './components/galery/Gallery';
import Calendar from './components/calendar/Calendar'
import Login from './components/login/Login';
import Register from './components/register/Register';
import Logout from './components/logout/Logout';
import Details from './components/details/details';
import DeleteDog from './components/deleteDog/DeleteDog';
import CreateDog from './components/createDog/CreateDog';


function App() {
    const [user, setUser] = useState(null);

    const authHandler = (email) =>{
        setUser({
            email
        })
    }

    return (
        <>
            <Header/>

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/dogs' element={<Gallery/>}/>
                <Route path='/calendar' element={<Calendar/>}/>
                <Route path='/login' element={<Login onLogin={authHandler}/>}/>
                <Route path='/register' element={<Register onRegister={authHandler}/>}/>
                <Route path='/logout' element={<Logout/>}/>
                <Route path='/dogs/:dogId/details' element={<Details/>}/>
                <Route path='/dogs/:dogId/delete' element={<DeleteDog/>}/>
                <Route path='dogs/create' element={<CreateDog/>}/>
            </Routes>
            
            <Footer/>
        </>
    )
}

export default App
