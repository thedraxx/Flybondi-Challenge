import { UiContext } from '@/context/ui';
import { AccountCircleOutlined, ConfirmationNumberOutlined, HomeOutlined, MenuOpenOutlined, VpnKeyOutlined } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import Link from 'next/link'
import React from 'react'
import { useContext } from 'react';

const Navbar = () => {

    const { isMenuOpen, toggleSideMenu } = useContext(UiContext)

    return (
        <Box
            sx={
                {
                    width: '100%',
                    height: '100px',
                    backgroundColor: 'primary.dark',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    fontSize: '1.5rem',
                    fontWeight: 'bold'
                }
            }
        >
            <div
                style={
                    {
                        display: 'flex',
                        flex: 1,

                    }}
            />
            <div
                style={
                    {
                        width: '80%',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'self-end'
                    }}
            >


                <Box
                    sx={

                        {
                            display: { xs: 'none', sm: 'flex' },
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: '20px',
                            cursor: 'pointer',
                        }
                    }
                >
                    <Link href="/">
                        <h6 style={{ cursor: 'pointer', marginRight: '20px' }}>
                            <HomeOutlined style={{ marginRight: '10px', alignItems: "center", justifyContent: "center", fontSize: '1rem' }} />
                            Home
                        </h6>
                    </Link>

                    <Link href="/">
                        <h6 style={{ cursor: 'pointer', marginRight: '20px' }}>
                            <AccountCircleOutlined style={{ marginRight: '10px', alignItems: "center", justifyContent: "center", fontSize: '1rem' }} />
                            Profile
                        </h6>
                    </Link>


                    <Link href="/">
                        <h6 style={{ cursor: 'pointer', marginRight: '20px' }}>
                            <ConfirmationNumberOutlined
                                style={{ marginRight: '10px', alignItems: "center", justifyContent: "center", fontSize: '1rem' }}

                            />
                            History
                        </h6>
                    </Link>

                    <Link href="/">
                        <h6 style={{ cursor: 'pointer', marginRight: '20px' }}>
                            <VpnKeyOutlined style={{ marginRight: '10px', alignItems: "center", justifyContent: "center", fontSize: '1rem' }} />
                            Login
                        </h6>
                    </Link>


                </Box>

                <Box
                    sx={

                        {
                            display: { xs: 'flex', sm: 'none' },
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            alignItems: 'flex-end',
                            marginRight: '20px',
                            cursor: 'pointer',
                            '&:hover': {
                                color: 'primary.main'
                            }
                        }
                    }
                >
                    <MenuOpenOutlined
                        onClick={toggleSideMenu}
                        style={{ cursor: 'pointer', marginRight: '0px', alignSelf: 'flex-end', fontSize: '1.5rem' }}

                    />

                </Box>


            </div >





        </Box >
    )
}

export default Navbar