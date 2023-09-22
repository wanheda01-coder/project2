import { Box, Stack, VStack,HStack, Input, Button,Heading ,Text} from '@chakra-ui/react'
import React from 'react';
import {AiOutlineSend} from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} minH={'40'} p="16" color={'white'}>
<Stack direction={['column','row']}>
    <VStack alignItems={'strecth'} w={"full"} px={"4"}>

        <Heading size ="md" textTransform ={'uppercase'}>
            Subscribe to get update
        </Heading>
<HStack bodderBottom ={ "2px solid white"} py="2">
<Input placeholder="Enter your mail here..." 
border={"none"} 
borderRadius={"none"}/>
<Button 
p={'0'}
colorScheme={'purple'}
variant={'ghost'}
borderRadius={'0 20px 20px 0'}
>
<AiOutlineSend size={20}/>
</Button>
</HStack>
</VStack>
<VStack 
w={'full'}
borderLeft={['none','1px solid white']}
borderRight={['none', '1px solid white']}>
    <Heading textTransform={"uppercase"} textAlign={"center"}>
        VIDEO HUB
    </Heading>
<Text>ALL RIGHT RGISTERED</Text>
</VStack>
<VStack 
w={'full'}
borderLeft={['none','1px solid white']}
>
    <Heading>Social media</Heading>
    <Button variant={"link"} colorScheme={"whiteAlpha"}>
        <a href="https://youtube.com">youtube</a>
        
    </Button>
    <Button variant={"link"} colorScheme={"whiteAlpha"}>
        <a href="https://instagram.com">Instagram</a>
        
    </Button>
    <Button variant={"link"} colorScheme={"whiteAlpha"}>
        <a href="https://github.com">github</a>
        
    </Button>


</VStack>
</Stack>

    </Box>
  )
}

export default Footer;