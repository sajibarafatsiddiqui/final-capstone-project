import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { createStyles, Navbar, Group, Code, getStylesRef, rem } from '@mantine/core';
import {
  IconHome,
  IconTicket,
  IconPlus,
  IconEraser,
  IconLogout2,
  IconBellRinging,
  IconFingerprint,
  IconKey,
  IconSettings,
  Icon2fa,
  IconDatabaseImport,
  IconReceipt2,
  IconSwitchHorizontal,
  IconLogout,
} from '@tabler/icons-react';
// import { MantineLogo } from '@mantine/ds';

const useStyles = createStyles((theme) => ({
  header: {
    paddingBottom: theme.spacing.md,
    marginBottom: `calc(${theme.spacing.md} * 1.5)`,
    borderBottom: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
      }`,
  },

  link: {
    ...theme.fn.focusStyles(),
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,

      [`& .${getStylesRef('icon')}`]: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      },
    },
  },

  linkIcon: {
    ref: getStylesRef('icon'),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
    marginRight: theme.spacing.sm,
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: '#97bf0f',
      color: '#fff'
    },
  },
}));

const data = [
  { link: 'list-item', label: 'Explore', icon: IconHome },
  { link: 'my-reservations', label: 'My Reservations', icon: IconTicket },
  { link: 'add-item', label: 'Add a record', icon: IconPlus },
  { link: 'delete-item', label: 'Delete a record', icon: IconEraser },
  { link: '', label: 'Logout', icon: IconLogout },
];

function Navigation() {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState('Billing');

  const links = data.map((item) => (
    // <a
    //   className={cx(classes.link, { [classes.linkActive]: item.label === active })}
    //   href={item.link}
    //   key={item.label}
    //   onClick={(event) => {
    //     event.preventDefault();
    //     setActive(item.label);
    //   }}
    // >
    // <span style={{display:'flex', justifyContent:'flex-start', alignItems:'center'}}>

    <Link className={cx(classes.link, { [classes.linkActive]: item.label === active })} to={item.link} onClick={() => setActive(item.label)}>
      <item.icon className={classes.linkIcon} stroke={1.5} color={item.label === active ? 'white' : 'black'} />
      {item.label}
    </Link>
    // </span>

    // <span>{item.label}</span>
    // </a>
  ));

  useEffect(()=>{
    setActive('Explore');
  },[]);

  return (
    <Navbar height='100vh' width={{ sm: 260 }} p="md">
      <Navbar.Section grow>
        <Group className={classes.header} position="apart">
          {/* <MantineLogo size={28} /> */}
          <h2>Car-Booking</h2>
          <Code sx={{ fontWeight: 700 }}>v1.0.0</Code>
        </Group>
        {links}

        {/* footer */}
        {/* icons & copyright */}
        <div style={{position:'absolute', bottom:10}}>
        <p>Copyright @2023 Team H.</p>
        </div>
      </Navbar.Section>

    </Navbar>
  );
}

export default Navigation