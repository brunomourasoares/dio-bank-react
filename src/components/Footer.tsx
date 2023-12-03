import { Box, Container } from "@chakra-ui/react"


const Footer = () => {
  return (
    <Container minW='100vw' minH='17vh' centerContent borderTop='1px solid black' marginTop='100px' backgroundColor='gray.300'>
      <Box color='black' fontWeight='bold' marginTop='20px'>
        <p>Dio Bank &copy;</p>
      </Box>
    </Container>
  )
}

export default Footer