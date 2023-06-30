import React, { useEffect, useState } from "react";
import "./MyReservations.css";
import { Button, Image } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { Link } from 'react-router-dom'
import ReservationItem from "./ReservationItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchReservation } from "../../redux/rental";

const MyReservations = (props) => {
    // const [reservations, setReservations] = useState([1]);
    const dispatch = useDispatch();
    const { reservations } = useSelector((state) => state.reservations);
    // const dispatch = useDispatch();
    // if (!rentals.length) {
    //     // dispatch(LIST_CAR);    
    // }

    useEffect(() => {
        dispatch(fetchReservation());
    }, [dispatch]);

    return (
        <div className="main-container">

            {reservations.length < 1 ?
                <div className="empty-container">
                    <Image src="undraw_empty_cart_co35.png" height={120} width="auto" />
                    <h2 className="empty-headline">No Reservation found</h2>
                    <p className="empty-subtitle">Check the list of available cars and book your ride with us!</p>
                    <Button color="lime" leftIcon={<IconSearch size={15} />}><Link to="../list-item" style={{ textDecoration: 'none', color: 'white' }}>Explore Cars</Link></Button>
                </div> :
                <>
                    {/* header */}
                    <div className="title-header">
                        <h2 className="title-headline">MY RESERVATIONS</h2>
                        <p className="subtitle-headline">Find list of your booked cars here</p>
                    </div>
                    {/* list of reservations */}
                    <div style={{ width: '100%', marginTop: 20, justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
                        {reservations.map((reservation) => (
                            <ReservationItem data={reservation} />
                        )
                        )}
                    </div>
                </>
            }
        </div>
    )
}

export default MyReservations