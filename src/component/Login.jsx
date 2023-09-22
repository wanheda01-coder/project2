import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React from 'react'

export const Login = () => {
  return (
    <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
<form>

<VStack alignItems={'stretch'}
spacing={'8'}
w={'96'}
m={'auto'}
my={'16'}>
    <Heading>Welcome back</Heading> 
    <Input placeholder={"Email"} type={'email'} required
    focusBorderColor={'purple.500'} />
    
    <Input placeholder={"password"} type={'password'} required
    focusBorderColor={'purple.500'} />
    

    <Button>
      gg
    </Button>
</VStack>


</form>



    </Container>
  )
}
export default Login;