import { Box, Container } from "@chakra-ui/react"


const Footer = () => {
  return (
    <Container minW='100vw' minH='14.8vh' centerContent marginTop='100px' backgroundColor='blue.500'>
      <Box color='white' fontWeight='bold' marginTop='55px'>
        <p>DIO Bank</p>
      </Box>
    </Container>
  )
}

export default Footer