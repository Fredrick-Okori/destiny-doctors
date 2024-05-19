import React from "react";
import {
    Box,
    Flex,
    Heading,
    HStack,
    Icon,
    Image,
    Link,
    Text,
    Skeleton,
    Container,
    Stack,
    useColorModeValue,
    Divider,
    Grid,
    GridItem,
} from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowRight, FaFileMedical } from 'react-icons/fa';
import { FiBriefcase, FiFile, FiHeart, FiMonitor, FiPaperclip, FiSearch, FiUser, FiSmile } from "react-icons/fi";

const slides = [
    {
        id: 1,
        image: './surgery.jpeg', 
    },
    {
        id: 2,
        image: './lab.jpeg',    
    },
    {
        id: 3,
        image: './rwimi_ncd.jpg',  
    },
    {
        id: 4,
        image: './group_team.jpg',
    },
   
    
];

const activities = [
    {
        id: 1,
        icon: <FaFileMedical size='40'/>,
        title: "Community-based medical Outreaches",
        description: 'The program is putting the community at the fore front giving it full control in handling their own health. The program has recruited volunteers from the different professions and specialities especially medical providing high class and up to date information and training to the villages that they would rather have no access to. ',
    },
    {
        id: 2,
        icon: <FiHeart size='40' />,
        title: "Primary Health Care",
        description: 'It is our strong belief that improving primary health care, improving appropriate access and health outcomes can most cost- effectively be achieved by enhancing existing health systems especially in villages.The Destiny Doctors fratenity seeks to back up this belief through proactively providing evidence of successul pilot community clinic projects to the public and government',
    },
    {
        id: 3,
        icon: <FiUser size='40' />,
        title: "Mentorship",
        description: 'This program is tailored to help and give hope to children in school. We give guidance to students to streamline their feature decisions. Still in this program we provide Continuous Professional Development (CPD), Global Professional Exchange, and Scholarships to children & students at all levels',
    },
    {
        id: 5,
        icon: <FiSearch size='40' />,
        title: "Research",
        description: 'To improve and increase access to healthcare in under-served communities, research is paramount. We have a group of professionals who carry out community based research to influence decision making while scaling services to these communities. '
    },
    {
        id: 6,
        icon: <FiSmile size='40'/>,
        title: 'Maternal Care',
        description: 'Under this programe we are provide safe maternal delivery and early childhoold services to pregnant women. We distribute Mama Kit - delivery kit as support to previlledged mothers'
    }
   

]


function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green", borderRadius: '100%', marginLeft: '10px'}}
            onClick={onClick}
        />
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green", borderRadius: '100%', marginRight: '10px' }}
            onClick={onClick}
        />
    );
}

