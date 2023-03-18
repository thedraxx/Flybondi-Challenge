import { Box, Divider, Drawer, IconButton, Input, InputAdornment, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from "@mui/material"
import { AccountCircleOutlined, AdminPanelSettings, CategoryOutlined, ConfirmationNumberOutlined, EscalatorWarningOutlined, FemaleOutlined, HomeOutlined, LoginOutlined, MaleOutlined, SearchOutlined, VpnKeyOutlined } from "@mui/icons-material"
import { useRouter } from 'next/router';
import { UiContext } from '../../../context/ui/UiContext';
import { useContext } from "react";
import React, { useState } from 'react';


const Sidebar = () => {
    const { toggleSideMenu, isMenuOpen } = useContext(UiContext)

    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter()

    const onSearchTerm = () => {
        console.log(searchTerm)
        if (searchTerm.trim().length === 0) return

        navigateTo(`/search/${searchTerm}`)

    }

    const navigateTo = (url: string) => {
        toggleSideMenu();
        router.push(url)
    }

    return (
        <Drawer
            open={isMenuOpen}
            anchor='right'
            onClose={toggleSideMenu}
            sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
        >
            <Box sx={{ width: 250, paddingTop: 5 }}>

                <List>

                    <ListItem>
                        <Input
                            autoFocus
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' ? onSearchTerm() : null}
                            type='text'
                            placeholder="Buscar..."
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={onSearchTerm}
                                    >
                                        <SearchOutlined />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </ListItem>

                    <ListItem>
                        <ListItemIcon>
                            <HomeOutlined />
                        </ListItemIcon>
                        <ListItemText primary={'Home'} />
                    </ListItem>

                    <ListItem>
                        <ListItemIcon>
                            <AccountCircleOutlined />
                        </ListItemIcon>
                        <ListItemText primary={'Profile'} />
                    </ListItem>

                    <ListItem>
                        <ListItemIcon>
                            <ConfirmationNumberOutlined />
                        </ListItemIcon>
                        <ListItemText primary={'History'} />
                    </ListItem>

                    <ListItem>
                        <ListItemIcon>
                            <VpnKeyOutlined />
                        </ListItemIcon>
                        <ListItemText primary={'login'} />
                    </ListItem>
                    <Divider />
                </List>
            </Box>
        </Drawer>
    )
}

export default Sidebar