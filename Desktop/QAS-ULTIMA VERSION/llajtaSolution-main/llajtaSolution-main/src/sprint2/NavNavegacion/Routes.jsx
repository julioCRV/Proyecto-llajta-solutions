import Reac, {useState} from 'react'; 
import {Routes, Route} from 'react-router-dom';

import Menu from '../MenuPlatillos/menuPlatillos';
import Home from '../../components/Home/Home';
import Error from '../../components/Home/Error'

function Router() {
    return (
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/menu-platillos' element={<Menu/>}/>
            <Route path='/error' element={<Error/>}/>
        </Routes>
    );
}
export default Router; 
