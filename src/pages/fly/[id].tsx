import React from 'react'
import { GetStaticPaths } from 'next'
import { dbFly } from '@/database'
import { FlyBondyTravels } from '@/components/interface';
import { GetStaticProps } from 'next'
import { Layouts } from '@/components/Layouts/Layouts';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Sidebar from '../../components/UI/SideBar/Sidebar';

interface FlyDetailProps {
    FlyData: FlyBondyTravels
}

const FlyDetail = (FlyData: FlyDetailProps) => {
    return (
        <Layouts
            title='Fly Detail'
            description='Fly Detail Page'
        >


            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'primary.main',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'primary.main',
                        marginTop: '20px',
                        marginBottom: '20px',
                        padding: '20px',
                        borderRadius: '20px',

                    }}
                >

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'start',
                            justifyContent: 'flex-start',
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'primary.main',
                            marginTop: '20px',
                            marginBottom: '20px',
                            padding: '20px',
                            borderRadius: '20px',
                        }}

                    >

                        <Image
                            src={"https://source.unsplash.com/random/?plane/800x700"}
                            alt="Picture of the author"
                            width={800}
                            height={700}
                        />


                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'primary.main',
                                marginTop: '20px',
                                marginBottom: '20px',
                                padding: '20px',
                                borderRadius: '20px',
                            }}
                        >
                            <Typography variant='h1'    >Ready for your next Travel?</Typography>
                            <h1>{FlyData.FlyData.origin}</h1>
                            <h2>Destiny</h2>
                            <p>{FlyData.FlyData.destination}</p>

                            <h2>Price</h2>
                            <p>{FlyData.FlyData.price}</p>

                            <h2>Availability</h2>
                            <p>{FlyData.FlyData.availability}</p>
                        </Box>
                    </Box>
                </div>
            </Box>

        </Layouts>
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