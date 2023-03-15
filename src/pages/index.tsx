import React, { useState } from 'react'
import { Layouts } from '@/components/Layouts/Layouts'
import { SearchOffOutlined } from '@mui/icons-material'
import { Box, Button, Grid, Input } from '@mui/material'
import Image from 'next/image'
import { FlyBondyTravels } from '@/components/interface'
import { CardFlies } from '@/components/UI/CardFlies'

export default function Home() {

  const [tempFlyTravels, seTtempFlyTravels] = useState<FlyBondyTravels[]>([
    {
      data: "2023-11-15",
      origin: "COR",
      destination: "MDZ",
      price: 474.05,
      availability: 9
    },
    {
      data: "2023-11-15",
      origin: "COR",
      destination: "BRC",
      price: 197.68,
      availability: 2
    }
  ])

  return (
    <Layouts
      title="Flybondi"
      description="Flybondi es una aerolínea argentina de bajo costo con sede en Buenos Aires, Argentina. La aerolínea opera vuelos a destinos nacionales e internacionales desde su base en el Aeropuerto Internacional de Ezeiza."
    >

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          height: '100vh',
          width: '100vw',
          backgroundColor: 'primary.main',
          color: 'primary.contrastText'
        }}
      >
        <Image
          src="/flybondi.svg"
          alt="Flybondi Logo"
          width={200}
          height={200}
        />


        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            height: '50px',
            width: '100%',

          }}
        >
          <Input
            placeholder="Origin"
            inputProps={{ 'aria-label': 'description' }}
            sx={{
              color: 'primary.contrastText',
            }}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'primary.main',
              color: 'primary.contrastText',
              '&:hover': {
                backgroundColor: 'primary.dark',
              },
            }}
          >
            <SearchOffOutlined
              className='mr-2 ml'
            />
          </Button>
        </Box>

        <Grid
          container
          spacing={2}
          sx={{
            marginTop: '3rem',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}
        >
          {
            tempFlyTravels.length > 0 && tempFlyTravels.map((fly, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={index}
              >
                <CardFlies fly={fly} />
              </Grid>
            ))
          }
        </Grid>
      </Box>
    </Layouts >
  )
}
