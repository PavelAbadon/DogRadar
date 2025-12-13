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
import EditDog from './components/editDog/EditDog';


function App() {
    const [registriraniPotrebiteli, setRegistriraniPotrebiteli] = useState([]);
    const [user, setUser] = useState(null);

    const registerHandler = (email, password) =>{
        if(registriraniPotrebiteli.some(user => user.email === email)){
            throw new Error('Има вече такъв потребител')
        }
        const newUser = {email, password}
        setRegistriraniPotrebiteli(state => [...state, newUser ]);
        
        
        setUser(newUser);
    }

    const loginHandler = (email, password) => {
        const user = registriraniPotrebiteli.find(u => u.email === email && u.password === password);

        if(!user){
            throw new Error('Няма такъв потребител');
        }
        
        setUser(user)
    }

    const logoutHandler = () => {
        setUser(null);
    }

    return (
        <>
            <Header user={user}/>

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/dogs' element={<Gallery/>}/>
                <Route path='/calendar' element={<Calendar/>}/>
                <Route path='/login' element={<Login onLogin={loginHandler}/>}/>
                <Route path='/register' element={<Register onRegister={registerHandler}/>}/>
                <Route path='/logout' element={<Logout onLogout={logoutHandler}/>}/>
                <Route path='/dogs/:dogId/details' element={<Details/>}/>
                <Route path='/dogs/:dogId/delete' element={<DeleteDog/>}/>
                <Route path='/dogs/:dogId/edit' element={<EditDog/>}/>
                <Route path='dogs/create' element={<CreateDog/>}/>
            </Routes>
            
            <Footer/>
        </>
    )
}

export default App
