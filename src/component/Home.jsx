import { Box, Container, Heading, Image, Stack } from '@chakra-ui/react';
import React from 'react';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../asset/1.jpg';
import img2 from '../asset/2.jpg';
import img3 from '../asset/3.jpg';
import img4 from '../asset/4.jpg';
import img5 from '../asset/5.png';


const headingOptions = {
    pos:'abslute',
    left : '50%',
    top:'50%',
    Transform:'translate(-50%,-50%)',
    textTransform:'uppercase',
    p:'4',
    size : '4xl',
}
const Home = () => {
  return (
<Box>
<MyCarousel />
<Container maxW={'container.xl'} minH={'100vh'} p="16">
  <Heading textTransform={"uppercase"} py="2" w={"fit-content"} bodderBottom={'2px solid'}
  m="auto" > Service</Heading>
  <Stack 
  h="full"
  p={'4'}
  direction={['column','row']}>
    <Image src ={img5} h={['40','400']} filter={'hue-rotate(-130geg'} />
    <text>
      internetislove internetislove internetislove internetislove internetislove
      internetislove internetislove internetislove internetislove internetislove
      internetislove internetislove internetislove internetislove internetislove
      internetislove internetislove internetislove internetislove internetislove
    </text>
  </Stack>
</Container>

</Box>
  );
}


  const MyCarousel  =() =>
  (
    <Carousel
     autoPlay
    infiniteLoop 
    interval={1000}
    showStatus ={ false}
    showThumbs={ false}
    showArrows ={ false}>

        <Box w={"full"} h={'100vh'}>
            <Image src = {img1} />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}> 
            watch the future 
            </Heading>

        </Box>

        <Box w="full" h={'100vh'}>
            <Image src = {img2} />
            <Heading bgColor={'blackAlpha.600'} color={'white'}
             {...headingOptions}> 
             future is gaming 
            </Heading>

</Box>
<Box w="full" h={'100vh'}>
            <Image src = {img3} />
            <Heading bgColor={'blackAlpha.600'} color={'white'}
             {...headingOptions}> 
             gaming on conslue
            </Heading>

</Box>
<Box w="full" h={'100vh'}>
            <Image src = {img4} />
            <Heading bgColor={'blackAlpha.600'} color={'white'}
             {...headingOptions}>
               night life  is fun
            </Heading>

</Box>

    </Carousel>
  );

  
export default Home;