import React, { useState } from 'react';
import {
    Paper,
    createStyles,
    TextInput,
    Button,
    Title,
    Text,
    Select,
} from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';
import "./Signup.css"
import { useDispatch } from 'react-redux';
import { useForm } from '@mantine/form';
import { uploadUser } from '../../redux/authentication';
import { toast } from 'react-toast';

const useStyles = createStyles((theme) => ({

    title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },
}));

const Signup = () => {

    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const form = useForm({
        initialValues: {
            first_name: '',
            last_name: '',
            age: '',
            gender: '',
            email: ''
        },
    });

    const handleSubmitForm = (data) => {
        setLoading(true);
        dispatch(uploadUser(data.values));
        toast.success('Account created !');
        form.reset();
<<<<<<< HEAD
        notifications.show({
            title: 'Notification',
            content: 'User successfully created!',
            color: 'red',
            autoClose: true
        });

        navigate('/login');
=======
        navigate('../login');
>>>>>>> 8ba3769597de7ff9ad1eac2dc080234cfed3bda6

    }

    const { classes } = useStyles();

    return (
        <div className="wrapper">
            <Paper className="form" radius={0} p={30}>
                <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
                    Welcome the car renting App!
                </Title>
                <form className="car-form---" onSubmit={form.onSubmit(() => handleSubmitForm(form))}>
                    <TextInput
                        required
                        name='email'
                        label="Email address"
                        placeholder="example@email.com"
                        size="sm"
                        value={form.values.email}
                        onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                    />
                    <div style={{ display: 'flex' }}>
                        <TextInput
                            required
                            label="First name"
                            name='first_name'
                            placeholder="First name"
                            size="sm"
                            value={form.values.first_name}
                            onChange={(event) => form.setFieldValue('first_name', event.currentTarget.value)}
                        />
                        <TextInput
                            required
                            label="last Name"
                            name='last_name'
                            placeholder="Last name"
                            size="sm"
                            style={{ marginLeft: 5 }}
                            value={form.values.last_name}
                            onChange={(event) => form.setFieldValue('last_name', event.currentTarget.value)}
                        />
                    </div>
                    <Select
                        required
                        size="sm"
                        label="Gender"
                        radius="md"
                        placeholder="Select"
                        data={[
                            { value: 'M', label: 'Male' },
                            { value: 'F', label: 'Female' },
                        ]}
                        value={form.values.gender}
                        onChange={(event) => form.setFieldValue('gender', event)}
                    />
                    <TextInput
                        required
                        label="Age"
                        name='age'
                        placeholder="Age"
                        size="sm"
                        value={form.values.age}
                        onChange={(event) => form.setFieldValue('age', event.currentTarget.value)}
                    />
                    <Button fullWidth mt="xl" size="md" color='lime' type='submit' loading={loading}>
                        Signup
                    </Button>
                </form>

                <Text ta="center" mt="md">
                    Already have an account?{' '}
                    <Link to="../login">Login</Link>
                </Text>
            </Paper>
        </div>
    );
}

export default Signup;