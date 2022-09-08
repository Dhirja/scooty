import { Container, theme,Box,Text,VStack,Input,Button,Link } from '@chakra-ui/react'
import React from 'react'
import { Navbar } from './Navbar'


const Signup = () => {
    
  return (
    <>
       <Navbar />
    
    <Container >
        <Box borderWidth="1px" borderRadius="lg" p={4} mt={10}>
            <Text fontSize="2xl" align="center">Create Acount</Text>
            <Text fontSize="md" align="center" pb={4}>Already have an account? <Link color="teal.500" href='/Login'>Login</Link></Text>
            <form>
            <VStack spacing={2}
            align="stretch"
            pb={3}>
                <Input  placeholder="Name" name='firstName' />
                <Input  placeholder="Email"  name='email'/>
                <Input  placeholder="Password"  name="password" />
                <Input  placeholder="Username" name="lastName"/>
                <Input  placeholder="Mobile" name='mobile'/>
               
            </VStack>
            <Button type='submit' colorScheme="teal" variant="solid" >Create Account</Button>
            </form>
        </Box>
    </Container>
  </>
  )
}

export default Signup