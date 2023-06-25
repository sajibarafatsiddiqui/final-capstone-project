import { Button, Image, Notification, RingProgress } from "@mantine/core";
import { IconCalendarCheck, IconCheck, IconEraser, IconLockCancel, IconMessageCancel, IconMultiplier1x, IconRoad, IconShoppingCartX, IconUser } from "@tabler/icons-react";
import React from "react";

const ReservationItem = (props) => {
    const data = props.data;

    const _displayNotification = () => {
        return (
            <Notification icon={<IconCheck size="1.1rem" />} color="teal" title="Notification">
                The Reservation status has successfully changed
            </Notification>
        )
    }

    return (
        <div style={{ width: '95%', height: '120px', padding: 5, margin: 10, display: 'flex', justifyContent: 'flex-start', borderBottom: '1px solid gray' }}>
            <Image className="item-image" height='110px' width='auto' maw={240} mx="auto" radius="md" src="https://pngimg.com/uploads/land_rover/land_rover_PNG82.png" alt="car cover image" />
            <div style={{ marginLeft: 10, width: 250 }}>
                <h3 style={{ margin: 0, padding: 0 }}>RANGE ROVER SPORT</h3>
                <p style={{ margin: 0, padding: 0, fontSize: 12, width: 180, flexWrap: 'wrap' }}>Official Range rover sport HSE 2018 Biturbo ...</p>
                <Button leftIcon={<IconShoppingCartX />} color="red" size="small" style={{ padding: 5 }}
                    onClick={_displayNotification()}>Cancel Booking</Button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 180 }}>
                <IconCalendarCheck size={50} color="gray" />
                <h5 style={{ fontWeight: 'normal' }}>Mon, 19th September</h5>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 180 }}>
                <IconRoad size={50} color="gray" />
                <h5 style={{ fontWeight: 'normal' }}>Kinshasa town</h5>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: 180 }}>
                <IconUser size={50} color="gray" />
                <h5 style={{ fontWeight: 'normal' }}>Israel CH.</h5>
            </div>
        </div>
    )
}

export default ReservationItem;