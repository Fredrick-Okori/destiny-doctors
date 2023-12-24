'use client'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Image, Grid, Container, Heading} from '@chakra-ui/react';



export default function Partners(){

const logos = [
        {
           id: 1,
            image: ("/images/MOH.jpg"),
      
        },
        {
            id: 2,
            image: ("/images/tech.jpg"),
        
        },
        {
            id: 3,
            image: ("/images/ICC.png"),
    },
    {
        id: 4,
        image: ("/images/Apar.png"),
    },
    {
        id: 5,
        image: ("/images/ggave.png"),
    },
        // Add more slides as needed
    ];    
    

    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        lazyLoad: true,
        autoplaySpeed: 3000,
       
    };
    return (
        <Container maxW='container.2xl' py='7' mt='10' background={'white'}>
            <Heading as={'h4'} textAlign={'center'} mb={'10'} color={''}>Trusted Partners</Heading>
            <Slider {...settings}>
                
            {logos.map((logo, index) => (
                <div key={index}>
                   
                    <Image src={logo.image} alt={`Logo ${index + 1}`} style={{ width: '40%' }} />
                </div>
            ))}
            </Slider>    
        </Container>
    );
};


