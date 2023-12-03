import { Box, Container } from "@chakra-ui/react"

const Header = () => {
  return (
    <Container minW='100vw' minH='10vh' bg='blue.500' padding=".3rem">
      <Box padding='1.4rem' fontWeight="extrabold" color='white' maxW='md'>
        DIO Bank
      </Box>
    </Container>
  )
}

export default Header