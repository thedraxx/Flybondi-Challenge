import React from 'react'
import { GetStaticPaths } from 'next'
import { dbFly } from '@/database'
import { FlyBondyTravels } from '@/components/interface';
import { GetStaticProps } from 'next'
import { Layouts } from '@/components/Layouts/Layouts';

interface FlyDetailProps {
    FlyData: FlyBondyTravels
}

const FlyDetail = (FlyData: FlyDetailProps) => {

    console.log(FlyData)

    return (
        <Layouts
            title='Fly Detail'
            description='Fly Detail Page'
        >
            xd
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