import { Route, Routes } from 'react-router';

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Gallery from './components/galery/Gallery';

function App() {
    
    return (
        <>
            <Header/>

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/gallery' element={<Gallery/>}/>
            </Routes>
            
            <Footer/>
        </>
    )
}

export default App
