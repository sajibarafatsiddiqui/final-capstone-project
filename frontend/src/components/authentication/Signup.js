import React from 'react';
import {
    Paper,
    createStyles,
    TextInput,
    PasswordInput,
    Checkbox,
    Button,
    Title,
    Text,
    Anchor,
    rem,
    Select,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import "./Signup.css"

const useStyles = createStyles((theme) => ({

    title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },
}));

function Signup() {
    const { classes } = useStyles();
    // localStorage.setItem('user-token', token);
    return (
        <div className="wrapper">
            <Paper className="form" radius={0} p={30}>
                <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
                    Welcome the car renting App!
                </Title>

                <TextInput label="Email address" placeholder="example@email.com" size="sm" />
                <div style={{display:'flex'}}>
                    <TextInput label="First name" placeholder="First name" size="sm" />
                    <TextInput label="last Name" placeholder="Last name" size="sm" style={{marginLeft:5}}/>
                </div>
                <Select
                    size="sm"
                    label="Gender"
                    radius="md"
                    placeholder="Select"
                    data={[
                        { value: 'M', label: 'Male' },
                        { value: 'F', label: 'Female' },
                    ]}
                />
                <PasswordInput label="Password" placeholder="Your password" mt="md" size="md" />
                <Button fullWidth mt="xl" size="md" color='lime'>
                    Signup
                </Button>

                <Text ta="center" mt="md">
                    Already have an account?{' '}
                    {/* Don&apos;t have an account?{' '} */}
                    <Link to="../login">Login</Link>
                    {/* <Anchor<'a'> href="#" weight={700} onClick={(event) => event.preventDefault()}>
              Register
            </Anchor> */}
                </Text>
            </Paper>
        </div>
    );
}

export default Signup;