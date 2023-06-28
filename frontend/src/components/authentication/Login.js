import React from 'react';
import { useForm } from '@mantine/form';
import {
    TextInput,
    Text,
    Group,
    Button,
    Divider,
    Stack,
    Image,
} from '@mantine/core';
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom';
import { signIn } from '../../action/authentication';
import { useDispatch } from 'react-redux';

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const form = useForm({
        initialValues: {
            email: ''
        },

        validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
        },
    });

    const handleLogin = data => {
        // navigate("../list-item");
        console.log(data.values);
        signIn(data.values, dispatch);
        // console.log(data.values);
    }

    return (
        <div className='login-wrapper'>
            <div className='login-form-container'>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <Image src="car booking logo.png" height='120px' width='120px' />
                    <Text size="lg" weight={500}>
                        Welcome to our Platform !
                    </Text>
                </div>

                <Divider label="Login with Email and password" labelPosition="center" my="lg" />

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
                        <Button type="submit" radius="sm" color='lime'>
                            Login
                        </Button>
                    </Group>
                </form>
            </div>
        </div>
    );
}

export default Login