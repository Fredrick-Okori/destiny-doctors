import React from "react";
import Hero from "./herosection.programs";
import ContactButton from "../../../components/handleMail";

import { Container, Flex, Box, Text, Image, ButtonGroup, Divider, Heading, } from "@chakra-ui/react";

const programs = [
    {
        id: 1,
        title: 'Community Health Empowerment Project',
        subtitle: 'Putting communities at the forefront of their health',
        image_1: "./DSC_0723.jpg",
        image_2: './surgery-team.jpeg',
        image_3: './surgery-team.jpeg',
        description: 'The Destiny Doctors Community Health Empowerment Project is a robust, multi-dimensional initiative dedicated to addressing healthcare disparities in underserved communities. Central to its mission are Destiny Doctors Clinics, strategically located community health centers offering comprehensive primary care services, health screenings, vaccinations, dental care services, Antenatal Care Services for pregnant women, Eye care services, Surgical Services and health education among others. In addition to these clinics, the project organizes regular medical camps and outreaches, deploying healthcare professionals to remote or marginalized areas. These events provide crucial medical services reaching individuals who might otherwise lack access to healthcare. Recognizing the significance of nutrition in overall well-being, the project looks forward to establishing a Community Nutrition Rehabilitation Center. This facility will offer nutritional assessments, counseling, rehabilitation and other programs aimed at promoting healthier dietary habits within the community. Furthermore, the project prioritizes mental health through its Neuro-lens initiative, which focuses on destigmatizing mental health issues, providing counseling services, and offering resources for mental health awareness and support. Through this comprehensive approach, the Destiny Doctors Community Health Empowerment Project aims not only to provide immediate healthcare services but also to empower communities by fostering health education, preventive care, and holistic well-being.'
    },
    {
        id: 2,
        title: 'Digital Health Project',
        subtitle: 'Unleashing access to digital health',
        image_1: "./digital_health.jpg",
        sectionImage_2: './surgery-team.jpeg',
        sectionImage_3: './surgery-team.jpeg',
        description: 'The Destiny Doctors Digital Health Project is revolutionizing healthcare access in Uganda through a comprehensive suite of innovative services. From virtual doctor consultations and telemedicine to impactful doctor home visits and a pioneering Mobile Laboratory, we are bridging the healthcare gap using cutting-edge technology. Your support fuels this mission, bringing quality healthcare to those who need it most and creating a healthier, more equitable future for communities in Uganda. Join us in transforming lives through digital health innovation.'
    },
    {
        id: 3,
        title: 'Mentorship Project',
        subtitle: 'Guiding and providing a roadmap to growth to youths',
        image_1: "./gallery/mentorship.jpeg",

        sectionImage_3: './surgery-team.jpeg',
        description: 'The Destiny Doctors Mentorship Project is a beacon of hope and opportunity, dedicated to shaping the future of healthcare. Through our mentorship programs, we inspire and guide aspiring students in various institutions, offering scholarships to brilliant minds from underserved families, ensuring no talent goes untapped. Additionally, we foster professional growth by designing and conducting continuing medical education sessions for practitioners, keeping them at the forefront of advancements in healthcare. Moreover, our commitment to fostering research ignites innovation, paving the way for groundbreaking discoveries in the medical field. Your support fuels this transformative initiative, empowering the next generation of healthcare leaders, bridging educational gaps, and advancing medical knowledge. Join us in nurturing talent, driving progress, and creating a brighter, healthier future for all.',
    },
    {
        id: 3,
        title: 'Emergency medicine Project',
        subtitle: 'A first respondents initiative to community emergencies',
        image_1: "./gallery/emergency.jpeg",
        image_2: './surgery-team.jpeg',
        image_3: './surgery-team.jpeg',
        description: 'The Destiny Doctors Emergency Medicine Project is a lifeline in Western Uganda, dedicated to saving lives and building resilient communities. Through our Ambulance Service, we swiftly reach those in critical need, providing timely medical assistance and transport. Moreover, we empower individuals through comprehensive First Aid Training, equipping community members with essential skills to respond effectively in emergencies. Additionally, we conduct extensive Basic and Advanced Life Support training, ensuring that healthcare providers are equipped with the knowledge and expertise to handle critical situations adeptly. Your support powers this vital initiative, enabling us to expand our reach, train more individuals, and provide essential emergency medical services. Join us in being the difference between life and death, ensuring that everyone has access to timely and effective emergency care. Together, we are  saving lives and creating a safer, healthier community.',
    },
    {
        id: 4,
        title: 'The Pharmacy Project',
        subtitle: 'Bringing hard to find human medicines nearer',
        image_1: "./gallery/tmhc.jpeg",

        description: 'The TMHC Pharmacy Project is a beacon of accessibility and health equity in Uganda, dedicated to ensuring that essential medications reach the underprivileged and underserved communities. Our initiative focuses on establishing pharmacies strategically located in these areas, providing easy access to life-saving drugs and medicines. Through your support, we are breaking barriers to healthcare access, making vital medications affordable and available to those who need them most. Join us in our mission to create a healthier, more equitable Uganda by ensuring that no one is left behind when it comes to essential medicines.',

    },
    {
        id: 5,
        title: 'The Angel Program',
        subtitle: 'Ensuring safer childhood & maternal deliveries',
        image_1: "./gallery/karamoja.jpeg",

        description: 'The Destiny Doctors Angel Program is a lifeline for expectant mothers in Western Uganda, aiming to safeguard the health of both mothers and newborns. Through our initiative, we provide mama kits to pregnant women, crucial in reducing infection-related neonatal mortality. In Uganda, the staggering statistic of 40 out of every 1000 babies dying within their first month of life is a stark reality.Your support enables us to provide these essential kits, ensuring safer deliveries and healthier starts for both mothers and their precious newborns. Join us in being an angel to these mothers, providing the necessary tools to protect the lives of their babies.Your contribution to the Destiny Doctors Angel Program is a direct investment in saving lives and creating a brighter future for families in Uganda',

    }

]

