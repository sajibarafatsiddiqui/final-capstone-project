import React from 'react';
import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import {
    TextInput,
    PasswordInput,
    Text,
    Paper,
    Group,
    PaperProps,
    Button,
    Divider,
    Checkbox,
    Anchor,
    Stack,
    Image,
} from '@mantine/core';
import { IconBrandGoogle, IconBrandTwitter } from '@tabler/icons-react';
import "./Login.css"
import { Link } from 'react-router-dom';
// import { GoogleButton, TwitterButton } from '../SocialButtons/SocialButtons';

function Login(props) {
    const [type, toggle] = useToggle(['login', 'register']);
    const form = useForm({
        initialValues: {
            email: '',
            name: '',
            password: '',
            terms: true,
        },

        validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
            password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
        },
    });

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

                <form onSubmit={form.onSubmit(() => { })}>
                    <Stack>
                        {type === 'register' && (
                            <TextInput
                                label="Name"
                                placeholder="Your name"
                                value={form.values.name}
                                onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
                                radius="md"
                            />
                        )}

                        <TextInput
                            required
                            label="Email"
                            placeholder="hello@mantine.dev"
                            value={form.values.email}
                            onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                            error={form.errors.email && 'Invalid email'}
                            radius="md"
                        />

                        <PasswordInput
                            required
                            label="Password"
                            placeholder="Your password"
                            value={form.values.password}
                            onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                            error={form.errors.password && 'Password should include at least 6 characters'}
                            radius="md"
                        />

                        {type === 'register' && (
                            <Checkbox
                                label="I accept terms and conditions"
                                checked={form.values.terms}
                                onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
                            />
                        )}
                    </Stack>

                    <Group position="apart" mt="xl">
                        <Link to="../signup" style={{fontSize:10}}>Don't have an account? Register</Link>
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