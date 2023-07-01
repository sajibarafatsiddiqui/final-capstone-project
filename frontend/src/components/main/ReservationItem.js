import { Button, Image, Notification, Skeleton } from "@mantine/core";
import { IconCalendarCheck, IconCheck, IconRoad, IconShoppingCartX, IconUser } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import { fetchCarDetails } from "../../redux/cars";
import { useDispatch } from "react-redux";

const ReservationItem = (props) => {
    const data = props.data;
    const [loadImage, setLoadImage] = useState(true);
    // const [carImage, setCarImage] = useState('');
    // const [carName, setCarName] = useState('Loading ...');
    const [car, setCar] = useState({model:'Loading...', rent_price: '', status: '', image: ''});
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCarDetails(data.car_id)).then(
            response => {
                setLoadImage(false);
                setCar({model:response.payload.data.model, rent_price: response.payload.data.rent_price, status: response.payload.data.status, image: response.payload.data.image})
                // setCarImage(response.payload.data.image);
                // setCarName(response.payload.data.model)
            }
        );
    }, [])

    const cancelReservation = (id)=>{
        props.handleRemove(id);
    }

    return (
        <div style={{ width: '95%', height: '120px', padding: 5, margin: 10, display: 'flex', justifyContent: 'flex-start', borderBottom: '1px solid gray' }}>

            {loadImage === true ?
                <div style={{ display: 'flex', flexDirection: 'column', width: '150px' }}>
                    <Skeleton height={8} radius="xl" />
                    <Skeleton height={8} mt={6} radius="xl" />
                    <Skeleton height={8} mt={6} width="70%" radius="xl" />
                </div>
                :
                <Image className="item-image" height='110px' width='auto' maw={240} mx="auto" radius="md" src={car.image} alt="car cover image" />
            }
            {/* */}
            <div style={{ marginLeft: 10, width: 250 }}>
                <h3 style={{ margin: 0, padding: 0 }}>{car.model}</h3>
                <p style={{ margin: 0, padding: 0, fontSize: 12, width: 180, flexWrap: 'wrap' }}>Rent price: {car.rent_price} | Status: {car.status}</p>
                <Button leftIcon={<IconShoppingCartX />} color="red" size="small" style={{ padding: 5 }} onClick={()=> cancelReservation(data.id)} >Cancel Booking</Button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 180 }}>
                <IconCalendarCheck size={50} color="gray" />
                <h5 style={{ fontWeight: 'normal' }}>{data.date_rent.substring(0, 10)} - {data.date_return.substring(0, 10)}</h5>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 180 }}>
                <IconRoad size={50} color="gray" />
                <h5 style={{ fontWeight: 'normal' }}>{data.destination}</h5>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 180 }}>
                <IconUser size={50} color="gray" />
                <h5 style={{ fontWeight: 'normal' }}>  {localStorage.getItem('user_last_name')}</h5>
            </div>
        </div>
    )
}

export default ReservationItem;