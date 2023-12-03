import { Box, Container } from "@chakra-ui/react"

const Header = () => {
  return (
    <Container minW='100vw' minH='10vh' bg='orange' centerContent borderBottom="2px" padding=".3rem">
      <Box padding='1.4rem' bg='#ff8601' fontWeight="extrabold" color='black' maxW='md' borderRadius="7px">
        DIO Bank
      </Box>
    </Container>
  )
}

export default Header