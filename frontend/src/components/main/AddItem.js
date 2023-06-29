import React from "react";
import "./AddItem.css"
import { Button, FileInput, Group, Input, NumberInput, Select, Stack, TextInput } from "@mantine/core";
import { IconPlus, IconUpload } from "@tabler/icons-react";
import { useDispatch } from "react-redux";
import { saveCar } from "../../redux/cars";
import { useForm } from "@mantine/form";
const AddItem = () => {
    const dispatch = useDispatch();

    const form = useForm({
        initialValues: {
            image: '',
            car_model: '',
            status: '',
            rent_price:''
        },
    });

    const handleSubmitForm = (data)=>{

        dispatch(saveCar(data.values));
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
                    />
                    <NumberInput
                        label="Price"
                        name="rent_price"
                        radius="md"
                        defaultValue={1000}
                        parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                        formatter={(value) =>
                            !Number.isNaN(parseFloat(value))
                                ? `USD ${value}`.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
                                : 'USD '
                        }
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
                    />
                    <TextInput
                        label="Image"
                        name="image"
                        placeholder="paste the URL to the image"
                        radius="md"
                    />
                </Stack>

                <Group position="apart" mt="xl" style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Button type="submit" radius="sm" color="lime" name="SAVE CAR" leftIcon={<IconPlus />} loading>
                        RECORD THE NEW CAR
                    </Button>
                </Group>
            </form>
        </div>
    )
}

export default AddItem