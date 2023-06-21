import React from 'react'
import Navigation from './Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListItem from './ListItem';
import Details from './Details';
import MyReservations from './MyReservations';
import DeleteItemList from './DeleteItemList';
import AddItem from './AddItem';
import './CarBooking.css'

function CarBooking() {
    return (
        <BrowserRouter>
            <div className='app-body'>
                <Navigation />
                {/* routes */}
                <Routes>
                    <Route path='/' element={<ListItem />} />
                    <Route path='/list-item' element={<ListItem />} />
                    <Route path='/details' element={<Details />} />
                    <Route path='/my-reservations' element={<MyReservations />} />
                    <Route path='/delete-item' element={<DeleteItemList />} />
                    <Route path='/add-item' element={<AddItem />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default CarBooking