export default function AllPrograms({ index }) {
    return (
        <Container maxW="max-content">
            <Flex
                gap={10}
                direction={{ base: "column", lg: "row" }}
                padding={10}
                mt={-3}
                bg="#f5f7f9"
                boxShadow={"var(--chakra-shadows-xl)"}
                borderRadius="7"
            >
            {programs.map((program, id) => (
                <Box key={id}>
                  
                        <Box>
                            <Heading color="#214B24" size="2xl" mt={5}>
                                {program.title}
                            </Heading>
                            <Heading size="md" color="#37B34A" pt={5} pb={5}>
                                {program.subtitle}
                            </Heading>
                            <Text textAlign={"justify"} lineHeight="2.0">
                                {program.description}
                            </Text>
                        </Box>

                        <Box mt={10}>
                            <Image
                                flex={1}
                                src={program.image_1}
                                alt={program.title}
                                maxW={{ base: "450", lg: "500" }}
                                borderRadius={"var(--chakra-radii-lg)"}
                                overflow="hidden"
                                borderColor={"var(--chakra-colors-gray-200)"}
                                bg={"white"}
                                boxShadow={"var(--chakra-shadows-xl)"}
                                textAlign="center"
                                alignItems={"center"}
                                transition="transform 300ms cubic-bezier(0, 0, 0.2, 1)"
                                opacity={0.8}
                                _moztransition="opacity .25s ease-in-out" // for Firefox
                                _webkittransition="opacity .25s ease-in-out"
                                _hover={{
                                    transform: "scale(1.05)",
                                    opacity: "0.5",
                                    transition: "opacity .25s ease-in-out",
                                }}
                            />

                            <Box mt={"20"} textAlign={"center"}>
                                <Heading as="h4" color={"#214B24"}>
                                    Want to support us?
                                </Heading>
                                <Text lineHeight={"1.7rem"}>
                                    Send us an email if you are interested in supporting us
                                    in this program?
                                </Text>
                                <ButtonGroup mt={"5"} mb={"10"}>
                                    <ContactButton />
                                </ButtonGroup>
                            </Box>
                        </Box>
                
                </Box>
            ))}

            </Flex>
        </Container>
    );
}