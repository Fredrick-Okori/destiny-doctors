import React from "react";

import { Container, Box, Flex } from "@chakra-ui/react";

export default function Mission() {
    return (
        <Container maxW='container.lg' color='#262626' py='7' mt='10' >
            <Flex justifyContent="space-between">
                <Box width="23%" p="4"
                    _hover={{ bg: '#214B24', transition: 'all .2s', color: 'white' }}
                    border={'1px solid white'}
                    transform='scaleY(1.5)'
                    
                >
                    {/* Card 1 */}
                    <div>Your content for Card 1</div>
                </Box>
                <Box width="23%" p="4">
                    {/* Card 2 */}
                    <div>Your content for Card 2</div>
                </Box>
                <Box width="23%" p="4">
                    {/* Card 3 */}
                    <div>Your content for Card 3</div>
                </Box>
                <Box width="23%" p="4">
                    {/* Card 4 */}
                    <div>Your content for Card 4</div>
                </Box>
            </Flex>
        </Container>
    )
}
