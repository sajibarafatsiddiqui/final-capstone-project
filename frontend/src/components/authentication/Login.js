import React, { useState } from 'react';
import { useForm } from '@mantine/form';
import {
    TextInput,
    Text,
    Group,
    Button,
    Divider,
    Stack,
    Image
} from '@mantine/core';
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signinReducer } from '../../redux/authentication';

const Login = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const form = useForm({
        initialValues: {
            email: ''
        },

        validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
        },
    });

    const handleLogin = async data => {
        setLoading(true);
        dispatch(signinReducer(data.values)).then(
            response => {
                console.log(response.payload);
                if (response.payload !== undefined) {
                    localStorage.setItem('userId', response.payload.data.session.public_id);
                    localStorage.setItem('user_last_name', response.payload.data.last_name)
                    // setLoading(false);
                    navigate("../list-item");

                } else {
                    displayToast();
                    form.reset();
                    setLoading(false)
                    form.setFieldError('email')
                }
                setLoading(false)
            }
        );
    }

    const displayToast =()=>{

    };

    return (
        <div className='login-wrapper'>
            <div className='login-form-container'>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <Image src="car booking logo.png" height='120px' width='120px' />
                    <Text size="lg" weight={500}>
                        Welcome to our Platform !
                    </Text>
                </div>

                <Divider label="Login with registered email" labelPosition="center" my="lg" />

                <form onSubmit={form.onSubmit(() => handleLogin(form))}>
                    <Stack>
                        <TextInput
                            required
                            label="Email"
                            placeholder="example@email.com"
                            value={form.values.email}
                            onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                            error={form.errors.email && 'Invalid email'}
                            radius="md"
                        />
                    </Stack>

                    <Group position="apart" mt="xl">
                        <Link to="../signup" style={{ fontSize: 10 }}>Don't have an account? Register</Link>
                        <Button type="submit" radius="sm" color='lime' loading={loading}>
                            Login
                        </Button>
                    </Group>
                </form>
            </div>

        </div>
    );
}

export default Login