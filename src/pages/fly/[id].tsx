import React from 'react'
import { GetStaticPaths } from 'next'
import { dbFly } from '@/database'
import { FlyBondyTravels } from '@/components/interface';
import { GetStaticProps } from 'next'
import { Layouts } from '@/components/Layouts/Layouts';
import { Box } from '@mui/material';

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
                    height: { xs: '30vh', sm: '35vh', md: '35vh', lg: '35vh' },
                    marginTop: '1rem',
                    backgroundColor: 'primary.main',
                }}


            >
                <h1>{FlyData.FlyData.origin}</h1>

                <Box>
                    <h2>Destiny</h2>
                    <p>{FlyData.FlyData.destination}</p>

                    <h2>Price</h2>
                    <p>{FlyData.FlyData.price}</p>

                    <h2>Availability</h2>
                    <p>{FlyData.FlyData.availability}</p>



                </Box>
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