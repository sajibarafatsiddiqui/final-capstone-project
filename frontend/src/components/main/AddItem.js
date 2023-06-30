import React, { useState } from "react";
import "./AddItem.css"
import { Button, FileInput, Group, Input, NumberInput, Select, Stack, TextInput } from "@mantine/core";
import { IconPlus, IconUpload } from "@tabler/icons-react";
import { useDispatch } from "react-redux";
import { saveCar } from "../../redux/cars";
import { useForm } from "@mantine/form";
const AddItem = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const form = useForm({
        initialValues: {
            image: '',
            car_model: '',
            status: '',
            rent_price:''
        },
    });

    const handleSubmitForm = (data)=>{
        console.log(data.values);
        setLoading(true);
        dispatch(saveCar(data.values));
        form.reset();
        setLoading(false);
    }

    return (
        <div className="main-container">
            {/* header */}
            <div className="title-header">
                <h2 className="title-headline">ADD A NEW CAR</h2>
                <p className="subtitle-headline">Record a new car for renting</p>
            </div>
            <form className="car-form" onSubmit={form.onSubmit(() => handleSubmitForm(form))}>
                <Stack>
                    <TextInput
                        label="Model"
                        name="car_model"
                        placeholder="Enter the car model"
                        radius="md"
                        value = { form.values.car_model}
                        onChange={(event) => form.setFieldValue('car_model', event.currentTarget.value)}
                    />
                    <TextInput
                        label="Rent price"
                        name="rent_price"
                        placeholder="Enter the renting price"
                        radius="md"
                        value = { form.values.rent_price}
                        onChange={(event) => form.setFieldValue('rent_price', event.currentTarget.value)}
                    />
                    <Select
                        label="Status"
                        radius="md"
                        name="status"
                        placeholder="Pick one"
                        data={[
                            { value: 'new', label: 'New' },
                            { value: 'used', label: 'Used' },
                        ]}
                        value = {form.values.status}
                        onChange={(event) => form.setFieldValue('status', event)}
                    />
                    <TextInput
                        label="Image"
                        name="image"
                        placeholder="paste the URL to the image"
                        radius="md"
                        value = {form.values.image}
                        onChange={(event) => form.setFieldValue('image', event.currentTarget.value)}
                    />
                </Stack>

                <Group position="apart" mt="xl" style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Button type="submit" radius="sm" color="lime" name="SAVE CAR" leftIcon={<IconPlus />} loading={loading}>
                        RECORD THE NEW CAR
                    </Button>
                </Group>
            </form>
        </div>
    )
}

export default AddItem