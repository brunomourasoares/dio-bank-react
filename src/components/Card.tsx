import { Box, Center, Container, FormControl, FormLabel, Input } from "@chakra-ui/react";
import ButtonLogin from "./Button";
import { login } from "../services/login";

const Card = () => {
  return (
    <Container bg='blue.500' border='3px solid #3182CE' minW='800px' minHeight="500px" padding='1.4rem' borderRadius='10px' margin='auto' marginTop='100px' display='flex' flexDirection='column'>
        <Box color='white' fontSize='24px' fontWeight='bold' textAlign='center' marginTop='15px'>
          Login de Usuário
        </Box>
        <Center>
        <Box marginTop='50px' color='white' fontWeight='bold' minW='400px'>
          <FormControl>
            <FormLabel>E-mail:</FormLabel>
            <Input type='email' placeholder="Digite seu e-mail..." border='2px solid #3182FF' backgroundColor='gray.200' color="black" />
          </FormControl>
        </Box>
        </Center>
        <Center>
        <Box marginTop='50px' color='white' fontWeight='bold' minW='400px'>
          <FormControl>
            <FormLabel>Senha:</FormLabel>
            <Input type='password' placeholder="Digite sua senha..." border='2px solid #3182FF' backgroundColor='gray.200' color="black" />
          </FormControl>
        </Box>
        </Center>
        <Box marginTop='50px'>
          <Center>
            <ButtonLogin textBtn="Entrar" event={login} />
          </Center>
        </Box>
    </Container>
  )
}

export default Card;