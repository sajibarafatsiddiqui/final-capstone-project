import React from 'react'
import Navigation from './Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListItem from './main/ListItem';
import Details from './main/Details';
import MyReservations from './main/MyReservations';
import DeleteItemList from './main/DeleteItemList';
import AddItem from './main/AddItem';
import './CarBooking.css'
import LandingPage from './authentication/LandingPage';
import Login from './authentication/Login';
import Signup from './authentication/Signup';

function CarBooking() {
    return (
        <BrowserRouter>
            <div className='app-body'>
                {/* routes */}
                <Routes>
                    <Route path='/' element={<LandingPage />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/Signup' element={<Signup />} />
                    <Route path='/list-item' element={<><Navigation /><ListItem /></>} />
                    <Route path='/details' element={<><Navigation /><Details /></>} />
                    <Route path='/my-reservations' element={<><Navigation /><MyReservations /></>} />
                    <Route path='/delete-item' element={<><Navigation /><DeleteItemList /></>} />
                    <Route path='/add-item' element={<><Navigation /><AddItem /></>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default CarBooking