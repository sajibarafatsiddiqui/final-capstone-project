import React, { useState } from "react";
import { Button, Image, Modal, Select, TextInput, useMantineTheme } from "@mantine/core";
import { IconArrowLeft, IconBrandBooking, IconTicket } from "@tabler/icons-react";
import "./Details.css"
import { useNavigate } from "react-router";
import { useDisclosure } from "@mantine/hooks";
import { DateInput } from "@mantine/dates";

const Details = () => {
    const navigate = useNavigate();
    const [opened, { open, close }] = useDisclosure(false);
    const [value, setValue] = useState(null);
    const theme = useMantineTheme();
    return (
        <div className="details-container">
            {/* back home button with absolute style */}
            <Button leftIcon={<IconArrowLeft />} variant="subtle" color="dark" className="back-home-btn" onClick={() => navigate("../list-item")}>Back to Car list</Button>
            <div className="details-image-container">
                <Image src="https://pngimg.com/uploads/land_rover/land_rover_PNG82.png" width="80%" height="auto" />
            </div>
            <div className="details-info-container">
                <h2 className="car-name-info-detail">RANGE ROVER</h2>
                <p className="car-desc-info-detail">Edition 2017, Sport HSE 4.0L V8</p>
                <div className="details-info-gray">
                    <p>Status</p>
                    <p>New</p>
                </div>
                <div className="details-info-light">
                    <p>Renting Price</p>
                    <p>USD 120</p>
                </div>
                <div className="details-info-gray">
                    <p>Number of seats</p>
                    <p>4</p>
                </div>
                <div className="details-info-light">
                    <p>Availability</p>
                    <p>6:AM - 11:PM</p>
                </div>

                {/* logo car */}
                <div style={{ paddingTop: 20, alignItems: 'end', justifyContent: 'end', display: 'flex', flexDirection: 'column' }}>
                    {/* <p style={{margin:0}}>Car Brand</p> */}
                    <Image src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c48a.png" height={120} width="auto" />
                </div>

                <Button leftIcon={<IconTicket />} size="md" radius="md" color="lime" onClick={open}>Book this car</Button>

            </div>
            {/* book (reservation) modal */}
            <Modal
                opened={opened}
                onClose={close}
                title="Reservation Form"
                overlayProps={{
                    color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
                    opacity: 0.55,
                    blur: 3,
                }}
            >
                {/* Modal content */}
                <Select
                    size="sm"
                    label="Car model"
                    radius="md"
                    value="1"
                    placeholder="Select"
                    data={[
                        { value: '1', label: 'Range rover' },
                    ]}
                />
                <Select
                    size="sm"
                    label="User"
                    radius="md"
                    value="1"
                    placeholder="Select"
                    data={[
                        { value: '1', label: 'Israel CHIZUNGU' },
                    ]}
                />
                <DateInput
                    value={value}
                    onChange={setValue}
                    label="Date"
                    placeholder="Date input"
                    maw={400}
                    mx="auto"
                />
                <TextInput label="City" placeholder="Enter the city" size="md" />
                <Button fullWidth mt="xl" size="md" color='lime'>
                    Confirm booking
                </Button>
            </Modal>
        </div>
    )
}

export default Details