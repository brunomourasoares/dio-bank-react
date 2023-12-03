import { Button } from "@chakra-ui/react"

interface ICard {
    textBtn: string
    event: () => void
}

const ButtonLogin = ({textBtn, event}: ICard) => {
    return (
        <Button color='black' fontWeight='bold' padding='1.5rem' minWidth='150px' colorScheme="orange" onClick={event}>{textBtn}</Button>
    )
}

export default ButtonLogin