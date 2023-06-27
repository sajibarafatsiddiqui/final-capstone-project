import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { createStyles, Navbar, Group, Code, getStylesRef, rem, Image } from '@mantine/core';
import {
  IconHome,
  IconTicket,
  IconPlus,
  IconEraser,
  IconLogout,
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandGithub,
  IconBrandPinterest,
  IconMail,
} from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  header: {
      alignItems:'center',
      justifyContent:'center',
      display:'flex',
      marginBottom:20
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
  { link: '../list-item', label: 'Explore', icon: IconHome },
  { link: '../my-reservations', label: 'My Reservations', icon: IconTicket },
  { link: '../add-item', label: 'Add a car', icon: IconPlus },
  { link: '../delete-item', label: 'Delete a car', icon: IconEraser },
  // { link: '', label: 'Logout', icon: IconLogout },
];

function Navigation() {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState('Billing');

  const links = data.map((item) => (

    <Link className={cx(classes.link, { [classes.linkActive]: item.label === active })} to={item.link} onClick={() => setActive(item.label)}>
      <item.icon className={classes.linkIcon} stroke={1.5} color={item.label === active ? 'white' : 'black'} />
      {item.label}
    </Link>
  ));

  return (
    <Navbar height='100vh' width={{ sm: 260 }} p="md">
      <Navbar.Section grow>
        <Group className={classes.header} position="apart">
          <Image src="car booking logo.png" height='120px' width='120px'/>
        </Group>
        {links}

        {/* footer */}
        {/* icons & copyright */}
        <div style={{width: '180px', position:'absolute', bottom:15, alignItems:'center', justifyContent:'center', display:'flex', flexDirection:'column'}}>
          <span><IconBrandFacebook stroke={0.8} color='gray'/><IconBrandTwitter stroke={0.8}  color='gray'/><IconBrandGithub stroke={0.8}  color='gray'/><IconBrandPinterest stroke={0.8}  color='gray'/><IconMail stroke={0.8}  color='gray'/></span>
        <p style={{margin:0, color:'gray', fontSize:12, fontWeight:'bold'}}>Copyright @2023 Team H.</p>
        </div>
      </Navbar.Section>

    </Navbar>
  );
}

export default Navigation