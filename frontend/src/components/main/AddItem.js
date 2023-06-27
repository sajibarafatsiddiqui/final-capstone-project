import React from "react";
import "./AddItem.css"
import { Button, FileInput, Group, Input, NumberInput, Select, Stack, TextInput } from "@mantine/core";
import { IconPlus, IconUpload } from "@tabler/icons-react";
const AddItem = () => {
    return (
        <div className="main-container">
            {/* header */}
            <div className="title-header">
                <h2 className="title-headline">ADD A NEW CAR</h2>
                <p className="subtitle-headline">Record a new car for renting</p>
            </div>
            <form className="car-form" onSubmit={() => console.log('form submitted')}>
                <Stack>
                    <TextInput
                        label="Model"
                        placeholder="Enter the car model"
                        radius="md"
                    />
                    <NumberInput
                        label="Price"
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
                        placeholder="Pick one"
                        data={[
                            { value: 'new', label: 'New' },
                            { value: 'used', label: 'Used' },
                        ]}
                    />
                    <FileInput label="Car image" placeholder="Click to upload" icon={<IconUpload size={14} />} />
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