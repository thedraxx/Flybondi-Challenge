import React, { useState } from 'react'
import { GetStaticPaths } from 'next'
import { dbFly } from '@/database'
import { FlyBondyTravels } from '@/components/interface';
import { GetStaticProps } from 'next'
import { Layouts } from '@/components/Layouts/Layouts';
import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';


interface FlyDetailProps {
    FlyData: FlyBondyTravels
}

const FlyDetail = (FlyData: FlyDetailProps) => {

    const [updateCounter, setUpdateCounter] = useState(0)


    const handleUpdateCounter = (action: string) => {
        if (action === "add") {
            if (updateCounter < FlyData.FlyData.availability) {
                setUpdateCounter(updateCounter + 1)
            }
        }
        if (action === "remove") {
            if (updateCounter > 0) {
                setUpdateCounter(updateCounter - 1)
            }
        }
    }

    return (
        <Layouts
            title='Fly Detail'
            description='Fly Detail Page'
        >
            <Box
                sx={{
                    width: '100%',
                    height: '100vh',
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'primary.light',
                }}
            >
                <Typography
                    variant='h1'
                    sx={{
                        fontWeight: 'bold',
                        color: 'primary.text',
                        textAlign: 'center',
                        marginTop: '20px',
                    }}
                >
                    Welcome Traveler!
                </Typography>
                <Box
                    sx={{
                        width: { xs: '100%', sm: '100%', md: '100%', lg: '70%', xl: '50%' },
                        height: 'auto',
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row' },
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '40px',

                    }}
                >
                    <Image
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%',
                            height: '100%',
                            borderRadius: '50px',
                            boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
                            marginRight: '25px',
                        }}
                        src={"https://source.unsplash.com/random/?plane/800x700"}
                        alt="Picture of the author"
                        width={800}
                        height={700}
                    />


                    <Box>
                        <Typography
                            variant='h6'
                            sx={{
                                fontWeight: 'bold',
                                color: 'primary.text',
                                textAlign: 'center',
                                marginTop: '20px',
                            }}
                        >
                            from {FlyData.FlyData.origin} to {FlyData.FlyData.destination}
                        </Typography>

                        <Typography
                            variant='h6'
                            sx={{
                                fontWeight: 'bold',
                                color: 'primary.text',
                                textAlign: 'center',
                                marginTop: '20px',
                            }}
                        >
                            Date: {FlyData.FlyData.data}
                        </Typography>


                        <Typography

                            variant='h6'
                            sx={{
                                fontWeight: 'bold',
                                color: 'primary.text',
                                textAlign: 'center',
                                marginTop: '20px',
                            }}
                        >
                            Availability: {FlyData.FlyData.availability} Tickets
                        </Typography>

                        <Typography
                            variant='h6'
                            sx={{
                                fontWeight: 'bold',
                                color: 'primary.text',
                                textAlign: 'center',
                                marginTop: '20px',
                            }}
                        >
                            Value for Ticket: {FlyData.FlyData.price} $
                        </Typography>

                        <Box
                            sx={{
                                width: '100%',
                                height: 'auto',
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: '20px',
                            }}
                        >


                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: 'primary.main',
                                    color: 'primary.text',
                                    marginRight: '10px',
                                    '&:hover': {
                                        backgroundColor: 'primary.dark',
                                    },
                                }}
                                onClick={() => handleUpdateCounter("remove")}
                            >
                                -
                            </Button>
                            <Typography
                                variant='h6'
                                sx={{
                                    fontWeight: 'bold',
                                    color: 'primary.text',
                                    textAlign: 'center',

                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    alignSelf: 'center',
                                    alignContent: 'center',

                                }}
                            >
                                {updateCounter}
                            </Typography>
                            <Button

                                variant="contained"
                                sx={{
                                    backgroundColor: 'primary.main',
                                    color: 'primary.text',
                                    marginLeft: '10px',
                                    '&:hover': {
                                        backgroundColor: 'primary.dark',
                                    },
                                }}
                                onClick={() => handleUpdateCounter("add")}
                            >
                                +
                            </Button>

                        </Box>
                    </Box>

                </Box>

            </Box>

        </Layouts >
    )
}


export const getStaticPaths: GetStaticPaths = async () => {
    const dataFlies = await dbFly.getFlyByOriginDestiny()

    if (!dataFlies) {
        return {
            paths: [],
            fallback: "blocking"
        }
    }

    return {
        paths: dataFlies.map((fly) => ({
            params: { id: fly._id.toString() }
        })),
        fallback: "blocking"
    }
}




export const getStaticProps: GetStaticProps = async ({ params }) => {
    // Leemos el id de la url de getStaticPaths
    const { id } = params as { id: string };

    const FlyData = await dbFly.getFlyByID(id)
    const FlyDataJSON = JSON.parse(JSON.stringify(FlyData))

    if (!FlyData) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            FlyData: FlyDataJSON
        },
        revalidate: 86400
    }
}


export default FlyDetail