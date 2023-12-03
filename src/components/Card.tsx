import { Box, Center, Container, FormControl, FormLabel, Input } from "@chakra-ui/react";
import ButtonLogin from "./Button";
import { login } from "../services/login";

const Card = () => {
  return (
    <Container bg='blackAlpha.900' border='3px solid orange' minW='500px' minHeight="500px" padding='1.4rem' borderRadius='10px' margin='auto' marginTop='100px' display='flex' flexDirection='column'>
      <Box color='orange' fontSize='24px' fontWeight='bold' textAlign='center' marginTop='15px'>
        Faça o Login
      </Box>
      <Box marginTop='50px' color='orange' fontWeight='bold'>
        <FormControl>
          <FormLabel borderBottom='1px solid gray'>E-mail:</FormLabel>
          <Input type='email' placeholder="Digite seu e-mail..." border='2px solid orange' backgroundColor='gray.700' />
        </FormControl>
      </Box>
      <Box marginTop='50px' color='orange' fontWeight='bold'>
        <FormControl>
          <FormLabel borderBottom='1px solid gray'>Senha:</FormLabel>
          <Input type='password' placeholder="Digite sua senha..." border='2px solid orange' backgroundColor='gray.700' />
        </FormControl>
      </Box>
      <Box marginTop='50px'>
        <Center>
          <ButtonLogin textBtn="Entrar" event={login} />
        </Center>
      </Box>
    </Container>
  )
}

export default Card;