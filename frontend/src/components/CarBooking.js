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
import ProtectedRoute from '../util/ProtectedRoute';

function CarBooking() {
    return (
        <BrowserRouter>
            <div className='app-body'>
                {/* routes */}
                <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route path='/Signup' element={<Signup />} />
                    <Route path='/' element={<LandingPage />} />
                    <Route path='/list-item' element={<ProtectedRoute><Navigation /><ListItem /></ProtectedRoute>} />
                    <Route path='/details/:id' element={<ProtectedRoute><Navigation /><Details /></ProtectedRoute>} />
                    <Route path='/my-reservations' element={<ProtectedRoute><Navigation /><MyReservations /></ProtectedRoute>} />
                    <Route path='/delete-item' element={<ProtectedRoute><Navigation /><DeleteItemList /></ProtectedRoute>} />
                    <Route path='/add-item' element={<ProtectedRoute><Navigation /><AddItem /></ProtectedRoute>} />

                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default CarBooking