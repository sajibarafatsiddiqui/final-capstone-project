import React from "react";
import { useState } from 'react';
import {
    createStyles,
    Table,
    ScrollArea,
    UnstyledButton,
    Group,
    Text,
    Center,
    TextInput,
    rem,
    Image,
    Button,
} from '@mantine/core';
import { keys } from '@mantine/utils';
import { IconSelector, IconChevronDown, IconChevronUp, IconSearch, IconEraser } from '@tabler/icons-react';
import { tableData } from "../../helpers/datas";
import "./DeleteItemList.css"

const useStyles = createStyles((theme) => ({
    th: {
        padding: '0 !important',
    },

    control: {
        width: '100%',
        padding: `${theme.spacing.xs} ${theme.spacing.md}`,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
    },

    icon: {
        width: rem(21),
        height: rem(21),
        borderRadius: rem(21),
    },
}));


function Th({ children, reversed, sorted, onSort }) {
    const { classes } = useStyles();
    const Icon = sorted ? (reversed ? IconChevronUp : IconChevronDown) : IconSelector;
    return (
        <th className={classes.th}>
            <UnstyledButton onClick={onSort} className={classes.control}>
                <Group position="apart">
                    <Text fw={500} fz="sm">
                        {children}
                    </Text>
                    <Center className={classes.icon}>
                        <Icon size="0.9rem" stroke={1.5} />
                    </Center>
                </Group>
            </UnstyledButton>
        </th>
    );
}

function filterData(data, search) {
    const query = search.toLowerCase().trim();
    return data.filter((item) =>
        keys(data[0]).some((key) => item[key].toLowerCase().includes(query))
    );
}

function sortData(
    data,
    payload
) {
    const { sortBy } = payload;

    if (!sortBy) {
        return filterData(data, payload.search);
    }

    return filterData(
        [...data].sort((a, b) => {
            if (payload.reversed) {
                return b[sortBy].localeCompare(a[sortBy]);
            }

            return a[sortBy].localeCompare(b[sortBy]);
        }),
        payload.search
    );
}

function DeleteItemList() {
    const rows = tableData.map((row) => (
        <tr key={row.model}>
            <td><Image src={row.image} height={120} width="auto" radius="md" /></td>
            <td>{row.model}</td>
            <td>{row.status}</td>
            <td>{row.price}</td>
            <td><Button leftIcon={<IconEraser />} color="red">Delete</Button></td>
        </tr>
    ));

    return (
        // <ScrollArea>
        <div className="delete-list-wrapper">
            <div className="title-header" style={{padding:20}}>
                <h2 className="title-headline">LIST OF CARS</h2>
            </div>

            <ScrollArea style={{ height: '80vh', width: '100%' }}>
                <Table horizontalSpacing="md" verticalSpacing="xs" miw={700} mah='100vh' sx={{ tableLayout: 'fixed' }}>
                    <thead>
                        <tr>
                            <Th>Image</Th>
                            <Th>Car Model</Th>
                            <Th>Status</Th>
                            <Th>Renting Price</Th>
                            <Th>Action</Th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.length > 0 ? (
                            rows
                        ) : (
                            <tr>
                                <td colSpan={Object.keys(tableData[0]).length}>
                                    <Text weight={500} align="center">
                                        Nothing found
                                    </Text>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </ScrollArea>
        </div>
        // </ScrollArea>

    );
}

export default DeleteItemList