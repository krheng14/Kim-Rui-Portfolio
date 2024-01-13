//main.js
import Head from 'next/head'
import dynamic from 'next/dynamic'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'
import ShibaInuLoader from '../shiba-model-loader.js'

// Main -> Navbar -> Logo -> FootPrint
//router.asPath shows the exact URL seen by the user, including query string.

const BlenderModel = dynamic(() => import('../shiba-model.js'), {
  ssr: false,
  loading: () => <ShibaInuLoader />
})
const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Kim Rui's Portforlio</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <BlenderModel />
        {children}
      </Container>
    </Box>
  )
}

export default Main
