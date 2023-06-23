import React from "react";
import "./MyReservations.css";
import { Button, Image } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { Link } from 'react-router-dom'

const MyReservations = ()=>{
    return(
        <div className="main-container">
            {/* header */}
            {/* <div className="title-header">
                <h2 className="title-headline">MY RESERVATIONS</h2>
                <p className="subtitle-headline">Find list of your booked cars here</p>
            </div> */}
            <div className="empty-container">
                <Image src="undraw_empty_cart_co35.png" height={120} width="auto"/>
                <h2 className="empty-headline">No Reservation found</h2>
                <p className="empty-subtitle">Check the list of available cars and book your ride with us!</p>
                <Button color="lime" leftIcon={<IconSearch size={15}/>}><Link to="../list-item" style={{textDecoration:'none', color:'white'}}>Explore Cars</Link></Button>
            </div>
        </div>
    )
}

export default MyReservations