import React, { useState, useEffect } from 'react'
import { Layouts } from '@/components/Layouts/Layouts'
import { SearchOutlined } from '@mui/icons-material'
import { Box, Button, FormControl, Grid, MenuItem, Select, Typography } from '@mui/material'
import Image from 'next/image'
import { FlyBondyTravels } from '@/components/interface'
import { CardFlies } from '@/components/UI/CardFlies'
import { dbFly } from '@/database'
import { GetStaticProps } from 'next'
import { UpdateCurrent, HandleChange } from '@/components/hook'

interface DataRecivedProps {
  dataFlies: FlyBondyTravels[]
}

export default function Home({ dataFlies }: DataRecivedProps) {

  const [dataFliesPagination, setDataFliesPagination] = useState<FlyBondyTravels[]>([])
  const { currentPage, updatePage } = UpdateCurrent.default()
  const { FlyOrigin, FlyDestiny, handleChangeOrigin, handleChangeDestiny } = HandleChange.default()

  useEffect(() => {

    const actualNumber = currentPage * 10

    const prevNumber = actualNumber - 10

    const tempArrayFlies: React.SetStateAction<FlyBondyTravels[]> = []

    dataFlies.slice(prevNumber, actualNumber).map((fly) => {
      tempArrayFlies.push(fly)
    }) // De esta forma se puede hacer un slice de un array de 10 en 10

    setDataFliesPagination(tempArrayFlies)

  }, [currentPage])


  return (
    <Layouts
      title="Flybondi"
      description="Flybondi es una aerolínea argentina de bajo costo con sede en Buenos Aires, Argentina. La aerolínea opera vuelos a destinos nacionales e internacionales desde su base en el Aeropuerto Internacional de Ezeiza."
    >

      <Box
        display={'flex'}
        flex={1}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          backgroundColor: 'primary.main',
          height: { xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto' },
          width: '100%',
          padding: '2rem',
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
            flexDirection: 'column',
            width: '100%',
          }}>

          <Box
            sx={{
              paddingBottom: '0.5rem',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              width: '250px',
              height: 'auto',
              textAlign: 'center',
            }}
          >

            <Typography variant="h6" component="div" gutterBottom >
              Origen
            </Typography>
            <FormControl fullWidth>
              <Select
                labelId="origin"
                id="origin"
                value={FlyOrigin}
                label="Origin"
                onChange={(e) => handleChangeOrigin(e)}
                sx={{
                  backgroundColor: 'primary.contrastText',
                  padding: '0.5rem',
                }}
              >
                <MenuItem value={"BRC"}>BRC</MenuItem>
                <MenuItem value={"COR"}>COR</MenuItem>
                <MenuItem value={"EPA"}>EPA</MenuItem>
                <MenuItem value={"MDZ"}>MDZ</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box
            className='flex justify-center items-center flex-col'
            sx={{
              paddingBottom: '0.5rem',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              width: '250px',
              textAlign: 'center',
            }}
          >

            <Typography variant="h6" component="div" gutterBottom >
              Destino
            </Typography>
            <FormControl fullWidth>
              <Select
                labelId="destino"
                id="destino"
                value={FlyDestiny}
                label="Destino"
                onChange={(e) => handleChangeDestiny(e)}
                sx={{
                  backgroundColor: 'primary.contrastText',
                  padding: '0.5rem',
                }}
              >
                <MenuItem value={"BRC"}>BRC</MenuItem>
                <MenuItem value={"COR"}>COR</MenuItem>
                <MenuItem value={"EPA"}>EPA</MenuItem>
                <MenuItem value={"MDZ"}>MDZ</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Button
            variant="contained"
            sx={{
              backgroundColor: 'primary.main',
              color: 'primary.contrastText',
              marginTop: '1rem',
              width: '250px',
              '&:hover': {
                backgroundColor: 'primary.dark',
              },
            }}
          >
            <SearchOutlined
              className='mr-2 ml'
            />
          </Button>
        </Box>

        <Box
          display={'flex'}
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: { xs: 'column', sm: 'row' },
            width: '100%',
            marginTop: '1rem',
          }}
        >
          <Button
            onClick={() => updatePage("prev")}
          >
            Anterior
          </Button>

          <Button
            onClick={() => updatePage("next")}
            sx={{
              marginTop: { xs: '1rem', sm: '0' },
              marginLeft: { xs: '0', sm: '1rem' },
            }}
          >
            Siguiente
          </Button>
        </Box>

        <Grid
          container
          spacing={3}
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{
            marginTop: '1rem',
            width: '100%',
          }}
        >
          {
            dataFliesPagination.length > 0 && dataFliesPagination.map((fly, index) => (
              <Grid
                item
                xs={12}
                sm={12}
                md={2}
                key={index}>
                <CardFlies fly={fly} />
              </Grid>
            ))
          }
        </Grid>
      </Box>
    </Layouts >
  )
}



// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps: GetStaticProps = async (ctx) => {
  const dataFlies = await dbFly.getFlyByOriginDestiny()
  const dataFliesJSON = JSON.parse(JSON.stringify(dataFlies))
  return {
    props: {
      dataFlies: dataFliesJSON
    }
  }
}