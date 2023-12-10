"use client"
import React, { useState } from 'react';
import {
    Box,
    Text,
    Button,
    Image,
    Stack
} from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { FiArrowRight } from "react-icons/fi";


export default function HeroSection() {
    const settings = {
      
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
       
    };

    return (
        <Slider {...settings}>
            <Box key={1} position="relative">
                <Image
                    src='./homepage-5-slider-img-3.jpg'
                    alt="Hero Image 1"
                    w="100%"
                    h="1000px"
                    objectFit="cover"
                />
                <Box
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    textAlign="center"
                    color="white"
                >
                    <Text
                        bgGradient='linear(to-l, #fff, #fff)'
                        color='white'
                        bgClip='text'
                        fontSize={['4xl', '5xl', '6xl']}
                        fontWeight='extrabold'
                    >
                        Destiny Doctors Uganda
                    </Text>
                    <Text fontSize="xl">
                        We are transforming healthcare in our society. Want to join this exciting journey?
                    </Text>
                    <Box py='7'>
                        <Button
                            rightIcon={<FiArrowRight />}
                            bg='white'
                            variant='outline'
                            as="button"
                            color='#37B34A'
                            px="12"
                            py="7"
                            fontWeight="bold"
                            _hover={{ bg: '#214B24' }}
                        >
                            Contact us
                        </Button>
                    </Box>
                </Box>
            </Box>

            <Box key={2} position="relative">
                <Image
                    src='./Carousel_community.jpg'
                    alt="Hero Image 1"
                    w="100%"
                    h="1000px"
                    objectFit="cover"
                />
                <Box
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    textAlign="center"
                    color="white"
                >
                    <Text
                        bgGradient='linear(to-l, #fff, #fff)'
                        color='white'
                        bgClip='text'
                        fontSize={['4xl', '5xl', '6xl']}
                        fontWeight='extrabold'
                    >
                       Called to serve
                    </Text>
                    <Text fontSize="xl">
                        We are transforming healthcare in our society. Want to join this exciting journey?
                    </Text>
                    <Box py='7'>
                        <Button
                            rightIcon={<FiArrowRight />}
                            bg='white'
                            variant='outline'
                            as="button"
                            color='#37B34A'
                            px="12"
                            py="7"
                            fontWeight="bold"
                            _hover={{ bg: '#214B24' }}
                        >
                            Contact us
                        </Button>
                    </Box>
                </Box>
            </Box>

            <Box key={3} position="relative">
                <Image
                    src='./Casest-7.jpg'
                    alt="Hero Image 3"
                    w="100%"
                    h="100%"
                    objectFit="cover"
                />
                <Box
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    textAlign="center"
                    color="white"
                >
                    <Text
                        bgGradient='linear(to-l, #fff, #fff)'
                        color='white'
                        bgClip='text'
                        fontSize={['4xl', '5xl', '6xl']}
                        fontWeight='extrabold'
                    >
                        Destiny Doctors Uganda
                    </Text>
                    <Text fontSize="xl">
                        We are transforming healthcare in our society. Want to join this exciting journey?
                    </Text>
                    <Box py='7'>
                        <Button
                            rightIcon={<FiArrowRight />}
                            bg='white'
                            variant='outline'
                            as="button"
                            color='#37B34A'
                            px="12"
                            py="7"
                            fontWeight="bold"
                            _hover={{ bg: '#214B24' }}
                        >
                            Contact us
                        </Button>
                    </Box>
                </Box>
            </Box>

            {/* Repeat the above structure for other slides */}
            {/* <Box key={2}>...</Box>
      <Box key={3}>...</Box> */}
        </Slider>
    );
}
