import React, { useEffect, useState } from "react";
import { Button, Image, Modal, Select, TextInput, useMantineTheme } from "@mantine/core";
import { IconArrowLeft, IconTicket } from "@tabler/icons-react";
import "./Details.css"
import { useNavigate, useParams } from "react-router";
import { useDisclosure } from "@mantine/hooks";
import { DateInput } from "@mantine/dates";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarDetails } from "../../redux/cars";
import { useForm } from "@mantine/form";
import { saveReservation } from "../../redux/rental";


const Details = (props) => {
    const { id } = useParams();
    console.log(props.data);
    const navigate = useNavigate();
    const [opened, { open, close }] = useDisclosure(false);
    const theme = useMantineTheme();

    const [selectedCar, setSelectedCar] = useState({});
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // get datas
        dispatch(fetchCarDetails(id)).then(
            response => {
                setSelectedCar(response.payload.data);
                console.log(response.payload.data);
            }
        )
    }, [dispatch]);

    const form = useForm({
        initialValues: {
            car_id: selectedCar.id,
            date_rent: '',
            date_return: '',
            destination: ''
        },
    });

    const handleSubmitForm = (data) => {
        // submiting new rental
        setLoading(true);
        let newData = data.values;
        newData.car_id = id;

        dispatch(saveReservation(newData));
        form.reset();
        setLoading(false);
        close();
    }

    return (
        <div className="details-container">
            {/* back home button with absolute style */}
            <Button leftIcon={<IconArrowLeft />} variant="subtle" color="dark" className="back-home-btn" onClick={() => navigate("../list-item")}>Back to Car list</Button>
            <div className="details-image-container">
                <Image src={selectedCar.image} width="80%" height="auto" />
            </div>
            <div className="details-info-container">
                <h2 className="car-name-info-detail">{selectedCar.model}</h2>
                <p className="car-desc-info-detail">Edition 2017, Sport HSE 4.0L V8</p>
                <div className="details-info-gray">
                    <p>Status</p>
                    <p>{selectedCar.status}</p>
                </div>
                <div className="details-info-light">
                    <p>Renting Price</p>
                    <p>${selectedCar.rent_price}</p>
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
                    <Image src="https://png.pngtree.com/png-clipart/20221010/original/pngtree-20-discount-tag-png-image_8671801.png" height={120} width="auto" />
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
                <form onSubmit={form.onSubmit(() => handleSubmitForm(form))}>

                    {/* Modal content */}
                    <Select
                        disabled
                        size="sm"
                        label="Car model"
                        radius="md"
                        name=""
                        value={selectedCar.id}
                        onChange={(event) => form.setFieldValue('car_id', event)}
                        placeholder="Select"
                        data={[
                            { value: selectedCar.id, label: selectedCar.model },
                        ]}
                    />
                    <DateInput
                        label="Date"
                        name="date_rent"
                        placeholder="Date input"
                        maw={400}
                        mx="auto"
                        value={form.values.date_rent}
                        onChange={(event) => form.setFieldValue('date_rent', event)}
                    />
                    <DateInput
                        value={form.values.date_return}
                        onChange={(event) => form.setFieldValue('date_return', event)}
                        label="Date"
                        name="date_return"
                        placeholder="Date input"
                        maw={400}
                        mx="auto"
                    />
                    <TextInput label="City" placeholder="Enter the city" name="destination" size="md"
                        value={form.values.destination}
                        onChange={(event) => form.setFieldValue('destination', event.currentTarget.value)}
                    />
                    <Button fullWidth mt="xl" size="md" color='lime' type="submit" loading={loading}>
                        Confirm booking
                    </Button>
                </form>
            </Modal>
        </div>
    )
}

export default Details