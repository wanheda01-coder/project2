import React from 'react'
import {Drawer,DrawerBody,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,Button, useDisclosure, VStack, HStack} 
from "@chakra-ui/react"
import { Link } from 'react-router-dom';
import{BiMenuAltLeft} from "react-icons/bi";

const Header = () => {
  const {isOpen,onOpen,onClose} = useDisclosure();

  return ( 
  <>
   
  <Button 
  pos={'fixed'} 
  top={4} 
  colorScheme= "purple"
   p={'0'} 
   w={'10'} 
   zIndex={'overlay'}
   h={'10'}
  borderRadius={'full'}
  onClick={onOpen}

  >
    <BiMenuAltLeft size={'20'} />
</Button>

 <Drawer isOpen ={isOpen} placement= "left" onClose={onClose}>
    <DrawerOverlay />
    <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader> Video  HUB</DrawerHeader>
        <DrawerBody>
            <VStack>
                <Button onClick={onClose} variant={'ghost'} colorScheme="purple">
                    <Link to={'/'}>Home </Link>
                </Button>


                <Button onClick={onClose} variant={'ghost'} colorScheme="purple">
                    <Link to={'/videos'}>Videos </Link>
                </Button>


                <Button onClick={onClose} variant={'ghost'} colorScheme="purple">
                    <Link to={'/Videos?category=free'}>Free videos </Link>
                </Button>

                <Button onClick={onClose}variant={'ghost'} colorScheme="purple">
                    <Link to={'/Upload'}>Upload Videos </Link>
                </Button>

            </VStack>
            <HStack pos={'absolute'}
             bottom={'10'}
              left={'0'} 
             
             w={'full'}
             justifyContent={'space-evenly'}
             >


                <Button onClick={onClose} colorScheme={'purple'}>
                    <Link to={'./login'}>log in</Link>
                </Button>


                <Button onClick={onClose} colorScheme={'purple'} variant={'outline'}>
                    <Link to={'./signup'}>Sign up</Link>
                </Button>
            </HStack>
        </DrawerBody>
    </DrawerContent>
    </Drawer>
  </>
    
  );
}

export default Header;