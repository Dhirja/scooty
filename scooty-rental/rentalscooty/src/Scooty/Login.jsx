import React from 'react'
import { Container, theme,Box,Text,VStack,Input,Button,Link } from '@chakra-ui/react'
import { Navbar } from './Navbar'



export const Login = () => {


  return (
    <>
    <Navbar />
    
    <Container >
    <Box borderWidth="1px" borderRadius="lg" p={4} mt={10}>
        <Text fontSize="2xl" align="center">Create Acount</Text>
        <Text fontSize="md" align="center" pb={4}>Create an account? <Link color="teal.500" href='/register'>Create Account</Link></Text>
        <form >
        <VStack spacing={2}
        align="stretch"
        pb={3}
        >
            <Input placeholder="Username" name='username'/>
            <Input  placeholder="Password" name='password'/>
            
        </VStack>
        <Button  colorScheme="teal" variant="solid" >Log In </Button>
        </form>
    </Box>
</Container>
</>
  )
  
}