export default function About() {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
        speed: 2000,
        autoplaySpeed: 500,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />

    };

    return <>
        <Box position="relative">
            <Image
                src='./service.jpg'
                alt={`Hero Image `}
                w="100%"
                h="60vh"
                objectFit="cover"
            />
            <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                textAlign="left"
                color="white"
            >
                <Text
                    bgGradient='linear(to-l, #fff, #fff)'
                    color='white'
                    bgClip='text'
                    fontSize={['2xl', '5xl', '6xl']}
                    fontWeight='extrabold'
                    noOfLines={1}
                >
                    Who we are
                </Text>
                <Text textAlign='left'>
                    We have a broad expertise in digital health <br /> service execution and
                    management with our diverse<br /> and multi talented team with experience and skills in<br /> Public Health, Technology, Nursing, Laboratory
                    and holistic healthcare.
                </Text>
            </Box>
        </Box>
        <Container maxW='100%' bgImage="url('/customer-circles-temp.png')"
            bgColor='#f5f7f9'
            bgSize="cover"
            bgPosition="center"
            h="auto" // Set the desired height
            w="100%"
        >
            <Container
                maxWidth='container.xl'
                py={{
                    base: '16',
                    md: '24',
                }}
            >
                <Stack
                    spacing={{
                        base: '8',
                        md: '10',
                    }}
                >
                    <Stack
                        spacing={{
                            base: '4',
                            md: '5',
                        }}
                        align="center"
                    >
                        <Flex direction={{ base: 'column-reverse', lg: 'row' }} alignItems='center'

                            gap='4'
                        >
                            <Box bg='#f5f7f9' boxShadow={"var(--chakra-shadows-xl)"} mr={{base: '10', lg: '-10'}} borderRadius='7'>

                                <Text color="#214B24" maxW="2xl" textAlign="justify" fontSize="xl" p='20' >
                                    Having personally witnessed the
                                    hardships and heartbreak
                                    endured by those denied access
                                    to quality medical care, an
                                    experience tragically compounded
                                    by the loss of my siblings, my resolve
                                    to effect change was unyielding.
                                    This intimate encounter, alongside
                                    witnessing similar struggles in other
                                    communities, stirred within me a profound
                                    empathy and an unwavering determination to
                                    alleviate the healthcare disparities afflicting
                                    underserved populations.

                                </Text>
                                <Text color='#37B34A' textAlign='right' pr='20'>
                                    Dr. John Bosco Ssemuyaba
                                </Text>
                                <Text color='#37B34A' textAlign='right' pr='20' pb='20'>
                                    Founder & President
                                </Text>
                            </Box>

                            <Box >
                                <Image src="/founder.jpeg" maxW='500px'
                                    opacity={0.8}
                                    transition="opacity .25s ease-in-out"
                                    _mozTransition="opacity .25s ease-in-out" // for Firefox
                                    _webkitTransition="opacity .25s ease-in-out"
                                    _hover={{

                                    cursor: 'pointer',
                                    opacity: '0.5',
                                    backgroundColor: "rgba(0,0,0,.5)"
                                }} alt="Founder" borderRadius='7' />

                            </Box>

                        </Flex>

                    </Stack>

                </Stack>
            </Container>
            <Container maxW='container.xl'>
                <Heading
                    fontSize='4xl'
                    as={'h2'}
                    color='#214B24'
                    textAlign='center'
                    pb='10px'
                    paddingRight='60px'
                >
                    What we do
                    <Divider mt='10' />
                </Heading>
                <Grid templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(3, 1fr)', 'repeat(3, 1fr)']}
                    gap={8}
                    p={10}
                    pb={'10'}
                    mt={"10"}
                    >
                    {activities.map((activity) => (
                        <GridItem key={activity.id} position="relative"
                            borderRadius={"var(--chakra-radii-lg)"}
                            overflow="hidden"
                            borderColor={'var(--chakra-colors-gray-200)'}
                            bg={"white"}
                            boxShadow={"var(--chakra-shadows-xl)"}
                            p={4}
                            textAlign="center"
                            alignItems={'center'}
                            transition="transform 300ms cubic-bezier(0, 0, 0.2, 1)"
                            opacity={0.8}
                           
                            _mozTransition="opacity .25s ease-in-out" // for Firefox
                            _webkitTransition="opacity .25s ease-in-out"
                            _hover={{
                                transform: "scale(1.05)",
                                opacity: '0.5',
                                 transition: "opacity .25s ease-in-out"
                            }}
                            padding={'10'}
                        >
                            <Flex direction="column" alignItems='center'>
                                <Box>
                                    <Text textAlign='center' pb='3'>{activity.icon}</Text> 
                               </Box>
                                <Box alignItems='center' pb='5'>
                                  
                                    <Heading as='h5' textAlign='center'>{activity.title}</Heading>  
                                </Box>
                                <Box>
                                    <Text textAlign='justify' lineHeight='1.7'>{activity.description}</Text>
                                </Box>
                            </Flex>


                        </GridItem>
                    ))}

                </Grid>
            </Container>
            <Container maxW='container.xl'>
                <Flex alignItems='center' direction={{ base: 'column-reverse', lg: 'row' }}
mt='10'
                >


                    <Flex direction='column'
                        pb='20'

                    >
                        <Heading
                            
                            as='h3'
                            color='#214B24'
                            textAlign='left'
                            pb='10px'
                            paddingRight='60px'
                        >
                            Why we do what we do
                            <Divider mt='10' />
                        </Heading>
                        <Heading
                            fontSize='2xl'
                            as={'h2'}
                            color='#214B24'
                            textAlign='left'
                            pb='10'
                            pt='10'
                            paddingRight='60px'
                        >
                            Expertise

                        </Heading>

                        <Text color="#214B24" maxW="2xl" textAlign="justify" 
                            paddingRight='60px'

                        >
                            We have a broad expertise
                            in digital health service
                            execution and management with
                            our diverse and multi talented
                            team with experience and skills
                            in Public Health, Technology,
                            Research, Data science, Finance
                            and Administration,
                            Communication and marketing.
                        </Text>
                        <Heading
                            
                            fontSize='2xl'
                            as={'h2'}
                            color='#214B24'
                            textAlign='left'
                            pb='10'
                            pt='10'
                            paddingRight='60px'
                        >
                            Belief

                        </Heading>
                        <Text color="#214B24" maxW="2xl" textAlign="justify" 
                            paddingRight='60px'

                        >
                            Here at destiny doctors,
                            we believe that each
                            individual has specific
                            skills that is given by
                            God and we do think that
                            we can use those skills to
                            transform the lives of our communities.
                        </Text>
                        <Heading
                            
                            fontSize='2xl'
                            as={'h2'}
                            color='#214B24'
                            textAlign='left'
                            pb='10'
                            pt='10'
                            paddingRight='60px'
                        >
                            service

                        </Heading>
                        <Text color="#214B24" maxW="2xl" textAlign="justify" 
                            paddingRight='60px'

                        >
                            As community based organization, we believe every nurse, doctor, public health activist, clinician who could be practicing or still in medical school can offer a great difference to the community within their different capacities.
                        </Text>
                    </Flex>


                    <Box
                        maxWidth={{
                            
                        }}
                        py={{
                            base: '16',
                            md: '24',
                        }}
                    >
                      
                        <Image src="./surgery.jpeg" alt="surgery" borderRadius={7}/>
                    </Box>
                </Flex>
            </Container>
        </Container>



    </>
}